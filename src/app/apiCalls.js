
import 'server-only';
import { rawImageData } from './imageData.js';

const baseUrl = 'https://api.cloudflare.com/client/v4/accounts/';

export const getImageVariantUrls = async imageID => {
    const accountID = process.env.NEXT_PUBLIC_ACCOUNT_ID;
    const fullURL = `${baseUrl}${accountID}/images/v1/${imageID}`;
    const payload = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.NEXT_PUBLIC_API_KEY
        }
    };
    const response = await fetch(fullURL, payload);
    const resJSON = await response.json();
    return resJSON.result.variants;
};

export const getImage = async (url, type) => {
    const result = await getImageVariantUrls(url);
    const formattedUrl = result.filter(variant => variant.endsWith(type))[0];
    return formattedUrl;
};

export const getBannerImage = async () => {
    const bannerImgUrl = process.env.NEXT_PUBLIC_BANNER_IMG_ID;
    return getImage(bannerImgUrl, 'landscapeWeb');
};

export const sanitizeBannerData = async data => {
    const sanitizedData = await Promise.all(
        data.map(async image => {
            const { id, variantSize, categoryName } = image;
            const url = await getImage(id, variantSize);
            return { url, categoryName }; 
        })
    );
    return sanitizedData;
};

export const getGalleryBannerImages = async () => {
    const bannerImagesData = data => {
        return data.map(category => {
            const { id, variantSize } = category.images.filter(image => image.isBanner)[0];
            const categoryName = category.category;
            return { id, variantSize, categoryName };
        });
    };
    const unsanitizedData = bannerImagesData(rawImageData);
    const imageData = await sanitizeBannerData(unsanitizedData);
    return imageData;
};

export const getPhotosByGalleryType = async type => {
    const filteredImages = rawImageData.filter(data => { 
        return data.category === type ? true : false;
    });
    const imageData = [ ...filteredImages[0].images ];
    const sanitizedImageData = await Promise.all(
        imageData.map(async image => {
            const { id, caption, name, storeURL, variantSize, order } = image;
            const url = await getImage(id, variantSize);
            return { id, caption, name, storeURL, variantSize, order, url };
        })
    );
    return sanitizedImageData;
};
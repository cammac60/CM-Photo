
import 'server-only';
import { rawImageData } from './imageData.js';

const baseUrl = 'https://api.cloudflare.com/client/v4/accounts/';

export const getImageVariantUrls = async imageID => {
    const accountID = process.env.ACCOUNT_ID;
    const fullURL = `${baseUrl}${accountID}/images/v1/${imageID}`;
    const payload = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.API_KEY
        }
    };
    const response = await fetch(fullURL, payload);
    // if(response.status !== 200) {
    //     console.log(response)
    //     throw new Error('There was a problem retreiving the image URL(s)');
    // }
    const resJSON = await response.json();
    return resJSON.result.variants;
};

export const getImage = async (url, type) => {
    const result = await getImageVariantUrls(url);
    const formattedUrl = result.filter(variant => variant.endsWith(type))[0];
    return formattedUrl;
};

export const getBannerImage = async () => {
    const bannerImgUrl = process.env.BANNER_IMG_ID;
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
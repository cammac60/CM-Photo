
import 'server-only';
import { imageData } from './imageData.js';

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

export const getGalleryBannerImages = async () => {
    // Filter banner images from imageData
    const bannerImages = data => {
        return data.map(category => {
            return {
                category: category.category,
                images: category.images.filter(image => image.isBanner)
            };
        });
    };
    return bannerImages(imageData);
    // Sort images in correct order
    // For each image run getImage with id and variant, append result to image object
};
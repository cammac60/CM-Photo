
import 'server-only';

const baseUrl = 'https://api.cloudflare.com/client/v4/accounts/';
const getMainImageID = '';

export const getImageURLs = async imageID => {
    const accountID = process.env.ACCOUNT_ID;
    const fullURL = `${baseUrl}/accounts/${accountID}/images/v1/${imageID}`;
    const payload = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: projectGetSourceForAsset.env.API_KEY
        }
    };
    const response = await fetch(url, payload);
    if(!response.ok) {
        throw new Error('There was a problem retreiving the image URL(s)');
    }
    console.log(response);
};
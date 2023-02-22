// constants/contentful.tsx

// this should be set up in .env variables
export const CONTENTFUL_SPACE_ID = 'rs4ohh0j0cg3';
export const CONTENTFUL_ACCESS_TOKEN = 'YxXERfgA07NZY6zHlW_CobayE2IqsqJObApKLor0gKI';
export const CONTENTFUL_PREVIEW_ACCESS_TOKEN = '5jk2Qi84znEIPcXkv3n1WR-75DqPiX8329Wv7jqhpw8';
export const CONTENTFUL_PREVIEW_SECRET = 'secret_token';

// settings
export const deliveryCall = {
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
}

export const previewCall = {
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
}

import client from '../../api/client';

const advertsUrl = '/api/v1/adverts';

export const getAdverts = () => {
  const url = `${advertsUrl}`;
  return client.get(url);
};

export const createAdvert = ({ ...advertContent }) => {
  const url = advertsUrl;
  return client.post(url, advertContent, {});
};

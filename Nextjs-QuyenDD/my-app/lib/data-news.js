import axios from 'axios';

export const getDataNews = async () => {
  const apiNewsHome = process.env.NEXT_PUBLIC_API_NEWS_HOME;
  try {
    const res = await axios.get(apiNewsHome);
    return res.data;
  } catch (err) {
    console.log('erro :', err);
  }
};

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_KEY = process.env.COINAPI_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url, method = 'GET', params = {}, headers = {} } = req.body;
  try {
    const response = await axios.request({
      url,
      method,
      params,
      headers: {
         'X-CoinAPI-Key': API_KEY,
         ...headers
      },
    });
    res.status(response.status).json(response.data);
  } catch (error:any) {
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}
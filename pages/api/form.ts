import type { NextApiRequest, NextApiResponse } from 'next';
import { validateRequestSession } from '../../utils/auth';
import axios from 'axios';

type Data = {
  data: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const validated = await validateRequestSession(req);
  if (validated) {
    const userData = req.body;
    const endpoint = 'https://hook.us1.make.com/5gicl1lx7wgxcq7ptcxpb62hh39l57ee';
    try {
      await axios.post(endpoint, userData);
      res.status(200).json({ data: 'Request Validated and User Data Sent' });
    } catch (error) {
      res.status(500).json({ data: 'Request Validated but User Data Failed to Send' });
    }
  } else {
    res.status(401).json({ data: 'Request Not Validated' });
  }
}

import { NextApiRequest, NextApiResponse } from 'next';
import { generateUniqueID } from './_utilities';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const poll = {
    id: generateUniqueID(),
  };

  res.json(poll);
};

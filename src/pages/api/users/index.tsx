import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Kaíque' },
    { id: 2, name: 'Lucas' },
    { id: 3, name: 'Fernanda' },
  ];

  return response.json(users);
}

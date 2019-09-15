import { NowRequest, NowResponse } from '@now/node';
import { getRepository } from 'typeorm';
import { User } from '../../../entities/User';
import { initializeDatabase } from '../../../initializers/database';

export default async (req: NowRequest, res: NowResponse) => {
  const connection = await initializeDatabase();
  const userRepo = await getRepository(User);

  console.log('HERE');

  // const {
  //   query: { name }
  // } = req;

  // const {
  //   body: { name }
  // } = req;

  const user = await userRepo.find();
  await connection.close();
  return res.json({ user });
};

import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

const saltRounds = 10;

export const generateToken = (id: string) => {
  const token = jwt.sign(
    {
      id,
      expiresIn: '1d',
    },
    'mySecretKey', // TODO:
  );

  return `bearer ${token}`;
};

export const generateHash = (password: string) => bcrypt.hashSync(password, saltRounds);

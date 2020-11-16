import { resolve } from 'path';
import { config } from 'dotenv';

config({ path: resolve(__dirname, '../../.env') });

type CommonConfig = {
  port: number;
  env: string;
  corsUrl: boolean | string[];
  jwtSecret: string;
};

const CORS_URL = ['cookie-tutorial.gomistore.com'];

export const common: CommonConfig = {
  port: (process.env.PORT && parseInt(process.env.PORT, 10)) || 8080,
  env: process.env.NODE_ENV || 'development',

  corsUrl: true,

  jwtSecret: process.env.JWT_SECRET || 'secret',
};

if (process.env.NODE_ENV === 'production') {
  common.corsUrl = CORS_URL;
}

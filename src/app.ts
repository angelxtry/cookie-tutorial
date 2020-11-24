import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { common, logger, stream } from './config';
import userRouter from './resources/user/user.router';
import companyRouter from './resources/company/company.router';

const app = express();
app.use(
  cors({
    origin: common.corsUrl,
    credentials: true,
  }),
);
app.use(helmet());
app.use(morgan('combined', { stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/health', (_, res) => {
  res.status(200).send('health check');
});

app.use('/user', userRouter);
app.use('/company', companyRouter);

const { port } = common;
export const start = () => {
  app.listen(port, () => {
    console.log(`${process.env.NODE_ENV}`);
    logger.info(`server is on ${port}`);
  });
};

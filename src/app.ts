import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { common, logger, stream } from './config';
import loginRouter from './resources/login/login.router';
import meRouter from './resources/me/me.router';
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

app.use('/login', loginRouter);
app.use('/me', meRouter);
app.use('/company', companyRouter);

const { port } = common;
export const start = () => {
  app.listen(port, () => {
    logger.info(`server is on ${port}`);
  });
};

import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';

const { combine, timestamp, printf } = winston.format;

const logDir = 'logs';
const logFormat = printf((info) => `${info.timestamp}|${info.level}|${info.message}`);

export const logger = winston.createLogger({
  format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), logFormat),
  transports: [
    new winstonDaily({
      level: 'info',
      datePattern: 'YYYY-MM-DD-HH',
      dirname: logDir,
      filename: '%DATE%.log',
      maxFiles: '7d',
      maxSize: '20m',
      zippedArchive: true,
    }),
    new winstonDaily({
      level: 'error',
      datePattern: 'YYYY-MM-DD-HH',
      dirname: `${logDir}/error`,
      filename: '%DATE%.error.log',
      maxFiles: '7d',
      maxSize: '20m',
      zippedArchive: true,
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
    }),
  );
}

export const stream = {
  write: (message) => logger.info(message),
};

import * as winston from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
import * as path from 'path'
import { Console } from 'winston/lib/winston/transports'
const bsaeSir = path.join(__dirname, '../../logs/')
import { Loggly } from 'winston-loggly-bulk'
import { NODE_ENV } from '../config/app'
const transport: DailyRotateFile = new DailyRotateFile({
  filename: bsaeSir + 'application-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
})
let logger = winston.createLogger({
  transports: [
    transport,
    new Console(),
    new Loggly({
      token: '50dccb28-a5ce-44f5-9f42-84d8a20e95d9',
      subdomain: 'brightdigigold',
      tags: ['MICRO_USER'],
      json: true,
    }),
  ],
  format: winston.format.combine(winston.format.json()),
})
if (NODE_ENV === 'production') {
  logger = winston.createLogger({
    transports: [
      transport,
      new Console({
        format: winston.format.json(),
      }),
      new Loggly({
        token: '50dccb28-a5ce-44f5-9f42-84d8a20e95d9',
        subdomain: 'brightdigigold',
        tags: ['MICRO_USER'],
        json: true,
      }),
    ],
    format: winston.format.combine(winston.format.json()),
  })
}
logger.exitOnError = false

export default logger

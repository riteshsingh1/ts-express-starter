import express from 'express'
import cors from 'cors'
import { connect } from 'mongoose'
import 'dotenv/config'
import router from './routes'
import { dbConfig } from './config/database'
import { PORT } from './config/app'
import logger from './utils/logger'
import { Job } from './config/cron'
const application = express()

application.use(express.json())
const corsConfig = {
  origin: '*',
  methods: '*',
}
application.use(cors(corsConfig))
// application.all('*', LogActivity);

application.use('/', router)

if (dbConfig.mongooseUrl) {
  connect(dbConfig.mongooseUrl, () => {
    logger.info(`database connected`)
  })
} else {
  logger.error('dbconfig Url not defined')
}

Job.start()

application.listen(PORT, () => {
  logger.info(`server running on ${PORT}`)
})

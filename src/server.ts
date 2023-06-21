import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './logger/logger'

const databaseConnect = async () => {
  try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`)
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    errorLogger.error(err.message)
  }
}

databaseConnect()

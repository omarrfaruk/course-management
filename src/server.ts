import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { Server } from 'http'
import { errorLogger, logger } from './shared/logger'

process.on('uncaughtException', error => {
  errorLogger.error(error)
  process.exit(1)
})

let server: Server

const databaseConnect = async () => {
  try {
    await mongoose.connect(config.database_url as string)
    server = app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`)
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    errorLogger.error('failed', err.message)
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

databaseConnect()

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received')
  if (server) {
    server.close()
  }
})

import { Model, ModelStatic, Sequelize } from 'sequelize-typescript'
import UserScheme from './models/User'
import dotenv from 'dotenv'
import User from './models/User'
import Course from './models/Course'

// CONFIGURE ENVIRONMENT VARIABLES
dotenv.config()

const dbConnection = new Sequelize({
  database: process.env.DB_NAME as string,
  username: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  host: process.env.DB_HOST as string,
  dialect: 'mssql',
  dialectOptions: {
    encrypt: true,
  },
  port: process.env.DB_PORT as unknown as number,
  logging: false,
  models: [User, Course],
})

export default dbConnection
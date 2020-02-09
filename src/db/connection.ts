import { Sequelize } from 'sequelize-typescript';
import models from './models';
import config from '../config';

const sequelize = new Sequelize(config.DB_URL, {
  dialectOptions: {
    charset: "utf8",
    multipleStatements: "true"
  },
  logging: false,
  models 
})

export default sequelize;
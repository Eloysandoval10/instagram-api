//! const dotenv = require('dotenv')
//! dotenv.config()

require('dotenv').config()

const config = {
  port: process.env.PORT || 5000,
  // <<<<<<< HEAD
  host: process.env.HOST || 'http://localhost:5000',
  // =======
  host: process.env.HOST || "http://localhost:5000",
// >>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
  nodeEnv: process.env.NODE_ENV || "dev", //? dev, prod, test
  jwtSecret: process.env.JWT_SECRET,
  db: {
    dev: {
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      database: "instagram-db",
      username: "postgres",
      password: "root",
      //Extra configs
      define: {
        timestamps: true,
        underscored: true,
      },
    },
    prod: {
      dialect: "postgres",
      host: process.env.DB_PROD_HOST,
      port: process.env.DB_PROD_PORT,
      database: process.env.DB_PROD_NAME,
      username: process.env.DB_PROD_USER,
      password: process.env.DB_PROD_PASS,
      //Extra configs
      define: {
        timestamps: true,
        underscored: true,
      },
      //Esta configuracion es para produccion
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    },
    test: {
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      database: "instagram-db",
      username: "postgres",
      password: "root",
      //Extra configs
      define: {
        timestamps: true,
        underscored: true,
      },
    },
  },
};

module.exports = config
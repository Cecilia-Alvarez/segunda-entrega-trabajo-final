require('dotenv').config();
const firebaseConfig = require('./bd/bd-firebase-v1-firebase-adminsdk-858nw-8746f3c906.json');

module.exports = {
  ENV: {
    PORT: process.env.PORT || 8080,
    PERS: process.env.PERS || 'mongo', // Puede cambiar entre firebase, mongo 
  },
  DB_CONFIG: {
    mongodb: {
      uri: process.env.URI_MONGODB
    },
    firebase: {
        credential: admin.credential.cert(firebaseConfig),
        databaseURL: "https://bd-firebase-v1-default-rtdb.firebaseio.com"
    }
  }
}
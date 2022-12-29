'use strict'

module.exports = {
    fileSizes: 1000000,
    mongodb: {
        uri: 'mongodb://localhost:27017/dv',
    },
    session: {
        name: '',
        keys: ['', ''],

    },
    mail: {
        from: 'moreply@express.localhost',
        settings: {
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "5a0b5c0eef2b60",
          pass: "0a81e6e983ed27"
        }
     }
    }
    
    };
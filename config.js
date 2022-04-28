import dotenv from 'dotenv'
dotenv.config()
const MONGO_DB = process.env.MONGO_DB_URI

export default {
DB_CONFIG:{
    mongodb: {
        conexion: MONGO_DB
    },
    firebase :{
        "type": "service_account",
        "project_id": "bd-firebase-v1",
        "private_key_id": "8746f3c906d6fd78238acf28005ec78becf4c970",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC6VLNNB6c3Du9l\n0ADWstHYX2xC/bkRKjohAAGG/RCfX2QZrdr2tQ9oPnkN9sfk1dJkTnENq18pXOaQ\nOCz6enR/v8xJa8nAprh5DudH4yAFBNgtBnv2/Tmhq1wbz4+4lvKJO+I44Q7u64W/\nLpbciG2qFUvKZKP5XX/rkL1couDvn5UXl9hObyBpfO3vweFX01TZDMEPqEhJOoL+\nWliTLvcrp9WlNheZOfeXJ/w5Gd3QSFvP7D7U/29QoiKtDR40GH2a06DGCC5oJFyQ\n7q+OSEs0VYrVfsft2awvdpiar/jh/OvQD43PVPXH/NTw3oBUS4pD4w+T2q/OfNZn\nK77b2mQpAgMBAAECggEAUgKnrDa7HVugeLJVPCoWfGJ7dvzPcMOiNBYZlf1aTJsi\npr7DiiRk9J/SjhfZIVoPMQDpd3e++aie/kkLWu98ySF027fqY7W9qeKqXxSTakIY\nl7Cr7SjFLegLMV5oxnkBpO9LgXdlKDlXc68gzU3q3ppi8mDbXw0NGXRqNBSoZi6Y\n8DYVjJHq5tXQK5n9iPh76aIwE+Kr3ZQKSiwSJSKeLDSx7LPgzkCNaXMm5pm41zGG\nRLakWp1v4hOjOYP4yVf0fKkBluvkNnVKhQZ31T5MYdHWnpH2ddAQbrzRf3og55T4\ngKP/fmmf3zv8/F1nEoflC5XzgKHI7Zzr09znJ8kUxQKBgQDtwFW3zpbr1wbCClfL\ndqZCRxV1pkpIWkgFErJOQI1iqAceDJcAOAbyTPwRsYpOl9RVgo5Qe721hCWbx9UA\nAQ7McR/inMrMB2H7rqP7ZXUiBSLqpH/WCMuPPXidm8U59YjHvH8U+sldZhyXKur0\nMd/EDp3eRrY3xWn9KKkKHMuxVwKBgQDIofxczuhxRUTqQLgdCsXrUJ5KH8KOUm/j\nYwNscXTLRk11naDzWI+LtfZqFWMQp5L6AhlBaqUPOaUDGZbGuW9CYSGRqZF93qNc\nRmb0RnLRJKJwMQ/MXUD2+s2DCdGeAj4yoolYGrpYqTJlOnxeposyEiJUqcJ3Rwyb\nBfhe9EmmfwKBgA3j/94WVuD+lil+GzULAJm8t3dBOPPTOoP5XKuPv/L0qD3MNIJR\nw64ia1PJULBY1JIOZ6wyHppdVykr2rj+VtQBBADkckDLaaEfyfrlKZvMOwcEh2eE\n6ge7arGiqTpCqzQoQjCCmoM3dRIr8sBDrbQxum2DKiBGC3Q8DOxHVGtPAoGBAIxM\nolIwKmGTQ/bf3SAJ+Y9tZ9OD1CR8R1vmUG2UBU1k0yPtX7Dr/C2ByFg0rnrmBCSq\nNQkGz3gPInJBgatj3wa3L6dRwbkYaHpNjQ9C+GWCTclQtbB+gcB0cCQzSI9LGD2G\nZa7jue3oG6KoPHJf2jTgc3tq3t9UIt+BVEbqY1p3AoGBAOb/EQz5V6ctDaHvLLVp\nEhkba1UR6BbFaR130lcfmYQ9rJSXAWuT/E+Qyb16/nJ71WYd33WzxgMvRwkJ38mS\nnR+Mk916M/zUMGcfLSUvoCGfWUOXpgFCcLqUiNMGkW3lv3/IIqau/AffDeBkRfpX\nJ/9keGh2Ay9RFbhgus9AioZ5\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-858nw@bd-firebase-v1.iam.gserviceaccount.com",
        "client_id": "111073340794002314577",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-858nw%40bd-firebase-v1.iam.gserviceaccount.com"
    }
}
}

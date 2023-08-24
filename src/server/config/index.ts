import * as dotenv from 'dotenv';
dotenv.config();

export const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE
};

export const DB_URL = process.env.DB_URL;

export const mailConfig = {
    my_email: process.env.MAILGUN_TO,
    domain: process.env.MAILGUN_DOMAIN,
    api_key: process.env.MAILGUN_API_KEY
};
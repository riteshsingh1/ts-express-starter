import formData from 'form-data';
import Mailgun from 'mailgun.js';
export const EMAIL_HOST = process.env.EMAIL_HOST;
export const EMAIL_METHOD = process.env.EMAIL_METHOD;
export const EMAIL_USERNAME = process.env.EMAIL_USERNAME;
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
export const MAILGUN_KEY = process.env.MAILGUN_KEY || 'asdasdas';
export const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
export const FROM_EMAIL_VERIFY = process.env.FROM_EMAIL_VERIFY;
export const FROM_NAME_VERIFY = process.env.FROM_NAME_VERIFY;

const mailgun = new Mailgun(formData);
export const mailgunClient = mailgun.client({ key: MAILGUN_KEY!, username: 'api' });

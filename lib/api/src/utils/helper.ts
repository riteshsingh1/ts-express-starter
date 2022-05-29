import { Request, Response } from 'express';
import { SKIP_ACTIVITY } from '../config/app';
import { TranslateCode } from '../lang';
import { ApiActivity } from '../models/ApiActivity';

export const HttpStatusCodes = {
  OK: 200,
  UNAUTHORIZED: 403,
  SERVER_ERROR: 500,
  SERVER_DOWN: 503,
  BAD_REQUEST: 400,
};
/**
 * Send Success Response
 * @param request Request
 * @param response Response
 * @returns JSON
 */
export const successResponse = (
  request: Request,
  response: Response,
  code: string,
  data?: any,
  status?: number,
  message?: string
) => {
  let responseObject = {
    code: 'OK',
    message: TranslateCode[request.body.lang || 'en'][code],
    data: data,
    isError: false,
  };
  if (message) {
    responseObject = {
      code: 'OK',
      message: message,
      data: data,
      isError: false,
    };
  }
  try {
    if (SKIP_ACTIVITY) {
      return response.status(200).json(responseObject);
    } else {
      ApiActivity.create({
        userId: request.body.userId,
        apiName: request.body.apiName,
        apiEndPoint: request.originalUrl,
        baseUrl: request.path,
        headers: request.headers,
        request: request.body,
        response: responseObject,
        journeyId: request.body.journeyId,
        remarks: request.headers.remarks || 'Concluded',
        code: code,
        createdAt: Date.now(),
      });
      request.headers.remarks = '';
      return response.status(status || HttpStatusCodes.OK).json(responseObject);
    }
  } catch (err: any) {
    return response.status(status || HttpStatusCodes.SERVER_DOWN).json({});
  }
};

/**
 * Send Invalid Response
 * @param request Request
 * @param response Response
 * @returns JSON
 */
export const invalidResponse = (request: Request, response: Response, code: string, data?: any) => {
  const responseObject = {
    code: code,
    message: TranslateCode[request.body.lang || 'en'][code],
    data: data,
    isError: true,
  };
  try {
    if (SKIP_ACTIVITY) {
      return response.status(HttpStatusCodes.BAD_REQUEST).json(responseObject);
    } else {
      ApiActivity.create({
        userId: request.body.userId,
        apiName: request.body.apiName,
        apiEndPoint: request.originalUrl,
        baseUrl: request.path,
        headers: request.headers,
        request: request.body,
        response: responseObject,
        journeyId: request.body.journeyId,
        remarks: request.headers.remarks || 'Concluded',
        code: code,
        createdAt: Date.now(),
      });
      request.headers.remarks = '';
      return response.status(HttpStatusCodes.BAD_REQUEST).json(responseObject);
    }
  } catch (err: any) {
    return response.status(HttpStatusCodes.SERVER_DOWN).json({});
  }
};

/**
 * Send Error Response
 * @param request Request
 * @param response Response
 * @returns JSON
 */
export const errorResponse = (request: Request, response: Response, code: string, data?: any, status?: number) => {
  const responseObject = {
    code: code,
    message: TranslateCode[request.body.lang || 'en'][code],
    data: data,
    isError: true,
  };
  try {
    if (SKIP_ACTIVITY) {
      return response.status(status || HttpStatusCodes.SERVER_ERROR).json(responseObject);
    } else {
      ApiActivity.create({
        userId: request.body.userId,
        apiName: request.body.apiName,
        apiEndPoint: request.originalUrl,
        baseUrl: request.path,
        headers: request.headers,
        request: request.body,
        response: responseObject,
        journeyId: request.body.journeyId,
        remarks: request.headers.remarks || 'Concluded',
        code: code,
        createdAt: Date.now(),
      });
      request.headers.remarks = '';
      return response.status(status || HttpStatusCodes.SERVER_ERROR).json(responseObject);
    }
  } catch (err: any) {
    return response.status(HttpStatusCodes.SERVER_DOWN).json({});
  }
};

/**
 * Check if a string is numeric or not
 * @param value string | number
 * @returns boolean
 */
export const isNumeric = (value: string | number) => {
  return /^-?\d+$/.test(value.toString());
};

/**
 * Check if a email is valid or not
 * @param email string
 * @returns boolean
 */
export const isValidEmail = (email: string) => {
  /* eslint-disable no-useless-escape */
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
export const ParseFloat = (str: string | number, val: number): number => {
  str = str.toString();
  str = str.slice(0, str.indexOf('.') + val + 1);
  return Number(str);
};

/**
 * Mask PAN Number
 * @param panNumber string
 * @returns string
 */
export const maskPanNumber = (panNumber: string) => {
  if (panNumber.trim().length !== 10) {
    return '';
  }
  const startingPan = panNumber.substring(0, 3);
  const endingPan = panNumber.substring(10, 10);
  return `${startingPan}XXXXXX${endingPan}`;
};

/**
 * Mask PAN Number
 * @param aadhaarNumber string
 * @returns string
 */
export const maskAadhaarNumber = (aadhaarNumber: string) => {
  if (aadhaarNumber.trim().length !== 12) {
    return '';
  }
  const startingPan = aadhaarNumber.substring(0, 4);
  const endingPan = aadhaarNumber.substring(10, 12);
  return `${startingPan}XXXXXX${endingPan}`;
};

/**
 * @method generateInvoiceNumber
 * @returns Invoice number
 */
export const generateInvoiceNumber = (): string => {
  const date = new Date();
  const firstTwoDigits = date.getFullYear() - 2000;
  const nextTwoDigits = date.getDate();
  const currentMonth = ('0' + date.getMonth().toString()).slice(-2);
  const uniqueInvoiceNumber = Math.floor(Math.random() * 100000);
  return `BDG${firstTwoDigits}${nextTwoDigits}${currentMonth}20${uniqueInvoiceNumber}`;
};

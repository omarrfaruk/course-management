import { IgenericErrorMessages } from './error';

export type IgenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IgenericErrorMessages[];
};

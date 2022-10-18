require('dotenv').config();

export default class ApiConfig {
  public static readonly HOST: string = process.env.API_HOST;
  public static readonly PORT: number = Number(process.env.API_PORT);
}
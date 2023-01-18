import dotenv from 'dotenv';

dotenv.config();

const castStringToNumber = (value?: string): number => Number(value);
const castStringToBoolean = (value?: string): boolean => {
    if(!value) return false;
    const truthy = [
        'true',
        '1'
    ]

    return truthy.includes(value.toLocaleLowerCase());
}

export const PORT = castStringToNumber(process.env.PORT) || 8080;
export const DB_NAME = process.env.DB_NAME || 'vaini-catalog';
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "";
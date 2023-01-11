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
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = process.env.DB_PORT || 27017;
export const DB_NAME = process.env.DB_NAME || 'vaini';
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "";
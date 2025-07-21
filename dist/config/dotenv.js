import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../environment/.env') });
export const config = {
    discord_Token: process.env.TOKEN,
    discord_ClientId: process.env.CLIENTID,
    currencyApiKey: process.env.API_KEY,
    currencyApiUrl: process.env.API_URL,
};

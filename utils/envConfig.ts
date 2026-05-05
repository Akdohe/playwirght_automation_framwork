import 'dotenv/config';

export const ENV = {
    BASE_URL: process.env.BASE_URL!,
    USERNAME: process.env.SAUCE_USERNAME!,
    PASSWORD: process.env.SAUCE_PASSWORD!,
};
// here directly @providing the username will override the system username and porvide it so
//it will show an error cause system user will picked up from there 

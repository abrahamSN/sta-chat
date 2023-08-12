import mongoose from "mongoose";

class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        const {
            DB_USER,
            DB_PASS,
            DB_HOST,
            DB_PORT,
            DB_NAME
        } = process.env;
        
        const url: string = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

        mongoose
            .connect(
                url,
                {
                    auth: {
                        username: DB_USER,
                        password: DB_PASS
                    },
                    authSource: 'admin',
                }
            )
            .then(() => {
                console.log('Database connection successful');
            })
            .catch((err) => {
                console.error('Database connection error:', err);
            });
    }
}

export default Database;

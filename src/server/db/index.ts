// import * as mysql from "mysql";
// import { sqlConfig } from "../config";

// const pool = mysql.createPool(sqlConfig);

// export const Query = <T = mysql.OkPacket>(string: string, values: unknown[] = []) => {
//     return new Promise<T>((resolve, reject) => {
//         pool.query(string, values, (err, results) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(results);
//             }
//         });
//     });
// };

// import users from "./queries/users";

// export default {
//     users
// }

import * as mysql from 'mysql';
import { sqlConfig } from '../config';

const pool = mysql.createPool(sqlConfig);

export const Query = <T = any>(query: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {
        pool.query(query, values, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

import users from './queries/users';

export default {
    users
}
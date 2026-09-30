import pool from '../configdb.js';

//retrieve
export const fetch = async () => {
    const [rows] = await pool.query("SELECT * FROM Book");
    return rows;
};
const pool = require('../../../lib/db');

export default async (req, res) => {
    try {
        const desc = req.body.data
        const post = desc !== '' ? await pool.query(`INSERT INTO contact (description) VALUES($1)`, [desc]) : null;
        const get = await pool.query(`SELECT * FROM contact`)
        res.status(200).json(get.rows.map(item => ({[item.todo_id]: item.description})));
    } catch (e) {
        console.error(e);
        res.status(500).end();
    }
};

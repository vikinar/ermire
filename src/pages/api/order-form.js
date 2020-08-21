const pool = require('../../../lib/db');

export default async (req, res) => {
    try {
        const desc = req.body
        //res.setHeader('Content-Type', 'application/json')
        // if(req.method==='POST'){
            const post = desc !== '' ? await pool.query(`INSERT INTO contact (content, date) VALUES($1, to_timestamp(${Date.now()} / 1000.0))`, [desc]) : null;
        // } else {
            const get = await pool.query(`SELECT * FROM contact`)
            res.status(200).json(get.rows.map(item => ({id: item.id, date: item.date, desc: JSON.parse(item.content)})));
            res.status(200).json(desc)
        // }
    } catch (e) {
        console.error(e);
        res.status(500).end();
    }
};


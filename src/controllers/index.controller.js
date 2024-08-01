import { pool } from '../services/db.js'

export const ping = async (req, res) => {
  const [result] = await pool.query('SELECT "PON" AS result')
  res.json(result)
}
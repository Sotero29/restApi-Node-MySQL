import { pool } from '../services/db.js'

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee");
    res.json(rows)
  } catch (error) {
    return res.status(500)
  }
}

export const getEmployee = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [req.params.id])
    if (rows.length === 0) return res.status(404).json({
      message: 'Usuario no encontrado'
    })
    res.json(rows[0])
  } catch (error) {
    return res.status(500)
  }
}


export const updateEmployee = async (req, res) => {
  const { id } = req.params
  const { name, salary } = req.body
  try {
    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Usuario no encontrado" })
      const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
    res.json(rows[0]);
  } catch (error) {
    return res.status(500)
  }
}


export const createEmployee = async (req, res) => {
  const { name, salary } = req.body;
  const [rows] = await pool.query("INSERT INTO employee(name, salary) VALUES (?, ?)", [name, salary])
  res.send({
    id: rows.insertId,
    name,
    salary,
  })
}

export const deleteEmployee = async (req, res) => {
  const { id } = req.params
  try {
    const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [id])

    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.sendStatus(204)
  } catch (error) {
    res.status(500)
  }
}
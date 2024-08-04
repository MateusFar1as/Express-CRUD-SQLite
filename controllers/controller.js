const db = require('../db/connectToDB');

const postStudents = (req, res) => {
  const { name } = req.body;

  db.run(`INSERT INTO students (name) VALUES (?)`, name, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    res.status(201).json({ message: `Success on creating ${name}` });
  });
}

const getStudents = (req, res) => {
  db.all(`SELECT id, name FROM students`, [], (err, data) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    res.status(200).json({ data });
  });
}

const getAStudents = (req, res) => {
  const { id } = req.params;

  db.all(`SELECT id, name FROM students where id = ?`, id, (err, data) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    if (data.length < 1) {
      return res.status(404).json({ message: `id ${id} not found!!` })
    }

    res.status(200).json({ data });
  });
}

const putStudents = (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  db.run(`UPDATE students SET name = ? WHERE id = ?`, [name, id], function(err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    if (this.changes === 0) {
      return res.status(404).json({ message: `id ${id} not found!!` });
    }

    res.status(200).json({ message: `Success updating student ${id} to ${name}` });
  });
}

const deleteStudents = (req, res) => {
  const { id } = req.params;

  db.run(`DELETE FROM students WHERE id = ?`, id, function(err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    if (this.changes === 0) {
      return res.status(404).json({ message: `id ${id} not found!!` });
    }

    res.json({ message: `Success in deleting student ${id}` });
  })
}

module.exports = {
  postStudents,
  getStudents,
  getAStudents,
  putStudents,
  deleteStudents
}

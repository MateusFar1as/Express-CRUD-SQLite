const express = require('express');
const router = express.Router();

const {
  postStudents,
  getStudents,
  getAStudents,
  putStudents,
  deleteStudents
} = require('../controllers/controller');

router.route('/').post(postStudents).get(getStudents);
router.route('/:id').get(getAStudents).put(putStudents).delete(deleteStudents);

module.exports = router;

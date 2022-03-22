import express from "express";
import { createStudent , getStudents, getStudent, deleteStudent, updateStudent} from "../controllers/students.js";


const router = express.Router();



/* Retrive all student information */

router.get('/', getStudents)

/*Create student record */

router.post('/', createStudent);

/* Retrieve a student's information */

router.get('/:id', getStudent);

/* Delete a student's information */

router.delete('/:id', deleteStudent);

/* Edit a particular student's information */

router.patch('/:id', updateStudent);


export default router;
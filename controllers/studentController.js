import * as studentService from '../services/studentService.js';

export const fetchAllStudents = async (req, res) =>{
    const student =await studentService.fetchAllStudents();
    res.status(200).json(students);
}
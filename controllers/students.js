let students = []

export const createStudent = (req,res) => {
    
    const student = req.body;

    students.push(student);

    res.send(`Student: ${student.Firstname} ${student.Surname} ${student.studentid} added to the database`)
};

export const getStudents = (req,res) => {
    console.log(students);
    res.send(students);
};


export const getStudent = (req,res) => {
    const {id} = req.params;
    const foundStudent = students.find((student) => student.studentid == id);
    res.send(foundStudent);
};

export const deleteStudent = (req,res) => {

    const {id} = req.params;

    students = students.filter((student)=> student.studentid != id)

    res.send(`Student with the id ${id} has been deleted`);
};

export const updateStudent = (req,res) => {

    const {id} = req.params;
    const { Firstname, Surname, Degree} = req.body;
    const studentUpdate = students.find((student) => student.studentid == id)

    
    students.Firstname = Firstname;
    

    
    students.Surname = Surname;
    

    
    students.Degree = Degree;
    

    res.send(`Student with the id ${id} has been updated`);


};

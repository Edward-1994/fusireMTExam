export class Student {
    studentId!: string;
    firstName!: string;
    lastName!: string;
    semester!: number;

    constructor (studentId: string, firstName: string, lastName: string, semester: number) {
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.semester = semester;
    }
}
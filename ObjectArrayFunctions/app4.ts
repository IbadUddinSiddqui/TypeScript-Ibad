interface Student  {
    name : string;
    isSenior : boolean;
    assignmentCompleted : "Yes" | "No"
};
let students : Student[] = [
    {name : "Ibad" , isSenior : true , assignmentCompleted : "Yes",},
    {name : "Ammad", isSenior : true , assignmentCompleted : "Yes",},
    {name : "Aquib", isSenior : false , assignmentCompleted : "No",},
    {name : "Hania", isSenior :false , assignmentCompleted : "No",},
]
function findLaiqSeniorStudents(students : Student[]){
    return students.filter(student => student.isSenior && student.assignmentCompleted);
}
let laiqSeniorStudents = findLaiqSeniorStudents(students);
console.log("Senior Students with completed assingmetns are : ", laiqSeniorStudents );

function removingNalaiqSeniorStudents(students : Student[]){
    return students.filter(student => !student.isSenior && student.assignmentCompleted);
}
let nalaiqSeniorStudents = removingNalaiqSeniorStudents(students);
console.log("Nalaiq Senior Students with incompleted assingmetns are : ", nalaiqSeniorStudents );
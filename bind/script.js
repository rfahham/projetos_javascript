const sensei = {
    name : function (){
        console.log(this.firstName +" "+ this.lastName)
    }
}

const student = {
    firstName : "Kakashi",
    lastName : "Matake"
}

const student1 = {
    firstName : "Naruto",
    lastName : "Uzmaki"
}

const student2 = {
    firstName : "Tizuko",
    lastName : "Yazigi"
}

const showStudentName = sensei.name.bind(student)

showStudentName();
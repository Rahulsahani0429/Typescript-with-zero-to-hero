interface data{
    name:string,
    age:number,
    college:string
}
interface teacherSubject extends data {
    subject:string,
    salary:number
    
}
var studentinfo:data={
    name:"rahul",
    age:23,
    college:"DSCET"

}
var teachertinfo:teacherSubject={ 
    name:"sanjeev sir",
    age:40,
    college:"DSCET",
    subject:"math",
    salary:70000

}
var managerinfo:data={
    name:"sandep sir",
    age:23,
    college:"tcs"
}


 console.log(teachertinfo.salary)
 console.log(teachertinfo.name)
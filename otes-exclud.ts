interface collegeType
{
    name:string,
    location:string,
    students:number,
    brance:string
}

var notShow:Omit<collegeType,'location'|'brance'>={
    name:"itt mumbai",
    students:909


}
console.log(notShow);
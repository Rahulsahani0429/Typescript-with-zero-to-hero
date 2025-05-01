enum Role {admin, author, react_only};

var person={
    name:"rahul",
    age:23,
    skills:["React","express"],
    role:Role.author
}

if(person.role===Role.admin){
    console.log("you are  a man")
}
else if(person.role===Role.author){
    console.log('you are iligivable for this work');
}
else if(person.role===Role.react_only){
    console.log('you are iligivable for this work');
}

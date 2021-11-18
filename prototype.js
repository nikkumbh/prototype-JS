//let arr = [1,2,3,4];

//prototypal inheritance 

let person1 = {
    name : "prabal nikkumbh",
    age : 21,

    showDetails : function(){
        console.log("name is "+ this.name + " age is " + this.age);
    }
}
let person2 = {
    name : "nikk"
}
//person1.showDetails();
person2.__proto__ = person1
//console.log(person2.age)
person2.showDetails()
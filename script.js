let greet = () =>{
    console.log("Good morning");
}
greet();


let sum = () => {
    return a+b;
}

let sum2 = ( x ,y) => x+y;

let devide = a => a/2;

setTimeout(() => {
    console.log("hello Gayu")
}, 3000);

let obj1 ={
    Names:["Harry","Raaz", "Rohan", "Samauel", "Kartik"],
    speak(){
        this.Names.forEach((student)=>{
            console.log("Hello , Welcome to this class " + student)

        });
    }
}
obj1.speak();
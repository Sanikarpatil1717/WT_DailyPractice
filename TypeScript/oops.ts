class Emp
{
	private name:string
	private age:number
	constructor(name:string,age:number)
	{
		this.name=name;
		this.age=age;
	}
	display()
	{
		
		console.log("\nName :"+this.name);
		console.log("Age :"+this.age);
	}
}
class Clerk extends Emp
{
	salary:number;
	designation:string;
	constructor(name:string,age:number,salary:number,designation:string)
	{
		super(name,age);
		this.salary=salary;
		this.designation=designation;
	}
	displayAll()
	{
		this.display();
		console.log("Name :"+this.salary);
		console.log("Age :"+this.designation);
	}
}

var c1=new Clerk("Raju",25,30000,"Tester");
var c2=new Clerk("Suman",33,55000,"Programmer");
//c1.name="Ravi"
c1.display();
c2.displayAll();

console.log("----------------------")

let arr1:string[]=[11,22,33,44,55];
let arr2:Array<string>=["hi","hi2","hi3"];
arr1.push("demo")
console.log(arr1);
console.log(arr2);
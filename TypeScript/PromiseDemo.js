let s1="Wissen"
let s2="Technology"

var promise=new Promise(	function(resolved,rejected)
				{
					if((s1+s2)==="WissenTechnology")
					{
						console.log("Waiting for 5 sec...")
						setTimeout(()=>resolved("Employee Object")
					}
					else
					{
						rejected();
					}
				}
			);
promise
	.then(
		(val)=>
		{
			console.log("Best place to work1");
			console.log("Got :"+val);
			return "Staff Feedbak";
		},
		()=>
		{
			console.log("There is spelling mistake");
			throw new Exception(" 'o' is missing");
		}
	)
	.then(
		(val)=>
		{
			console.log("Best place to work2");
			console.log("Got :"+val);
		},
		()=>
		{
			console.log("There is spelling mistake");
			throw new Exception(" 'o' is missing");
		}
	)
	.catch(
		(err)=>
		{
			console.log("Error handling done here..");
			console.log("Reason :"+err.message)
		}
	)
	.finally(
		()=>
		{
			console.log("THANKS");
		}
	)

console.log("FROM MAIN EXIT");



//state-fulfilled/resolved,rejected,pending,settled
//value-data returned by the resolver/rejector function

//Promise.all(promise1,promise2,promise3)
//Promise.allSettled(promise1,promise2,promise3)
//Promise.race(promise1,promise2,promise3)
//etc.

var number = 11
var count = 1
var result = []

for(var i = 3; i >= 0; i--)
{
	var tmpN = Math.pow(2, i)
	if(number >= tmpN)
	{
		number = number-tmpN
		result.push(count)
	}
	count++
}
console.log("result = "+ result)

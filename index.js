let total=0;
let count=0;
let i=1;
while(count<5)
{
    var marks=parseInt(prompt("enter the marks of subject "+i))
    document.write("mark of subject \t "+i+"\t="+marks+"<br>")
    total=total+marks
    count++;
    i++
}
document.write("total marks"+total+"<br>")

let k=1
for(var count1=0;count1<5;count1++)
{ 
    var value=prompt("enter the value  \t"+k)
    document.write("value \t"+k+"="+value+"<br>")
    k++
}


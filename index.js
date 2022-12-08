let a,b,c,x1,x2,solution,answer, expression;

function linearEquation(a,b,c){

a=Number(prompt("enter x1 value"));

b=Number(prompt("enter x2 value"));

c=Number(prompt("c"))

expression=`${a}X² + ${b}X +  ${c}=0`

solution=Math.sqrt(b**2-4*a*c)

x1= (-b+solution)/(2*a)

x2=(-b-solution)/(2*a)

answer=`x=${x1.toFixed(2)} or x=${x2.toFixed(2)}`

 console.log(`${expression}\nanswer⬇️⬇️\n${answer}`)

 }

linearEquation(a,b,c)


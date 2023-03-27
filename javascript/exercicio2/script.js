const students =[{
    name:"teste",
    firstScore: 90,
    secondScore:90
},
{
    name:"teste2",
    firstScore: 30,
    secondScore:50
},
{
    name:"teste3",
    firstScore: 70,
    secondScore:70
}]

function studentAvarage (students){
    let avarage = ((students.firstScore + students.secondScore)/2).toFixed(2)
    if (avarage >=70){
        return `A media do Aluno(a) ${students.name} e : ${avarage} \n Parabens ${students.name} foi aprovado !`
    }else{
        return `A media do Aluno(a) ${students.name} e : ${avarage} \n  ${students.name} foi reprovado infelizmente!`
    }
    
}

for (const student of students) {
    let result =studentAvarage(student)
    alert(result)
    
}
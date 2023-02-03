//1
let health = prompt('Введите число параметра "здоровье" для персонажа')
if (health <= 0 || !health) 
    {alert('Параметр "здоровье" должен быть больше нуля!')}
else if (health > 0) 
    {alert(`Параметр "здоровье" равен ${health}`)}

//2
 const temperatureInCelsius = prompt('Введите температуру в градусах Цельсия')
 
 if(temperatureInCelsius === '0')
 {alert('0 градусов по Цельсию - это температура замерзания воды')}
 else if (temperatureInCelsius > 0)
 {alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже')}

 const temperatureInFahrenheit = (temperatureInCelsius) * 9/5 + 32
 alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`)

 //3
 const salaryOfJuniorDeveloper = 500
 const numberOfJuniorDeveloper = 3
 let taxPercentage = 13
 let totalJuniorDevelopersSalary = 0

 for (let i = 0; i < numberOfJuniorDeveloper; i += 1)
 {const salaryWithTax = salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper*taxPercentage/100)
totalJuniorDevelopersSalary += salaryWithTax}

console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary)

//4
let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0

for (let i = 0; i < numbers.length; i +=1) {
    numbers[i] = numbers[i] **3
    sum += numbers[i]}
console.log(sum)

sum = 0
for (let num of numbers){
    sum += num;}
console.log(sum)   


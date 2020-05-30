// 1). Написати код в якому, творіть порожній об'єкт user.

// Додайте властивість name зі значенням ПИЛИП.
// Додайте властивість surname зі значенням ШЕВЧЕНКО.
// Замініть значення name на СЕРГІЙ.
// Видаліть властивість name з об'єкта.

// 2). Створіть об’єкт EmployeeSalaries із зарплатами працівників. Напишіть код, який виведе суму всіх зарплат працівників . Якщо об'єкт порожній, то результат/вивід повинен бути 0.

let user = {};

user.name = "Пилип";
user.surname = "Шевченко";

user.name = "Сергій";

delete user.name;

console.log(user);

let EmployeeSalaries = {
  PetroSalary: 2500,
  OksanaSalary: 4800,
  IvanSalary: 25000,
  YuraSalary: 45000,
  IgorSalary: 20000,
};

let sum = 0;
for (let p in EmployeeSalaries) {
  sum += EmployeeSalaries[p];
  console.log(EmployeeSalaries[p], sum);
}
console.log(`Загальна сума зарплат всіх працівників становить: ${sum}`);

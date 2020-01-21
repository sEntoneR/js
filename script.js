'use strict';

let money = +prompt('Ваш бюджет на месяц', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', ''),
    question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ''),
    expense1 = +prompt('Во сколько это обойдется?', ''),
    question2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ''),
    expense2 = +prompt('Во сколько это обойдется?', '');

const appData = {

    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: 0,
    income: [],
    saving: false

};

appData.expenses.question1 = expense1;
appData.expenses.question2 = expense2;

alert(appData.budget / 30);







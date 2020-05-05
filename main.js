let num = 50;

/*while (num <= 55){
    console.log(num);
    ++num;

}*/
/*do{
    console.log(num);
    num++;
}while(num <= 55);*/

/*for (let i = 1; i < 8; i++) {
    if (i == 6){
        continue;
    }
    console.log(i);
}
console.log([] + 1 + 2);
console.log(2 && 1 && null && 0 && undefined);*/


/*while(num < 56){
    console.log(num);
    num++;
}*/
/*do{
    console.log(num);
    num++;
}while(num <= 56);*/

/*for(num; num <= 56; num++ ){
    if (num ==52){
        continue;
    }
    console.log(num);
}*/
let money = prompt("Ваш бюджет на месяц?", '');
let time  = prompt("Введите дату", "YYYY-MM-DD");

console.log(money);
console.log(time);

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: false 
};
let a1 = prompt("Введите обязательную статью расходов в этом месяце"),
    a2 = prompt("Во сколько обойдется?"),
    a3 = prompt("Введите обязательную статью расходов в этом месяце"),
    a4 = prompt("Во сколько обойдется?");

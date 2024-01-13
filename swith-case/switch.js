const date = new Date();
// console.log(date)
const week_day = date.getDay();
// console.log(week_day)
let week_day_str = "";

console.log("Dia da Semana")
console.log("-------------")

switch(week_day) {
    case 0:
        week_day_str = "Hoje é Domingo";
        break;
    case 1:
        week_day_str = "Hoje é Segunda-Feira";
        break;
    case 2:
        week_day_str = "Hoje é Terça-Feira";
        break;
    case 3:
        week_day_str = "Hoje é Quarta-Feira";
        break;
    case 4:
        week_day_str = "Hoje é Quinta-Feira";
        break;
    case 5:
        week_day_str = "Hoje é Sexta-Feira";
        break;
    case 6:
        week_day_str = "Hoje é Sábado";
        break;
    default:
        week_day_str ="Ops !!!";
        break;
}

console.log(week_day_str)
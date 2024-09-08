const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek);
daysOfWeek.push("sun");
console.log(daysOfWeek);

const fact = ["one", "two", "three"];
console.log(fact);
fact.push(1, 2, 3);
console.log(fact);

const player1 = {
  name: "nico",
  age: 20,
  fat: true,
};
console.log(player1);
console.log(player1.age);

function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 33);
sayHello("lynn", 21);

function plus(a, b) {
  console.log(a + b);
}

function divide(a, b) {
  console.log(a / b);
}
plus(8, 60);
divide(10, 2);

const player2 = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log("hello " + otherPersonsName + " nice to meet you");
  },
};

console.log(player2.name);
player2.sayHello("lynn");
player2.sayHello("jun");

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divine: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
  mutiple: function (a, b) {
    return a * b;
  },
};

const addResult = calculator.add(3, 5);
const minusResult = calculator.minus(addResult, 3);
const divineResult = calculator.divine(10, minusResult);
const powerResult = calculator.power(divineResult, 2);
const mulResult = calculator.mutiple(powerResult, divineResult);

const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);

const old = parseInt(prompt("당신은 몇살입니까?"));

if (isNaN(old) || old < 0) {
  console.log("제대로 된 숫자를 입력하세요");
} else if (old < 18) {
  console.log("당신은 나이가 어립니다.");
} else if (old >= 18 && old <= 50) {
  console.log("당신은 술을 마실수 있습니다.");
} else if (old > 50 && old <= 80) {
  console.log("당신은 운동을 해야합니다.");
} else if (old == 100) {
  console.log("당신은 살아있는 역사입니다!");
} else if (old > 80) {
  console.log("당신은 원하는 걸 하십시오.");
}

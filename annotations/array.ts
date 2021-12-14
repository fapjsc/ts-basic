const carMakers: string[] = [];

const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [];

const car = carMakers[0];
const myCar = carMakers.pop();


// Help with 'map'
carMakers.map((car: string): string => {
  return car;
});


const importantDates: (Date | string)[] = [new Date()]
importantDates.push('2021-10-10')
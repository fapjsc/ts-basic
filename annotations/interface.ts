interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const oldDrink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `my drink's color is ${this.color}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(oldDrink);

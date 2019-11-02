const carMakers: string[] = [];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

const car = carMakers[0];
const myCar = carMakers.pop();

carMakers.push(100);

carMakers.map((car: string): string => {
  return car;
});

// flexible arrays
const importDates: (Date | String)[] = [new Date(), "2030-10-10"];
importDates.push("2030-10-10");
importDates.push(new Date());

class Vehicle {
  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  private drive() {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const carNew = new Car();
carNew.startDrivingProcess();

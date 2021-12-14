// Parent Class
class VehicleClasses {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new VehicleClasses("origin");
console.log(vehicle.color);

// Children Class
class CarClasses extends VehicleClasses {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("vroom");
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const carClasses = new CarClasses(4, "red");
carClasses.startDriving();

import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();
console.log(user);
console.log(company);

const mapElement = document.getElementById("map");
console.log(mapElement);
const map = new google.maps.Map(mapElement, {
  zoom: 4,
  center: { lat: 2.15, lng: 66.3162 },
});

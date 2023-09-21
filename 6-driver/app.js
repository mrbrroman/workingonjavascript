const age = 23; // Возраст
const hasLicence = true; // Наличие прав
const isDrunk = false; // Алкогольное опьянение

const canDrive = (age > 18 && hasLicence && !isDrunk) ? "Может" : "Не может";

console.log(canDrive);
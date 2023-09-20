const lang = prompt("Введите любой из указанных языков: ru, en, de");

switch (lang) {
    case "ru":
        console.log("Привет!");
        break;
    case "en":
        console.log("Hello!");
        break;
    case "de":
        console.log("Hallo");
        break;
    default:
        console.log("Извините, я не знаю такого языка");
}
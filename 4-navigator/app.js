// Домашнее задание по основам JavaScript

// Нам нужно рассчитать расстояние до пункта назначения

// Дано:
const positionLatX = 23; // Широта текущей позиции
const positionLongY= 23; // Долгота текущей позиции
const addressLatX = 33; // Широта пункта назначения
const addressLongY = 33; // Долгота пункта назначения

// Решение:
const deltaX = positionLatX - addressLatX; // Разница между широтой пукнта назначения и широтой позиции
const deltaY = positionLongY - addressLongY; // Разница между долготой пункта назначения и долготой позции

// Используем функцию Math.sqrt, чтобы вернуть квадратный корень числа
const result = Math.sqrt((deltaX ** 2) + (deltaY ** 2));

console.log("Расстояние между точками: " + result);

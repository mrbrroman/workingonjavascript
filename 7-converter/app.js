function convertCurrency(amount, fromCurrency, toCurrency) {
    const conversionRate = 0.0099;  // 1 рубль 0.0099 долларов
  
    // Здесь мы проверяем явялется ли исходная валюта рублем, а целевая долларом
    if (fromCurrency !== 'руб' || toCurrency !== '$') {
      return null;
    }
  
    return amount * conversionRate; // Это результат конвертации исходной валюты в целевую
  }
  
  // Пример вызова функции
  const convertedAmount = convertCurrency(1000, 'руб', '$');
  console.log(`${convertedAmount + ' $'}`);
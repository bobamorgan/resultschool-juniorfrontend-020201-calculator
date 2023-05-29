export const handleResult = ({ output, setOutput, setIsResult }) => {
    let result = 0;

    // Формируем из строки вывода массив с числами и операторами для дальнейшей обработки
    const oArr = output.split('');
    const resultArr = [];

    oArr.forEach((value, index) => {
        if (!isNaN(value)) {
            // Число
            if (index === 0) resultArr.push(value); // Если первый элемент
            else if (!isNaN(resultArr[resultArr.length - 1]))
                // Если предыдущий символ тоже число, производим конкатенацию
                resultArr[resultArr.length - 1] = resultArr[resultArr.length - 1] + value;
            else resultArr.push(value);
        } else {
            // Оператор
            resultArr.push(value);
        }
    });

    // Обрабатываем полученный массив
    resultArr.forEach((value, index) => {
        if (isNaN(value)) {
            // Если элемент является оператором, производим математическую операцию
            const num1 = !isNaN(Number(result)) ? Number(result) : 0;
            const num2 = !isNaN(Number(resultArr[index + 1])) ? Number(resultArr[index + 1]) : 0;

            switch (value) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                default:
                    break;
            }
        } else if (index === 0) {
            // Если элемент является первым элементом в массиве и числом
            result = value;
        }
    });

    setOutput(result);
    setIsResult(true);
};

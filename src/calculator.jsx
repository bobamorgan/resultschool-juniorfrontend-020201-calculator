import { useState } from 'react';
import styles from './calculator.module.css';
import { buttons } from './buttons';

export const Calculator = () => {
    const [output, setOutput] = useState({ value: '0', isResult: false });

    // Рендер кнопки
    const renderButton = (button) => {
        const className = [styles.key];
        if (button.type === 'operator') className.push(styles.operator);
        switch (button.format) {
            case 'double':
                className.push(styles.double);
                break;
            case 'enter':
                className.push(styles.enter);
                break;
            default:
                break;
        }
        return (
            <button key={button.value} className={className.join(' ')} onClick={processClick}>
                {button.value}
            </button>
        );
    };

    const processOperator = (operator, value1, value2) => {
        let result = 0;
        const num1 = !isNaN(Number(value1)) ? Number(value1) : 0;
        const num2 = !isNaN(Number(value2)) ? Number(value2) : 0;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            default:
                break;
        }

        return result;
    };

    const calculate = () => {
        // return eval(output.value); // Это простой вариант

        // Ниже непростой вариант
        let result = 0;

        // Формируем из строки вывода массив с числами и операторами для дальнейшей обработки
        const oArr = output.value.split('');
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
                result = processOperator(value, result, resultArr[index + 1]);
            } else if (index === 0) {
                // Если элемент является первым элементом в массиве и числом
                result = value;
            }
        });

        return result;
    };

    const processClick = (event) => {
        const keyValue = event.target.textContent;
        let newOutput = output.value === '0' ? '' : output.value;
        let isResult = false;

        // Число
        if (!isNaN(keyValue)) {
            // Проверка на лишний ноль в начале строки или перед оператором
            const replaceZero = isNaN(output.value[output.value.length - 2]) && output.value[output.value.length - 1] === '0';
            if (replaceZero) {
                const subOutput = output.value.substring(0, output.value.length - 1);
                newOutput = subOutput + keyValue;
            } else {
                newOutput = output.value + keyValue;
            }
            isResult = false;
        }
        // Оператор
        else {
            if (keyValue === '+') {
                if (output.value === '0' || output.value === '-') newOutput = '0'; // Проверка на первый символ
                else if (output.value[output.value.length - 1] === '+' || output.value[output.value.length - 1] === '-')
                    newOutput = output.value.substring(0, output.value.length - 1) + keyValue; // Проверка на двойной оператор
                else newOutput = output.value + keyValue;
                isResult = false;
            } else if (keyValue === '-') {
                if (output.value === '0') newOutput = '-'; // Меняем +/-, если первый символ
                else if (output.value === '-') newOutput = '0';
                else if (output.value[output.value.length - 1] === '+' || output.value[output.value.length - 1] === '-')
                    newOutput = output.value.substring(0, output.value.length - 1) + keyValue; // Проверка на двойной оператор
                else newOutput = output.value + keyValue;
                isResult = false;
            } else if (keyValue === 'C') {
                newOutput = '0'; // Сброс
                isResult = false;
            } else if (keyValue === '=') {
                newOutput = calculate(); // Вычисляем результат
                isResult = true;
            }
        }

        setOutput({ value: newOutput, isResult: isResult });
    };

    return (
        <div className={styles.calculator}>
            <div className={styles.output + (output.isResult ? ` ${styles.result}` : '')}>{output.value}</div>
            <div className={styles.keys}>{buttons.map((button) => renderButton(button))}</div>
        </div>
    );
};

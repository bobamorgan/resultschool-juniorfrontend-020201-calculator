export const handleMinus = ({ output, setOutput, setIsResult }) => {
    let newOutput = output === '0' ? '' : output;

    if (output === '0') newOutput = '-'; // Меняем +/-, если первый символ
    else if (output === '-') newOutput = '0';
    else if (output[output.length - 1] === '+' || output[output.length - 1] === '-')
        newOutput = output.substring(0, output.length - 1) + '-'; // Проверка на двойной оператор
    else newOutput = output + '-';

    setOutput(newOutput);
    setIsResult(false);
};

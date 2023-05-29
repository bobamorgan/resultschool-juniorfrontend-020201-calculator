export const handlePlus = ({ output, setOutput, setIsResult }) => {
    let newOutput = output === '0' ? '' : output;

    if (output === '0' || output === '-') newOutput = '0'; // Проверка на первый символ
    else if (output[output.length - 1] === '+' || output[output.length - 1] === '-')
        newOutput = output.substring(0, output.length - 1) + '+'; // Проверка на двойной оператор
    else newOutput = output + '+';

    setOutput(newOutput);
    setIsResult(false);
};

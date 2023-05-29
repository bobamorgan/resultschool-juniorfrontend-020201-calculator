export const handleNum = ({ output, setOutput, setIsResult }, keyValue) => {
    // const keyValue = event.target.textContent;
    let newOutput = output === '0' ? '' : output;

    // Проверка на лишний ноль в начале строки или перед оператором
    const replaceZero = isNaN(output[output.length - 2]) && output[output.length - 1] === '0';
    if (replaceZero) {
        const subOutput = output.substring(0, output.length - 1);
        newOutput = subOutput + keyValue;
    } else {
        newOutput = output + keyValue;
    }

    setOutput(newOutput);
    setIsResult(false);
};

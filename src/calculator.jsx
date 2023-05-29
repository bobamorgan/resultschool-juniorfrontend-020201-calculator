import { useState } from 'react';
import styles from './calculator.module.css';
import { getButtons } from './get-buttons';

export const Calculator = () => {
    const [output, setOutput] = useState('0');
    const [isResult, setIsResult] = useState(false);

    const state = {
        output,
        setOutput,
        isResult,
        setIsResult,
    };

    const buttons = getButtons(state);

    // Рендер кнопки
    const renderButton = ({ id, value, type, format, handler }) => {
        const className = [styles.key];
        if (type === 'operator') className.push(styles.operator);
        switch (format) {
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
            <button key={id} className={className.join(' ')} onClick={() => handler(value)}>
                {value}
            </button>
        );
    };

    return (
        <div className={styles.calculator}>
            <div className={styles.output + (isResult ? ` ${styles.result}` : '')}>{output}</div>
            <div className={styles.keys}>{buttons.map((button) => renderButton(button))}</div>
        </div>
    );
};

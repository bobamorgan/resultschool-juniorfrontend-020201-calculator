import { handleReset, handleNum, handlePlus, handleMinus, handleResult } from './handlers';

export const getButtons = (state) => [
    { id: '+', value: '+', type: 'operator', format: 'double', handler: () => handlePlus(state) },
    { id: '-', value: '-', type: 'operator', format: 'double', handler: () => handleMinus(state) },
    { id: '1', value: '1', type: 'number', format: 'simple', handler: (value) => handleNum(state, value) },
    { id: '2', value: '2', type: 'number', format: 'simple', handler: (value) => handleNum(state, value) },
    { id: '3', value: '3', type: 'number', format: 'simple', handler: (value) => handleNum(state, value) },
    { id: '4', value: '4', type: 'number', format: 'simple', handler: (value) => handleNum(state, value) },
    { id: '5', value: '5', type: 'number', format: 'simple', handler: (value) => handleNum(state, value) },
    { id: '6', value: '6', type: 'number', format: 'simple', handler: (value) => handleNum(state, value) },
    { id: '7', value: '7', type: 'number', format: 'simple', handler: (value) => handleNum(state, value) },
    { id: '8', value: '8', type: 'number', format: 'simple', handler: (value) => handleNum(state, value) },
    { id: '9', value: '9', type: 'number', format: 'simple', handler: (value) => handleNum(state, value) },
    { id: '0', value: '0', type: 'number', format: 'simple', handler: (value) => handleNum(state, value) },
    { id: 'C', value: 'C', type: 'operator', format: 'double', handler: () => handleReset(state) },
    { id: '=', value: '=', type: 'operator', format: 'enter', handler: () => handleResult(state) },
];

import { launchSequence } from './launch-sequence.js';

const name = 'Atlas';
const COUNT_DOWN_DURATION = 20;

export function launch () {
    launchSequence(COUNT_DOWN_DURATION, name);
};
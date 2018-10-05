import  rocketName, {COUNT_DOWN_DURATION, launch} from './saturn-v.js';
import  falconName, {COUNT_DOWN_DURATION as falconCount, launch as falconLaunch} from './falcon-heavy.js';

export function main() {
    console.log('This is a "%s" rocket', rocketName);
    console.log('It will launch in "%d" seconds', COUNT_DOWN_DURATION);
    launch();
    console.log('This is a "%s" rocket', falconName);
    console.log('It will launch in "%d" seconds', falconCount);
    falconLaunch();
}
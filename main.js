import  {rocket, COUNT_DOWN_DURATION, launch} from './rocket.js';
export function main() {
    console.log('This is a "%s" rocket', rocket);
    console.log('It will launch in "%d" seconds', COUNT_DOWN_DURATION);
    launch();
}
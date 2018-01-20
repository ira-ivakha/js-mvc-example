import TaskModel from './taskModel';
let tasks = new TaskModel([
        {
            text: 'Brew coffee',
            done: true
        },
        {
            text: 'Write some code',
            done: false
        },
        {
            text: 'Sleep',
            done: false
        }
    ]);

export default tasks;
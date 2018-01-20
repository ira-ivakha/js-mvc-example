import taskView from '../view/task'
import TaskModel from '../model/taskModel'
import taskAddFromView from '../view/taskAddForm'

function taskController(rootElement) {

    taskView(rootElement, tasks, {
        onDone,
        onDelete
    });

    taskAddFromView(rootElement, {
        onSubmit
    });





    function onDone(task, status) {
        tasks.done(task, status);

        console.log('tasks', tasks);
    }

    function onDelete(task) {
        tasks.delete(task);
    }

    function onSubmit(text) {
        tasks.add(text);
    }


}
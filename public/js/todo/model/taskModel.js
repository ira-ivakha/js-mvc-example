function TaskModel(tasks) {
    this.listeners = [];

    tasks = tasks || [];

    tasks.forEach(task => {
        this.push(task);
    });
}

TaskModel.prototype = Object.create(Array.prototype);

TaskModel.prototype.done = function (task, status) {
    task.done = status;
    this.trigger('done', [task]);
};

TaskModel.prototype.add = function (text) {
    let task = {
        text,
        done: false
    };

    this.push(task);
    this.trigger('add', [task]);
};


TaskModel.prototype.delete = function (task) {
    let index = this.indexOf(task);
    if (index >= 0) {
        this.splice(index, 1);
    }

    this.trigger('delete', [task]);
};





TaskModel.prototype.on = function (event, callback) {
    this.listeners.push({
        event,
        callback
    });
};

TaskModel.prototype.trigger = function (event, args) {
    let tasks = this;

    this.listeners.forEach(listener => {
        if (listener.event === event) {
            listener.callback.apply(tasks, args);
        }
    });
};



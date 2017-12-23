var MVC = {};


MVC.ObservableSubject = function () {
    var observers = [];

    return {
        addObserver: function (observer) {
            //check if function
            //check in not in collection

            observers.push(observer);
        },

        removeObserver: function (observer) {
            for (var i = 0; i < observers.length; i++) {
                if (observers[i] == observer) {
                    observers.splice(i, 1);
                    return;
                }
            }
        },

        notify: function (data) {
            for (var i = 0; i < observers.length; i++) {
                observers[i](data);
            }
        }
    };
};









MVC.Model = function () {
    var model = this,
        items = [],
        currentIndex = -1;
    this.modelChangedSubject = MVC.ObservableSubject();



    this.addItem = function (value) {
        items.push(value);

        saveData();
        //TODO send notify
        model.modelChangedSubject.notify();
    };

    this.getItems = function () {
        return items;
    };

    this.removeCurrentItem = function () {
        if (currentIndex === undefined) {
            return;
        }

        items.splice(model.currentIndex, 1);
        saveData();
        //TODO send notify
        model.modelChangedSubject.notify();
    };

    this.getCurrentIndex = function () {
        return currentIndex;
    };

    this.setCurrentIndex = function (value) {
        currentIndex = value;
        //TODO send notify
        // model.modelChangedSubject.notify();
    };

    function saveData() {
        localStorage.setItem('items', JSON.stringify(items));
    }

    items = JSON.parse(localStorage.getItem('items') || '[]');
};

MVC.View = function (model, rootObj) {

    console.log(rootObj);

    var view = this;
    view.select = document.createElement('select');
    view.select.size = 5;

    // var option = document.createElement("option");
    // option.text = "Kiwi";
    // view.select.add(option);
    //
    // option = document.createElement("option");
    // option.text = "Kiwi2";
    // view.select.add(option);


    rootObj.appendChild(view.select);

    view.addBtn = document.createElement('button');
    view.addBtn.textContent = '+';
    rootObj.appendChild(view.addBtn);

    view.removeBtn = document.createElement('button');
    view.removeBtn.textContent = '-';
    rootObj.appendChild(view.removeBtn);

    model.modelChangedSubject.addObserver(function () {
        var items = model.getItems();
        console.log('items', items);
        console.log(view.select.childNodes);
        // return;

        for (var i = 0; view.select.childNodes.length; i++) {
            view.select.childNodes[0].remove();
        }

        items.forEach(function (el) {
            var option = document.createElement('option');
            option.textContent = el;
            view.select.appendChild(option);
        });
    });
};

MVC.Controller = function (model, view) {
    view.addBtn.addEventListener('click', function () {
        model.addItem(prompt('Add item', 'item'));
    });

    view.removeBtn.addEventListener('click', function () {
        model.removeCurrentItem();
    });

    view.select.addEventListener('change', function () {
        model.setCurrentIndex(view.select.selectedIndex);
    });


    model.modelChangedSubject.notify();
};

window.addEventListener('load', function () {
    var model = new MVC.Model();
    var view = new MVC.View(model, document.body);
    var controller = new MVC.Controller(model, view);

});



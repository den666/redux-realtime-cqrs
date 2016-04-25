/**
 * Created by xavier on 4/25/16.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Firebase = require('firebase');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var firebaseURL = "https://redux-realtime-cqrs.firebaseio.com";

var todoLists = {
    1: {
        name: "First odo list",
        id: 1

    },
    2: {
        name: "Second todo list",
        id: 2
    }
};
var todos = {
    1: {
        name: "First task of first todo list",
        completed: false,
        todoListId: 1,
        id: 1
    },
    2: {
        name: "Second task of first todo list",
        completed: false,
        todoListId: 1,
        id: 2
    },
    3: {
        name: "First task of second todo list",
        completed: false,
        todoListId: 2,
        id: 3
    },
    4: {
        name: "Second task of second todo list",
        completed: false,
        todoListId: 2,
        id: 4
    }

};
var indexTodoLists = 3;
var indexTodos = 3;

var router = express.Router();

router.get('/', function (req, res) {
    res.json({message: 'It\'s working'});
});

router.get('/todo-lists', function (req, res) {
    res.json({data: todoLists, timestamp: getNowMicroseconds()});
});

router.post('/todo-lists', function (req, res) {

    todoLists[indexTodoLists] = {name: req.body.name, id: indexTodoLists};


    var microseconds = getNowMicroseconds();
    (new Firebase(firebaseURL + '/todo-lists/' + indexTodoLists + "/timestamp")).set(microseconds);
    indexTodoLists++;
    res.json({data: true, timestamp: microseconds});

});

router.get('/todo-lists/:id', function (req, res) {
    res.json({data: todoLists[req.params.id], timestamp: getNowMicroseconds()});
});

router.post('/todo-lists/:id/todos', function (req, res) {
    todos[indexTodos] = {name: req.body.name, todoListId: req.params.id, completed: false, id: indexTodos};


    var microseconds = getNowMicroseconds();
    (new Firebase(firebaseURL + '/todos/' + indexTodos + "/timestamp")).set(microseconds);
    // (new Firebase(firebaseURL + '/todo-lists/'+req.params.id+'/timestamp')).set(microseconds);
    (new Firebase(firebaseURL + '/todo-lists/'+req.params.id+'/todos/timestamp')).set(microseconds);
    indexTodos++;
    res.json({data: true, timestamp: microseconds});

});

//it´s not necessary "/todo-lists/:id", for this example is easier
router.put('/todos/:todoId/toggle', function (req, res) {
    var todo = todos[req.params.todoId];
    todo.completed = !todo.completed;
    todos[req.params.todoId] = todo;


    var microseconds = getNowMicroseconds();
    (new Firebase(firebaseURL + '/todos/' + req.params.todoId + "/timestamp")).set(microseconds);
    // (new Firebase(firebaseURL + '/todo-lists/'+req.params.id+'/timestamp')).set(microseconds);
    // (new Firebase(firebaseURL + '/todo-lists/'+req.params.todoListId+'/todos/timestamp')).set(microseconds);
    res.json({data: true, timestamp: microseconds});
});
router.get('/todo-lists/:todoListId/todos', function (req, res) {
    res.json({data: Object.keys(todos).map((index)=>todos[index]).
    filter((item)=>item.todoListId==req.params.todoListId), timestamp: getNowMicroseconds()});
});

router.get('/todos/:id', function (req, res) {
    res.json({data: todos[req.params.id], timestamp: getNowMicroseconds()});
});

var getNowMicroseconds = function () {
    var loadTimeInMS = Date.now()
    var performanceNow = require("performance-now");
    return Math.ceil((loadTimeInMS + performanceNow()) * 1000)
}

app.use('/', router);

app.listen(9000);

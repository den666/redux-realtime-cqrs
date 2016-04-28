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

var projects = {
    1: {
        name: "First Project",
        id: 1
    },
    2: {
        name: "Second Project",
        id: 2
    }
};
var todos = {
    1: {
        name: "First todo of first project",
        completed: false,
        projectId: 1,
        id: 1
    },
    2: {
        name: "Second todo of first project",
        completed: false,
        projectId: 1,
        id: 2
    },
    3: {
        name: "First todo of second project",
        completed: false,
        projectId: 2,
        id: 3
    },
    4: {
        name: "Second todo of second project",
        completed: false,
        projectId: 2,
        id: 4
    }

};
var indexProjects = 3;
var indexTodos = 3;

var router = express.Router();

router.get('/', function (req, res) {
    res.json({message: 'It\'s working'});
});

router.get('/projects', function (req, res) {
    res.json({data: projects, timestamp: getNowMicroseconds()});
});

router.post('/projects', function (req, res) {

    projects[indexProjects] = {name: req.body.name, id: indexProjects};
    var microseconds = getNowMicroseconds();
    (new Firebase(firebaseURL + '/projects/' + indexProjects + "/timestamp")).set(microseconds);
    indexProjects++;
    res.json({data: true, timestamp: microseconds});

});

router.get('/projects/:projectId', function (req, res) {

    res.json({data: projects[req.params.projectId], timestamp: getNowMicroseconds()});

});

router.post('/projects/:projectId/todos', function (req, res) {

    todos[indexTodos] = {name: req.body.name, projectId: req.params.projectId, completed: false, id: indexTodos};
    var microseconds = getNowMicroseconds();
    (new Firebase(firebaseURL + '/todos/' + indexTodos + "/timestamp")).set(microseconds);
    (new Firebase(firebaseURL + '/projects/'+req.params.projectId+'/todos/timestamp')).set(microseconds);
    indexTodos++;
    res.json({data: true, timestamp: microseconds});

});

//it´s not necessary "/projects/:id", for this example is easier
router.put('/todos/:todoId/toggle', function (req, res) {

    var todo = todos[req.params.todoId];
    todo.completed = !todo.completed;
    todos[req.params.todoId] = todo;
    var microseconds = getNowMicroseconds();
    (new Firebase(firebaseURL + '/todos/' + req.params.todoId + "/timestamp")).set(microseconds);
    res.json({data: true, timestamp: microseconds});

});

router.get('/projects/:projectId/todos', function (req, res) {

    res.json({data: Object.keys(todos).map((index)=>todos[index]).
    filter((item)=>item.projectId==req.params.projectId), timestamp: getNowMicroseconds()});

});

router.get('/todos/:todoId', function (req, res) {

    res.json({data: todos[req.params.todoId], timestamp: getNowMicroseconds()});

});

var getNowMicroseconds = function () {

    var loadTimeInMS = Date.now()
    var performanceNow = require("performance-now");
    return Math.ceil((loadTimeInMS + performanceNow()) * 1000)

};

app.use('/', router);

app.listen(9000);

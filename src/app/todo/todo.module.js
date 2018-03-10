angular.module('app.todo', [
  'ui.router',
  'todo.controllers.ToDoCtrl'
])

.config(function config($stateProvider) {
  $stateProvider.state('todo', {
    url: '/todo',
    templateUrl: 'todo/todo.view.html'
  });
});

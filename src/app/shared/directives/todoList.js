angular.module('shared.directives.todoList', [])
  .directive('todoList', ['$window', function($window) {
    return {
      restrict: 'EA',
      templateUrl: 'shared/directives/todoList.html',
      scope: {
        initialTodos: '='
      },
      controller: ['$scope', function todoListController($scope) {
        var STORAGE_KEY = 'mytodos';
        $scope.newItemText = '';
        $scope.list = [];

        var getFromLocalStorage = function(key) {
          return JSON.parse($window.localStorage.getItem(key));
        };

        var storeInLocalStorage = function(key, value) {
          var storedValue = typeof value === 'object' ? JSON.stringify(value) : value;
          $window.localStorage.setItem(key, storedValue);
        };

        if ($scope.initialTodos) {
          angular.forEach($scope.initialTodos, function(value) {
            $scope.list.push({ text: value, checked: false });
          });
        }

        var storedTodoList = getFromLocalStorage(STORAGE_KEY);

        if (storedTodoList) {
          $scope.list = storedTodoList;
        }

        $scope.addNewItem = function() {
          $scope.list.push({ text: $scope.newItemText, checked: false });
          storeInLocalStorage(STORAGE_KEY, $scope.list);
        };

        $scope.removeItems = function() {
          for (var i = $scope.list.length - 1; i >= 0; i--) {
            if ($scope.list[i].checked) {
              $scope.list.splice(i, 1);
            }
          }
          storeInLocalStorage(STORAGE_KEY, $scope.list);
        };
      }]
    };
  }]);

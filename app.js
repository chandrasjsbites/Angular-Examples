var app = angular.module('ngPractice', []);
app.controller('myCtrl', ['$scope', function($scope){
    $scope.str = 'chandrashekhar gajai';
    $scope.teamIndia = [ {
            "name": "MS Dhoni",
            "Jersy_no": 7
         }, {
            "name": "Virat Kohli",
            "Jersy_no": 18
        }, {
            "name": "Sachin T",
            "Jersy_no": 10
        }
    ];
}]);

var app = angular.module('ngPractice');
app.filter('uppercase', function() {
    return function(str) {
        return str.toUpperCase();
    };
});
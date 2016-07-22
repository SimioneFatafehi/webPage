angular.module('webPage').controller('mainCtrl', function ($scope) {

    $scope.search = function (places){
        if(places = true){
            console.log(places, "is a great place for a adventure");
        }
    }

});

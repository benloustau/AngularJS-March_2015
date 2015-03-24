// $(document).ready(function() {
//   var dataModel = {
//     name: null,
//     friendsArray: []
//   }

//   $('#name').on("keyup", function() {
//     dataModel.name = $(this).val();
//     $('#nameEntered').text(dataModel.name);
//   });

//   $('#addButton').on("click", function() {
//     dataModel.friendsArray.push(dataModel.name);
    
//     $('#name').val('');
//     $('#nameEntered').text('');
//     $('#friendList').append('<li>' + dataModel.name + '</li>');
//     dataModel.name = '';
//   });
// });

var myModule = angular.module('myApp', [])

myModule.controller('myController', function($scope) {
  $scope.dataModel = {
    username: null,
    friendsArray: []
  };

  $scope.addButtonClicked = function() {
    $scope.dataModel.friendsArray.push($scope.dataModel.username)
    $scope.dataModel.username = '';
  };
})





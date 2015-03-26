angular.module('myApp', [])

.controller('myController', function($scope) {
  var self = this;
  self.myName = 'George';

  self.books = [{
    name: "book 1"
  }, {
    name: "book 2"
  }, {
    name: "book 3"
  }]



  // self.isOn = true;
  self.simpleArray = ["myObj1", "myObj2", "myObj3"];
  self.objectArray = [{name: "car"}, {name: "dog"}, {name: "house"}];
  self.objectToRepeat = {
    Summer: {
      start: "June 1",
      end: "August 31"
    }, 
    Winter: {
      start: "Dec 1",
      end: "Feb 28"
    }
  };

  self.dataModel = {
    name:''
  };

  self.onClickAction = function(name) {
    alert('You clicked something' + name)
  }
})


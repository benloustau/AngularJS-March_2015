angular.module('Lesson03', [])

.controller('myController', function($scope) {
  var self = this;


  this.jobs = {
    employee: '__empSelect__',
    ceo: '__ceoSelect__',
    founder: '__founderSelect__',
  };

  self.model2 = this.jobs.ceo;

  self.shouldDisplay = function (actual, expected) {
    return (actual === expected);
  }


  // $scope.$watch(function() {
  //   return self.model;
  // }, function(newVal, oldVal) {

  // });

  self.employee = {
    fname: "Frank",
    lname: "Sinatra"
  };

  self.ceo = {
    fname: "Tom",
    lname: "Ford"
  };

  self.founder = {
    fname: "Jay",
    lname: "Z"
  };

  $scope.$watch('ctrl.model', function(newVal, oldVal) {
    if (newVal) {
      if (newVal === self.jobs.employee) {
        self.selectedWorker = self.employee;
      } else if (newVal === self.jobs.ceo) {
        self.selectedWorker = self.ceo;
      } else {
        self.selectedWorker = self.founder;
      }
    }
  });

  // self.folders = [{
  //   name: 'Folder One',
  //   items: [{
  //     name: 'Item 1.1',
  //   }, {
  //     name: 'Item 1.2',
  //   }, {
  //     name: 'Item 1.3',
  //   }]
  // }]

  self.person = {
    fname: 'George',
    lname: 'Dagher',
    email: 'george@nycda.com'
  };

  self.isEditing = false;
  self.onEdit = function() {
    self.isEditing = true;
    self.copyPerson = angular.copy(self.person);
  };

  self.onDone = function() {
    angular.extend(self.person, self.copyPerson);
    self.isEditing = false;
  };

  self.onCancel = function() {
    self.isEditing = false;
  };
});


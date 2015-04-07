angular.module('Lesson04', [])

.value('FOLDERS', [{
  name: 'Folder 1',
  items: [{
    itemName: "Item 1.1"
  }, {
    itemName: "Item 1.2"
  }, {
    itemName: "Item 1.3"
  }]
}, {
  name: 'Folder 2',
  items: [{
    itemName: "Item 2.1"
  }, {
    itemName: "Item 2.2"
  }, {
    itemName: "Item 2.3"
  }]
},{
  name: 'Folder 3',
  items: [{
    itemName: "Item 3.1"
  }, {
    itemName: "Item 3.2"
  }, {
    itemName: "Item 3.3"
  }]
}])

.factory('MySimpleFactory', function() {
  var myobject = {name: 'TOM'};
  var myFunction = function() {
    console.log('this is being logged in the factory');
  };

  var getObjectName = function() {
    return myobject.name;
  };
  return {
    logSomething: myFunction,
    getName: getObjectName
  };
})

.factory('PersonDTO', function() {

  var _privateStateOptions = ["CA"]
  
  function PersonDTO(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  PersonDTO.prototype.setYearOfBirth = function(yearOfBirth) {
    this.yearOfBirth = yearOfBirth;
    this.age = 2015 - yearOfBirth;
  };

  PersonDTO.buildFromJSON = function (jsonObject) {
    var newPerson = new PersonDTO(jsonObject.firstname, jsonObject.lastname);
    newPerson.setYearOfBirth(1980);
    return newPerson;
  }

  PersonDTO.getStateOptions = function() {
    return _privateStateOptions;
  }

  return PersonDTO;
})

.factory('UserSelectionVM', function() {
  var employee = {
    fname: "Frank",
    lname: "Sinatra"
  };

  var ceo = {
    fname: "Tom",
    lname: "Ford"
  };

  var founder = {
    fname: "Jay",
    lname: "Z"
  };

  var jobs = {
    employee: '__empSelect__',
    ceo: '__ceoSelect__',
    founder: '__founderSelect__',
  };

  function UserSelectionVM() { }

  UserSelectionVM.getJobs = function() {
    return jobs;
  }

  UserSelectionVM.prototype.setSelection = function(selection) {
      this.selection = selection;
      
      if (selection === jobs.employee) {
        this.selectedWorker = employee;
      } else if (selection === jobs.ceo) {
        this.selectedWorker = ceo;
      } else {
        this.selectedWorker = founder;
      }
  };

  return UserSelectionVM;
})

.service('MathExpressionsCalculator', function() {

  this.calculateTheSum = function(arrayOfNumbers) {
    var sum = 0;
    for (var i = arrayOfNumbers.length - 1; i >= 0; i--) {
      sum += arrayOfNumbers[i];
    };

    return sum;
  }
})

.controller('myController', function(FOLDERS, MySimpleFactory, PersonDTO, UserSelectionVM, MathExpressionsCalculator) {
  var self = this;
  
  var myArray = [10, 20 , 30 , 40 , 50];
  self.sum = MathExpressionsCalculator.calculateTheSum(myArray);




  self.folders = angular.copy(FOLDERS);

  self.person1 = new PersonDTO('George', 'Dagher');
  self.person2 = new PersonDTO('Frank', 'Sinatra');
  self.person3 = PersonDTO.buildFromJSON({firstname:"Frank", lastname: "Lloyd"});

  // self.onPerson1Change = function() {
  //   self.person1.setYearOfBirth(self.year1);
  // }

  // self.onPerson2Change = function() {
  //   self.person2.setYearOfBirth(self.year2);
  // }

  self.jobs = UserSelectionVM.getJobs();
  self.userSelection = new UserSelectionVM();

  self.onClick = function() {
    console.log(self.person1.getPrivateName());
    self.person1.setPrivateName("Jerry");
    console.log(self.person2.getPrivateName());
    console.log(self.person3.getPrivateName());
  };
});


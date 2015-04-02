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

.factory('UserDTO', function() {
  function UserDTO(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }


  return UserDTO;
})

.controller('myController', function(FOLDERS, MySimpleFactory, UserDTO) {
  var self = this;
  self.folders = angular.copy(FOLDERS);

  self.currentUser = new UserDTO('George', 'Dagher');
  self.onClick = function() {
    console.log(MySimpleFactory.getName());
  }
});


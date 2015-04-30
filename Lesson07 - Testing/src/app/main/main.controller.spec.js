'use strict';

beforeEach(module('gulpTemplate'));

describe('Calc Service Test', function(){
    var serviceToTest;

    beforeEach(inject(function(_Calc_) {
    	serviceToTest = _Calc_;
    }));

    it('should calculate the age correctly', function() {
    	var returnAge = serviceToTest.calculateTheAge(2010);
    	expect(returnAge).toBe(5);
    });
});

describe('PersonDTO Factory Test', function() {
	var uninitializedPerson;
	var initializedPerson;

	describe('uninitializedPerson test', function() {
		beforeEach(inject(function(_PersonDTO_) {
			uninitializedPerson = new _PersonDTO_();
		}));

		it('should initialize with the correct name', function() {
			expect(uninitializedPerson.firstName).toBe("George");
			expect(uninitializedPerson.lastName).toBe("Dagher");  
		});
	});

	describe('initializedPerson test', function() {
		beforeEach(inject(function(_PersonDTO_) {
			var config = {
				firstName: 'Tom',
				lastName: 'ford'
			};
			initializedPerson = new _PersonDTO_(config);
		}));

		it('should overwrite the original properties', function() {
			expect(initializedPerson.firstName).toBe("Tom");
			expect(initializedPerson.lastName).toBe("ford");  
		});
	});
});

describe('controller test', function() {
	var controllerToTest;
	var scopeToTest;

	beforeEach(inject(function($controller, $rootScope) {
		scopeToTest = $rootScope.$new();
		controllerToTest = $controller('MainCtrl', {
			$scope: scopeToTest
		})
	}));

	it('should have a property called myObj defined', function() {
		expect(scopeToTest.myObj).toBeDefined();  
	});

	it('should change the name to Tom after onAdd', function() {
		expect(scopeToTest.myObj.name).toBe('George');
		scopeToTest.onAdd();
		expect(scopeToTest.myObj.name).toBe('Tom');
	});
});
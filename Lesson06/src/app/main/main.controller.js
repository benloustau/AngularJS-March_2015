'use strict';

angular.module('gulpTemplate')

.service('MainCtrlService', function() {
	this.ctrlState = undefined;
})
  
.controller('MainCtrl', function ($scope, MainCtrlService) {
	var self = this;

	self.isBoxChecked = true;
	
	if (MainCtrlService.ctrlState) {
		angular.extend(this, MainCtrlService.ctrlState);
	} else {
		MainCtrlService.ctrlState = this;
	}
	
});

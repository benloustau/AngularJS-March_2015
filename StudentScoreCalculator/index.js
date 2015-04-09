angular.module('Lesson04', ['MyServies'])


.controller('MyController', function(StudentScoreDTO, AssignmentDTO) {
	var self = this;
	self.currentStudent = new StudentScoreDTO();

	self.addAssignment = function() {
		var newAssignment = new AssignmentDTO(self.assignmentName, self.assignmentScore);
		self.currentStudent.addAssignmentScore(newAssignment);
		self.currentStudent.updateStatistics();
		self.assignmentName = null;
		self.assignmentScore = null;
	};
})
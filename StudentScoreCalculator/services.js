angular.module('MyServies', [])

.factory('StudentScoreDTO', function(ExpressionCalculator, GRADE_MAPPER) {
	
	function StudentScoreDTO() {
		this.scores = [];
	}

	StudentScoreDTO.prototype.addAssignmentScore = function(assignment) {
		this.scores.push(assignment);
	};

	StudentScoreDTO.prototype.updateStatistics = function() {
		this.average = ExpressionCalculator.calculateAverage(this.scores);
		this.grade = ExpressionCalculator.getGrade(this.average);
		this.passing = GRADE_MAPPER[this.grade].value;
	};

	return StudentScoreDTO;
})

.factory('AssignmentDTO', function() {
	function AssignmentDTO(name, score) {
		this.name = name;
		this.score = score;
	}

	return AssignmentDTO;
})

.value('GRADE_MAPPER', {
	A: {
		grade: 'A',
		value: 'YES'
	},
	B: {
		grade: 'B',
		value: 'YES'
	},
	C: {
		grade: 'C',
		value: 'SOMEWHAT'
	},
	D: {
		grade: 'D',
		value: 'NO'
	},
	F: {
		grade: 'F',
		value: 'NO'
	}
})

.service('ExpressionCalculator', function (GRADE_MAPPER) {
	this.calculateAverage = function(assignments) {
		var sum = 0;
		for (var i = 0; i < assignments.length; i++) {
			sum += assignments[i].score;
		};
		return sum/assignments.length;
	}

	this.getGrade = function(average) {
		if (average >= 90) {
			return GRADE_MAPPER.A.grade;
		} else if (average >= 80) {
			return GRADE_MAPPER.B.grade;
		} else if (average >= 70) {
			return GRADE_MAPPER.C.grade;
		} else if (average >= 60) {
			return GRADE_MAPPER.D.grade;
		} else {
			return GRADE_MAPPER.F.grade;
		}
	}
})
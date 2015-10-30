//Function returns a maximal XOR value for two numbers between A and B (including A and B).
function solution2(A, B) {
	var max = A^B;

	for (var i = A; i < B; i++) {
		for (var j = i + 1; j <= B; j++) {

			if (max < (i ^ j)) {
				max = i ^ j;
			}
				
		}
	}
	return max;
}
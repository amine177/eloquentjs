function findSolution(of) {
	function find(start, history) {
		if (start == of)
			return history;
		else if (start > of)
			return null;
		else
			return find(start + 5, "(" + history + " + 5)") ||
				find(start * 3, "(" + history + " * 3)");
	}

	return find(1, "1");
}


console.log(findSolution(24));

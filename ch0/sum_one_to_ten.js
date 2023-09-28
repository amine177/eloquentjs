let sum_accumulator = 0, counter = 1;
while (counter <= 10) {
    sum_accumulator += counter;
    counter += 1;
}
console.log(sum_accumulator);

function sum(iterobj) {
    let sum_accumulator = 0;
    for (let elem in iterobj) {
	sum_accumulator += Number(elem);
    }
    return sum_accumulator;
}

function range(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
	result[i] = i;
    }
    return result;
}
console.log(sum(range(1,10)));

export function sum(arr, finder) {
	let total = 0;
	arr.forEach(item => {
		total += finder(item);
	});

	return total;
}

export function pickRandArrItem(arr) {
	if (!arr.length) return null;
	if (arr.length === 1) return arr[0];

	return arr[getRndInteger(0, arr.length - 1)];
}

export function getRandInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

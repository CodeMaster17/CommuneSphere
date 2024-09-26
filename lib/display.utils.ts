// to be used inside server components
export const getDisplayYear = (year: string) => {
	return year.slice(2);
};

// extract current year
// first -> 1st
// second -> 2nd
// third -> 3rd
// fourth -> 4th

export const getDisplayCurrentYear = (year: string): string => {
	switch (year) {
		case 'first':
			return '1st';
		case 'second':
			return '2nd';
		case 'third':
			return '3rd';
		case 'fourth':
			return '4th';
		default:
			return '1st';
	}
};

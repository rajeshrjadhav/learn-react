//SET_TEXT_FILTER
export const setTextFilterGenerator = (text = '') => ({
		type : 'SET_TEXT_FILTER',
		text : text
});

//SORT_BY_DATE
export const sortByDateGenerator = () => (
	{
		type : 'SORT_BY_DATE',
		sortBy : 'date'
	}	
);

//SORT_BY_AMOUNT
export const sortByAmountGenerator = () => (
	{
		type: 'SORT_BY_AMOUNT',
		sortBy : 'amount'
	}
);

//SET_START_DATE
export const setStartDateGenerator = (startDate)=>(
	{
		'type' : 'SET_START_DATE',
		'startDate' : startDate
	}
);

//SET_END_DATE
export const setEndDateGenerator = (endDate)=>(
	{
		'type' : 'SET_END_DATE',
		'endDate' : endDate
	}
);
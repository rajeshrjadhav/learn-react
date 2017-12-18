import React from 'react';
import { connect } from 'react-redux';
import { setTextFilterGenerator , sortByDateGenerator, sortByAmountGenerator } from '../actions/filters';

const ExportListFilters = (props) => (

	<div>
		<input type="text"  
		value={props.filter.text}
		onChange={ 
			(e)=>{
				props.dispatch(setTextFilterGenerator(e.target.value));
			}
		}
		/>

		<select 
		value={ props.filter.sortBy } onChange =
			{
				(e) => {
					if(e.target.value === 'date') 
					{
						props.dispatch(sortByDateGenerator());
					}
					else { 
						props.dispatch(sortByAmountGenerator());
					}				
				}
			} >
			<option value="date" > Date </option>
			<option value="amount" > Amount </option>
		</select>
	</div>
);

const mapStateToProps = (state) => ({
	filter : state.filter
});

export default connect (mapStateToProps) (ExportListFilters);
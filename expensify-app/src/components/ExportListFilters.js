import React from 'react';
import { connect } from 'react-redux';
import { setTextFilterGenerator  } from '../actions/filters';

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
	</div>
);

const mapStateToProps = (state) => ({
	filter : state.filter
});

export default connect (mapStateToProps) (ExportListFilters);
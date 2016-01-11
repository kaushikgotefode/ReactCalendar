import React from 'react';
import CalHeader from './CalHeader.jsx';
import WeekDays from './WeekDays.jsx';
import CalDays from './CalDays.jsx';

var App = React.createClass({
	render: function() {
		return (
			<div className="dropdownMenu">
				<div className="jQCalendar">
					<div className="jQCompleteCalendar">
						<table className="totalCalendar">
							<thead >
								<CalHeader month="Jan" year="2016"/>
								<WeekDays/>
							</thead>
							<CalDays/>
						</table>
					</div>
				</div>
			</div>
		);
	}
});
module.exports = App

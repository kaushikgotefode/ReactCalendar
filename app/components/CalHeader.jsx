import React from 'react';


var CalHeader = React.createClass({
	// getInitialState: function() {
	//     return {month:"Jan","year":"2016"};
	// },

	render: function() {
		return (			
                <tr className="cal_header">
                    <th className="prev">&laquo;</th>
                    <th colSpan="5" className="switchCalendar">{this.props.month} {this.props.year}</th>
                    <th className="next">&raquo;</th>
                </tr>
		);
	}

});

module.exports = CalHeader;
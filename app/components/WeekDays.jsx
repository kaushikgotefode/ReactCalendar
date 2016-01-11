var React = require('react');

var WeekDays = React.createClass({

	render: function() {
		return (
			<tr>
                <th className="weekDay">Sun</th>
                <th className="weekDay">Mon</th>
                <th className="weekDay">Tue</th>
                <th className="weekDay">Wed</th>
                <th className="weekDay">Thu</th>
                <th className="weekDay">Fri</th>
                <th className="weekDay">Sat</th>
            </tr>
		);
	}

});

module.exports = WeekDays;
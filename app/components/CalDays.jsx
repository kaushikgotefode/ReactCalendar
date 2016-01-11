var React = require('react');

var Day = React.createClass({
  render: function () {
    return (
      <td className="dt">{this.props.day}</td>
    );
  },
});

var Week = React.createClass({
	render: function() {
		return (
			<tr>
				{(function (days) {
					for (var j = 1; j <= 7; j++) {
						days.push(<Day day={j}/>)
					}
					return days;
				})([])}
			</tr>
		);
	}

});
var CalDays = React.createClass({
	getInitialState:function () {
			return {
				day:1
			}
	},
	render: function() {
		return (
				<tbody>
				{(function (weeks) {
					for (var i = 1,day=1; i <= 5; i++) {
						weeks.push(<Week index={day}/>)
						day++;
					}
					return weeks;
				})([])}
				</tbody>
		);
	}

});

 module.exports = CalDays;
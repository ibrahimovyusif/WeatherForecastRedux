import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class WeatherList extends Component {
	renderWeather(cityData) {
		const cityName = cityData.city.name;
		return (
			<tr key={cityName}>
				<td>
					{cityName}
				</td>
			</tr>
		)
	}

	render() {
		return (
			<table className="table table-hover">
			 	<thead>
			    	<tr>
			     		<th>City</th>
			     		<th>Temperature</th>
			     		<th>Pressure</th>
			     		<th>Humidity</th>
			    	</tr>
				</thead>
			  	<tbody>
			  		{this.props.weather.map(this.renderWeather)}
			  	</tbody>
			</table>
		)
	}
}

function mapStateToProps ({weather}) {
	return { weather }; // {weather } == { weather: weather}
}

export default connect(mapStateToProps)(WeatherList); 
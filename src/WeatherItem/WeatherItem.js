import React from 'react';
import PropTypes from "prop-types"


class WeatherItem extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.day);
    }
    render() {
    return  (
    <div>
    <h1>{this.props.day.j}</h1>
    <p>{this.props.day.temps}</p>
    </div>
    );

    }
}
WeatherItem.propTypes = {
    item: PropTypes.shape({
        j: PropTypes.string,
        temps: PropTypes.string,
    })
}
export default WeatherItem;
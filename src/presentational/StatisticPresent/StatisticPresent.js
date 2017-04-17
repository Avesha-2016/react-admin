import React from 'react';
import { Link } from 'react-router';
import * as d3  from 'd3';

// styles
import './styles/StatisticPresent.sass';

export default class StatisticPresent extends React.Component {

  state = {
    data: [40, 8, 15, 16, 23, 42, 43, 3, 44, 22, 12,43]
  }

  componentDidMount() {
    var x = d3.scaleLinear()
    .domain([0, d3.max(this.state.data)])
    .range([10, 220])
      d3.select(".chart")
    .selectAll("div")
      .data(this.state.data)
    .enter().append("div")
      .style("width", function(d) { return x(d) + "px"; })
      .text(function(d) { return d; });
  }

  render() {


    return (

      <div className="registrations statistics">
        <h2>Статистика (в разработке)</h2>
        <div className="chart">

        </div>
      </div>

    )
  }

}

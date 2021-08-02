import React, {Component} from 'react';
import * as d3 from "d3";

class Chart extends Component {

  componentDidMount() {
    this.drawChart();
  }
    
  drawChart() {
    if(!this.props.chartData) {
      return;
    }

  const data = this.props.chartData.data;
  const margin = {top: 10, right: 10, bottom: 20, left: 30};
  const width = this.props.width - margin.left - margin.right;
  const  height = this.props.height- margin.top - margin.bottom;

  const domainX = d3.extent(data, function(d) { return d.date; });

  const valueRange = d3.extent(data, function(d) { return d.value; });
  const valueLen = valueRange[1] - valueRange[0];
  const domainOffset = valueLen * 0.15;
    
  const domainY = [valueRange[0] - domainOffset , valueRange[1] + domainOffset];
  
  const y = d3.scaleLinear()
    .range([height - margin.bottom, margin.top])
    .domain(domainY);
    
  const x = d3.scaleTime()
    .range([margin.left, width - margin.right])
    .domain(domainX);
  
  const line = d3.line()
    .x(d => x(d.date))
    .y(d => y(d.value))

  const svg = d3.select("#shedule")

  .append("svg")
    .attr("id", "chart")
    .attr('height', '100%')
    .attr('width', '100%')
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

  svg.append("g")
    .attr("transform", "translate(0," + (height - margin.bottom) + ")")
    .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

  svg.append("g")
    .attr("transform", "translate(" + margin.left +", 0)")
    .call(d3.axisLeft(y).ticks(height / 50).tickSizeOuter(0))

  svg.append("path")
    .data([data])
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2.5)
    .attr("d", line)
}

componentDidUpdate(prevProps) {
  const el = document.getElementById('chart');
  if(el) {
    el.remove(); 
  }
  this.drawChart();
} 
   
  render(){
    return (
      <div></div>
    )}
}

export default Chart;
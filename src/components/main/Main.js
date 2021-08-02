import React from 'react';
import DataSelection from './../dataSelection/DataSelection';
import Information from './../information/Information';
import Chart from './../chart/Chart';
import './Main.css';
import RGL, { WidthProvider } from "react-grid-layout";
import ChartDataService from '../../service/ChartDataService';

const ReactGridLayout = WidthProvider(RGL);

export default class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      chartData: null,
      height:500,
      width:500,
      layout: [
        {i: 'information', x: 0, y: 0, w: 7, h: 3, minW: 3, minH: 3 },
        {i: 'shedule', x: 0, y: 2, w: 7, h: 7, minW: 3, minH: 3 },
        {i: 'data', x: 7, y: 0, w: 3, h: 10, minW: 3,  maxW: 5, minH: 5 }
      ]
    };

    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.onChartDataChange = this.onChartDataChange.bind(this);
    this.onClickPairs = this.onClickPairs.bind(this); 
  }

  componentDidMount() {
    this.setState({chartData: new ChartDataService('BTC/USDT', this.onChartDataChange)});
  }
  
  onLayoutChange(layout) {
    const height = document.getElementById('shedule').clientHeight;
    const width = document.getElementById('shedule').clientWidth;
    this.setState({ layout , height, width});
  }

  onChartDataChange(data) {
    this.setState(prevState => {
      let chartDataUpdate = Object.assign({}, prevState.chartData);                                    
      return { chartDataUpdate };                                 
    })
  }

  onClickPairs(e) {
    const pair = e.target.innerHTML;
    this.setState({chartData: new ChartDataService(pair, this.onChartDataChange)});
  }

  render() {
    return (
      <div className='bigMain'>
        <ReactGridLayout
          {...this.props}
          layout={this.state.layout}
          onLayoutChange={this.onLayoutChange}
          cols={10}
          rowHeight={30}
        >
          <div className='main' key="information">
            <Information chartData={this.state.chartData}/>
          </div>
          <div className='main' id='shedule' key="shedule">
            <Chart  chartData={this.state.chartData}  width={this.state.width} height={this.state.height}/>
          </div>
          <div className='main' key="data">
            <DataSelection onClickPairs={this.onClickPairs}/>
          </div>
        </ReactGridLayout>
      </div>
    );
  }
}

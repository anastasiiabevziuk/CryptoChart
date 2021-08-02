import React, {Component} from 'react';
import './Information.css';

class Information extends Component {
  render() {
    let value = 0; 
    let pair = null;
    let currency = null;
    let volume = null;
    let side = null;
    let classSide= null;
    let sideBuy = 'sideBuy';
    let sideSell = 'sideSell';

    if(this.props.chartData) {
      const data = this.props.chartData.data;
      pair = this.props.chartData.pair;
      currency=pair.slice(4);
      volume = this.props.chartData.volume;
      side = this.props.chartData.side;
      classSide =(( side ==='buy')? sideBuy : sideSell);

      if( data.length > 0) {
        value = data[data.length - 1].value;
      }
    }

    return (
      <div className="information">
          <p>{pair} <span className={classSide}>{side}</span></p>
          <p>Price: {value } {currency} </p>
          <p>Volume: {volume}</p>
          <p></p>
      </div>
    );
  }
}

export default Information;
import React,{Component} from 'react';
import './DataSelection.css';

class DataSelection extends Component {

  render(){
    const {onClickPairs} = this.props
    return (
      <div >
          <ul className="dataSelection" id="pairs" onClick={onClickPairs}>
              <li value="'BTC/USDT'" >BTC/USDT</li>
              <li  value="'ETH/USDT'" >ETH/USDT</li>
              <li  value="'ETH/BTC'" >ETH/BTC</li>
          </ul>
      </div>
    );
  }
}


export default DataSelection;
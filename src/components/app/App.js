import React, {Component, Profiler} from 'react';
import Footer from './../footer/Footer';
import Header from './../header/Header';
import Main from './../main/Main';
import {onRenderPerformaceCallback} from '../../performance/performance';


class App extends Component  {
  render(){
    return (
      <>
       <Header/>
       <Profiler id="Main" onRender={onRenderPerformaceCallback}>
          <Main />
       </Profiler>
       <Footer/>
      </>
    );
    }
}

export default App;

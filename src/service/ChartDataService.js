import { Metacom } from '../../node_modules/metacom/metacom';
 

class ChartDataService {
    constructor(pair, onDataChange){
        this.fetch(pair, onDataChange);
    }
    
    async fetch(pair, onDataChange){
        this.data = [];
        this.pair = pair;
        
        const metacom = Metacom.create('wss://wss.r-invest.fund:2087/api');
        const { api } = metacom;

        const dataHandler = function(d) {

            const dateIndex = 1;
            const volumeIndex = 3;
            const sideIndex = 5;
            const priceIndex = 7;

            
            const chartData = d[0][1];
            const date = new Date(Number(chartData[dateIndex]));
            const price = Number(chartData[priceIndex]);
            const volume = Number(chartData[volumeIndex]);
            const side = chartData[sideIndex];

            this.price = price;
            this.volume = volume;
            this.side = side;
            this.data.push({date: date, value: price});

            onDataChange(this.data);
        };
    
        await metacom.load('ticksData'); 
        api.ticksData.testData(pair).then(console.log).catch(console.error);
        api.ticksData.on('testData', dataHandler.bind(this));
    }
}

export default ChartDataService;

  

  
  
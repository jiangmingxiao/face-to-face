import * as React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import './waterfall.scss';
import {getRandom} from '../utils/math';
import WaterBox from './waterbox';

@observer
export default  class WaterFall extends React.Component<any,any> {
  
    private data = observable([]) as any;
    private n = 0;
    constructor(props,context) {
        super(props, context);
        this.push();
        window.onscroll= ()=>{
          const scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
          const srollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
          const innerHeight = window.innerHeight;
          const currentHeight = scrollTop + innerHeight;
          if( currentHeight > srollHeight * 0.9 && currentHeight <= srollHeight * 1) {
            this.push();
          }
        }
    }
    push(){
      const array = [
        {
          content:"123"
        },
        {
          size: "small",
          content:"456"
        },{
          size: "medium",
          content:"789"
        },{
          size: "large",
          content:"big"
        }
      ];
      const newArray = [];
      for(let i=0;i<20;i++) {
        const n = getRandom(0,3);
        newArray.push(array[n])
      }
      this.data[this.n++] = newArray;
      
    }
    render() {
      return(<div>
        {
          this.data.map((item, index)=>{
            return(
              <WaterBox
                data={item}
                key={index}
              />
            )
          })
        }
        
      </div>)
    }
}
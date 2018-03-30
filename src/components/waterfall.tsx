import * as React from 'react';
import './waterfall.scss';
import {getRandom} from '../utils/math';

export default  class WaterFall extends React.Component<any,any> {
    private data;
    constructor(props,context) {
        super(props, context);
        this.data=[
            {
              size:"big"
            },
            {
              size:"normal"
            },
            {
              size:"small"
            },
            {
              size:"big"
            },
            {
              size:"big"
            },
            {
              size:"big"
            },
            {
              size:"big"
            },
        ]
    }
    push(){
      const array = [
        {},
        {
          size: "small"
        },{
          size: "noraml"
        },{
          size: "big"
        }
      ];
      for(let i=0;i<100;i++) {
        const n = getRandom(0,3);
        this.data.push(array[n])
      }
    }
    render() {
      let divs = []
      this.data.map((item)=>{
        switch(item.size){
          case "small":
            divs.push(<div className="item">
                        <div className="item__content item__content--small">
                        </div>
                      </div>)
            break;
          case "normal":
            divs.push(<div className="item">
                        <div className="item__content item__content--medium">
                        </div>
                      </div>)
            break;
          case "big":
            divs.push(<div className="item">
                        <div className="item__content item__content--large">
                        </div>
                      </div>)
            break;
          default:
            divs.push(<div className="item">
                        <div className="item__content item__content">
                        </div>
                      </div>)
            break;
        }
      })
        return(<div className="masonry">
        <button onClick={this.push}/>
                {divs}
              </div>)
    }
}
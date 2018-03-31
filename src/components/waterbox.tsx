import * as React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import './waterfall.scss';
import {BeatingHeart} from './canvas';
import * as classNames from 'classnames';

@observer
export default  class WaterBox extends React.Component<any,any> {
    render() {
      let divs = [];
      
      this.props.data.map((item,index)=>{
        const className = classNames({
          "item__content--small": item.size ==="small",
          "item__content--medium": item.size ==="medium",
          "item__content--large": item.size ==="large",
        })
        divs.push(
          <div className="item" key={index} onClick={()=>item.clicked = true}>
            <div className={`item__content ${className}`}>
              {item.content}
              <BeatingHeart 
                onClick={()=>{alert(item.content)}} 
                className="heart-content"
              />
            </div>
          </div>
        )
      })
      return(<div className="masonry">
              {divs}
            </div>)
  }
}
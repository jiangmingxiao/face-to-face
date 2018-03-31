import * as React from 'react';
import * as ReactDOM from 'react-dom';
import axios from 'axios';
import pasition from 'pasition';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {BeatingHeart} from './components/canvas';
import './index.scss';
import WaterFall from './components/waterfall';
const url = "//imgforjiangmx.oss-cn-beijing.aliyuncs.com";
class App extends React.PureComponent<any, any> {
    
    constructor(props){
        super(props);
       
    }
    render() {
        return(
            <Router>
                <div className="app-page">
                    <nav className="global-nav">
                        <ul className="router-ul">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/list/pic">List</Link></li>
                            <li><Link to="/list/pic">Pic</Link></li>
                            <li><Link to="/list/word">Word</Link></li>
                        </ul>
                        <ul>

                        </ul>
                    </nav>
                    
                    <section className="global-section">
                        <Route exact path="/" component={Home}/>
                        <Route path="/list/:type" component={List}/>
                    </section>
                </div>
            </Router>
        )
    }
}
const Home = () => (
    <div className="test">
        <BeatingHeart/>
    </div>
)

const List = ({ match }) => (
    <div>
        <WaterFall type={match.params.type}/>
    </div>
)


ReactDOM.render(<App/>, document.getElementById('app'));
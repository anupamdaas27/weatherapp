import * as React from "react";
import './App.css';

interface Props {
  info: any
  keyindex: number
 }
interface State {
  summary : any
  keyindex: number
}


class DaySummary extends React.Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      summary: this.props.info,
      keyindex: this.props.keyindex
    }
  } 

  render() {
    
    return (        
        <li className="nav-item" role="tablist">
        <a role="tab" className="nav-link" data-toggle="tab" href={`#day${this.state.keyindex}`} >
            <div className="card">
                <h5 className="card-header">{this.state.summary.day}</h5>
                <div className="card-body">                    
                    <p className="card-text">{`Max ${this.state.summary.temp[0]}°C`}</p>
                    <p className="card-text">{`Min ${this.state.summary.temp[1]}°C`}</p>
                    <p className="card-text"><img src={this.state.summary.icon} alt={this.state.summary.description} /></p>
                    <p className="card-text">Details</p>
                </div>
            </div>
        </a>        
        </li>
    );
  }
}

export default DaySummary;

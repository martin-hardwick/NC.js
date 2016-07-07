import React from 'react';
import _ from 'lodash';
import request from 'superagent';

export default class WorkingstepList extends React.Component {
  constructor(props){
    //Create the constructor for the component
    super(props);

    this.renderNode = this.renderNode.bind(this);
    this.setWS = this.setWS.bind(this);
  }

  setWS(node,self){
    let url = '/v3/nc/state/ws/' + node["id"];
    request
        .get(url)
        .end(function (err, res) {
        });
  }

  getNodeIcon(node, num){
    if (node.type == "workplan"){
      return <span className='icon-letter'>W</span>;
    }else if (node.type == "selective"){
      return <span className='icon-letter'>S</span>;
    }else{
      return <span className='icon-letter'>{num+1}</span>;
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
  return this.props.ws !== nextProps.ws;
}

  renderNode(nodeId, num){
    let node = this.props.workingstepCache[nodeId];
    node.icon = this.getNodeIcon(node, num);
    let cName = 'node';
    if (node.id == this.props.ws) cName = 'node running-node';
    return <ol
        id={node.id}
        className={cName}
        onClick={this.setWS.bind(this, node)}
        onMouseDown={function(e){e.stopPropagation()}}
        style={{"paddingLeft" : "5px"}}
        key={node.id}>
        {node.icon}
        <span className="textbox">{node.name}</span>
    </ol>;
  }

  componentDidMount(){

  }

  render(){
    return (
      <div className='m-tree'>
        {this.props.workingstepList.map((workingstep, i) => {
          return <div className='m-node' key={i}>
            {this.renderNode(workingstep, i)}
          </div>;
        })}
      </div>
    );
  }
}

WorkingstepList.propTypes = {cbMode: React.PropTypes.func.isRequired, cbTree: React.PropTypes.func.isRequired, ws: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired};

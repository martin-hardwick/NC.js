import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'rc-menu';
import _ from 'lodash';
import MobileSidebar from '../mobilesidebar';

import ReactTooltip from 'react-tooltip';

let soy=0;

class ButtonImage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let classes = 'button-icon glyphicons glyphicons-' + this.props.icon;
    if(this.props.onBtnClick)
      return (<div className={classes} onClick={this.props.onBtnClick}/>);
    return (<div className={classes}/>);
  }
}

export default class FooterView extends React.Component {

    constructor(props) {
        super(props);
        this.btnClicked = this.btnClicked.bind(this);
        this.ffBtnClicked = this.ffBtnClicked.bind(this);
        this.bbBtnClicked = this.bbBtnClicked.bind(this);
        this.soMouseDown = this.soMouseDown.bind(this);
        this.soMouseUp = this.soMouseUp.bind(this);
        this.soMouseLeave = this.soMouseLeave.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.soTouchStart = this.soTouchStart.bind(this);
        this.soTouchEnd = this.soTouchEnd.bind(this);
        this.soTouchCancel = this.soTouchCancel.bind(this);
        this.soTouchMove = this.soTouchMove.bind(this);
    }

    btnClicked(info){
	    this.props.actionManager.emit('sim-pp');
    }
    ffBtnClicked(info){
        this.props.actionManager.emit('sim-f');
    }
    bbBtnClicked(info){
        this.props.actionManager.emit('sim-b');
    }

    soMouseDown(info){
        let fv = $('.Footer-container');
        let fb = $('.Footer-bar');
        soy=(fv.offset().top+fb.height())-info.clientY;
    }

    soMouseUp(info){
        let fv = $('.Footer-container');
        let fb = $('.Footer-bar');
        let currentMSGuiMode=this.props.msGuiMode;

        if(soy > 0)
        {
            if((this.props.msGuiMode === false) && (window.innerHeight-fv.offset().top > fb.height()*2))
            {
                this.props.cbMobileSidebar(true);
                currentMSGuiMode=true;
            }
            else if((this.props.msGuiMode === true) && (fv.offset().top > fb.height()))
            {
                this.props.cbMobileSidebar(false);
                currentMSGuiMode=false;
            }
        }

        if(currentMSGuiMode === false)
        {
            let bottomPos=(window.innerHeight-fb.height());
            fv.animate({top: bottomPos+"px"}, 500);
            //fv.css("height", "unset");
        }
        if(currentMSGuiMode === true)
        {
            fv.animate({top: "0px"}, 500);
            //fv.css("height", "100%");
        }
        soy=0;
    }

    soMouseLeave(info){
        let fv = $('.Footer-container');
        let fb = $('.Footer-bar');
        let currentMSGuiMode=this.props.msGuiMode;

        if(soy > 0)
        {
            if((this.props.msGuiMode === false) && (window.innerHeight-fv.offset().top > fb.height()*2))
            {
                this.props.cbMobileSidebar(true);
                currentMSGuiMode=true;
            }
            else if((this.props.msGuiMode === true) && (fv.offset().top > fb.height()))
            {
                this.props.cbMobileSidebar(false);
                currentMSGuiMode=false;
            }
        }

        if(currentMSGuiMode === false)
        {
            let bottomPos=(window.innerHeight-fb.height());
            fv.animate({top: bottomPos+"px"}, 500);
            //fv.css("height", "unset");
        }
        if(currentMSGuiMode === true)
        {
            fv.animate({top: "0px"}, 500);
            //fv.css("height", "100%");
        }
        soy=0;
    }

    onMouseMove(info){
        let fv = $('.Footer-container');
        if(soy > 0)
        {
            let newTop=info.clientY-soy;
            fv.css("top", newTop+"px");
        }
    }

    soTouchStart(info)
    {
        let fv = $('.Footer-container');
        let fb = $('.Footer-bar');
        soy=(fv.offset().top+fb.height())-info.touches[0].pageY;
    }

    soTouchEnd(info)
    {
        let fv = $('.Footer-container');
        let fb = $('.Footer-bar');
        let currentMSGuiMode=this.props.msGuiMode;

        if(soy > 0)
        {
            if((this.props.msGuiMode === false) && (window.innerHeight-fv.offset().top > fb.height()*2))
            {
                this.props.cbMobileSidebar(true);
                currentMSGuiMode=true;
            }
            else if((this.props.msGuiMode === true) && (fv.offset().top > fb.height()))
            {
                this.props.cbMobileSidebar(false);
                currentMSGuiMode=false;
            }
        }

        if(currentMSGuiMode === false)
        {
            let bottomPos=(window.innerHeight-fb.height());
            fv.animate({top: bottomPos+"px"}, 500);
            //fv.css("height", "unset");
        }
        if(currentMSGuiMode === true)
        {
            fv.animate({top: "0px"}, 500);
            //fv.css("height", "100%");
        }
        soy=0;
    }

    soTouchCancel(info)
    {
        let fv = $('.Footer-container');
        let fb = $('.Footer-bar');
        let currentMSGuiMode=this.props.msGuiMode;

        if(soy > 0)
        {
            if((this.props.msGuiMode === false) && (window.innerHeight-fv.offset().top > fb.height()*2))
            {
                this.props.cbMobileSidebar(true);
                currentMSGuiMode=true;
            }
            else if((this.props.msGuiMode === true) && (fv.offset().top > fb.height()))
            {
                this.props.cbMobileSidebar(false);
                currentMSGuiMode=false;
            }
        }

        if(currentMSGuiMode === false)
        {
            let bottomPos=(window.innerHeight-fb.height());
            fv.animate({top: bottomPos+"px"}, 500);
            //fv.css("height", "unset");
        }
        if(currentMSGuiMode === true)
        {
            fv.animate({top: "0px"}, 500);
            //fv.css("height", "100%");
        }
        soy=0;
    }

    soTouchMove(info)
    {
        info.preventDefault();
        info.stopPropagation();

        let fv = $('.Footer-container');
        if(soy > 0)
        {
            let newTop=info.touches[0].pageY-soy;
            fv.css("top", newTop+"px");
        }
    }
    
    render() {
        //if(this.props.guiMode == 0)
            //return null;
        let SO;
        SO = (
            <MobileSidebar
                cadManager={this.props.cadManager}
                app={this.props.app}
                actionManager={this.props.actionManager}
                socket={this.props.socket}
                mode={this.props.mode}
                ws={this.props.wsid}
                tree={this.props.tree}
                altmenu={this.props.altmenu}
                cbMode={this.props.cbMode}
                cbWS={this.props.cbWS}
                cbTree={this.props.cbTree}
                cbAltMenu={this.props.cbAltMenu}
                toolCache={this.props.toolCache}
                curtool={this.props.curtool}
                toleranceList={this.props.toleranceList}
                toleranceCache={this.props.toleranceCache}
                workplanCache={this.props.workplanCache}
                workingstepCache={this.props.workingstepCache}
                workingstepList={this.props.workingstepList}
                openProperties={this.props.openProperties}
                selectedEntity={this.props.selectedEntity}
                previouslySelectedEntities={this.props.previouslySelectedEntities}
            />
          );

        let ppbtntxt = this.props.ppbutton;
		return (<div className="Footer-container">
            <div className="Footer-bar"
                onMouseDown={this.soMouseDown}
                onMouseUp={this.soMouseUp}
                onMouseLeave={this.soMouseLeave}
                onMouseMove={this.onMouseMove}
                onTouchStart={this.soTouchStart}
                onTouchEnd={this.soTouchEnd}
                onTouchCancel={this.soTouchCancel}
                onTouchMove={this.soTouchMove}>
    			<div className="op-text">{this.props.wstext}</div>
                <div className="footer-buttons">
                    <ButtonImage onBtnClick={this.bbBtnClicked} icon="step-backward"/>
                    <ButtonImage onBtnClick={this.btnClicked} icon={ppbtntxt}/>
                    <ButtonImage onBtnClick={this.ffBtnClicked} icon="step-forward"/>
                </div>
            </div>
            {SO}
        </div>
        );
    }
}

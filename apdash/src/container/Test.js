import React, { Component } from 'react'

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false
        }
      }

    render() {
        return (
            <div className="col-sm-4 col-sm-offset-4">
                <div className="panel-group">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                            <a href="javascript:;"
                                onClick={function(){this.setState({open:!this.state.open})}.bind(this)} >Collapsible list group</a>
                            </h4>
                        </div>
                        <div className={!this.state.open? "panel-collapse": "panel-collapse panel-close"}
                            >
                            <ul className="list-group">
                            <li className="list-group-item">One</li>
                            <li className="list-group-item">Two</li>
                            <li className="list-group-item">Three</li>
                            </ul>
                            <div className="panel-footer">Footer</div>
                        </div>
                    </div>
                </div>
                <div className="panel-group">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                            <a href="javascript:;"
                                onClick={function(){this.setState({open:!this.state.open})}.bind(this)} >Collapsible list group</a>
                            </h4>
                        </div>
                        <div className={!this.state.open? "panel-collapse": "panel-collapse panel-close"}
                            >
                            <ul className="list-group">
                            <li className="list-group-item">One</li>
                            <li className="list-group-item">Two</li>
                            <li className="list-group-item">Three</li>
                            </ul>
                            <div className="panel-footer">Footer</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

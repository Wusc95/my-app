import React, { Component } from 'react';

class Top extends Component {
    render() {
        return (
            <div>
                <input type="text" name="keyValue" id="txt1" className="inputtxt" value={this.props.keyValue} onChange={this.props.fnChange} />
				<input type="button" name="" value="增加" id="btn1" className="inputbtn" onClick={this.props.fnAdd} />
            </div>
        );
    }
}

export default Top;
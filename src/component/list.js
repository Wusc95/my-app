import React, { Component } from 'react';

class List extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
                <ul id="list" className="list">
					{
						this.props.aList.map((item, i) => <li key={i}><span>{item}</span><a href="javascript:;" className="del" onClick={() => { this.props.fnDel(i) }}>删除</a></li>)
					}
				</ul>
        );
    }
}
export default List;
/**
 * Created by kingsae1004@gmail.com on 08/06/2019
 * Github : https://github.com/kingsae1
 */
import React from 'react';
import {inject, observer} from "mobx-react/index";

@inject('storeScore')
@observer
class CellComponent extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div id={this.props.index} className={'cell '+ this.props.element.isClicked} onClick={e => this.props.onClick(this)}>
                {this.props.element.value}
            </div>
        )
    }
}

export default CellComponent;

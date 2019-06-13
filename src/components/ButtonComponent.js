/**
 * Created by kingsae1004@gmail.com on 09/06/2019
 * Github : https://github.com/kingsae1
 */
/**
 * Created by kingsae1004@gmail.com on 08/06/2019
 * Github : https://github.com/kingsae1
 */
import React from 'react';

class ButtonComponent extends React.Component {
    render () {
        return (
            <span id={this.props.id} className="buttons">{this.props.text}</span>
        )
    }
}

export default ButtonComponent;

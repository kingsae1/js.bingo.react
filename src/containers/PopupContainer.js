/**
 * Created by kingsae1004@gmail.com on 09/06/2019
 * Github : https://github.com/kingsae1
 */
/**
 * Created by kingsae1004@gmail.com on 08/06/2019
 * Github : https://github.com/kingsae1
 */
import React from 'react';
import ButtonComponent from '../components/ButtonComponent';
import '../styles/popupStyle.css';

class PopupContainer extends React.Component {
    render () {
        return (
            <div id='popupCont' className={this.props.show?'popShow': 'popHidden'} onClick={this.props.onClick}>
                <h1 id='textArea'>{this.props.msg}</h1>
                <div id='buttonArea'>
                    <ButtonComponent text='OK' id='popupButton'></ButtonComponent>
                </div>
            </div>
        )
    }
}

export default PopupContainer;

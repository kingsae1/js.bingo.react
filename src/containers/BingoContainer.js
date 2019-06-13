/**
 * Created by kingsae1004@gmail.com on 08/06/2019
 * Github : https://github.com/kingsae1
 */
import React from 'react';
import {observer, inject} from 'mobx-react';

import PopupContainer from '../containers/PopupContainer';
import UserComponent from '../components/UserComponent';
import ButtonComponent from '../components/ButtonComponent';
import '../styles/cellStyle.css';
import StoreState from "../stores/storeState";

@inject('rootStore')
@observer
class Bingo extends React.Component {
    clickStartButton = () => {
        const {storeState} = this.props.rootStore;
        storeState.clickStartButton();
    };

    clickPopupButton = () => {
        const {storeState} = this.props.rootStore;
        storeState.resetApp();
    };

    popupElement = () => {
        const {storeState} = this.props.rootStore;
        return (
            <PopupContainer
                msg={storeState.getShowMsg}
                show={storeState.state.showPopup}
                onClick={this.clickPopupButton}
            > </PopupContainer>)
    };

    render() {
        const {storeCell, storeState} = this.props.rootStore;

        // 시간이 되면 Socket을 이용하여 User를 따로 정의하여
        // 생성하도록 설계한다
        const userList = storeCell.user.map((user, index) =>
            <UserComponent user={user} key={index} index={index}/>
        );

        return (
            <div id='bingoCont'>
                <h1 id='title'>BINGO</h1>
                {userList}
                <div id='buttonArea' onClick={this.clickStartButton}>
                    <ButtonComponent text={storeState.getButtonText} id='startButton'></ButtonComponent>
                </div>
                {this.popupElement()}
            </div>
        );
    }
}

export default Bingo;

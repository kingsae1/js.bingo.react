/**
 * Created by kingsae1004@gmail.com on 09/06/2019
 * Github : https://github.com/kingsae1
 */
import {observable, action, computed} from 'mobx';

class StoreState {

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable msgIdx = '1P';

    @observable state = {
        turn: 0, // 0: left , 1 :right
        start: false,
        showPopup: false
    };


    @computed
    get getButtonText() {
        if (this.state.start) {
            this.state.turn = 0;
        }
        return this.state.start ? "RESTART" : "START";
    }

    @computed
    get getShowMsg () {
        return this.rootStore.storeScore.SCORE_TEXT[this.msgIdx];
    }


    @action
    clickStartButton() {
        if (this.state.start) {
            // Restart인경우 Cell 재정의
            const {storeCell, storeScore} = this.rootStore;
            for (let i = 0; i < storeCell.user.length; i++) {
                storeCell.makeCellList(i);
                storeScore.userScore[i].complete = false;
                storeScore.userScore[i].score = 0;
            }
        }
        this.state.start = !this.state.start;
    }

    @action
    clickPopupButton() {
        this.state.showPopup = false;
    }

    @action
    toggleTurn() {
        this.state.turn = this.state.turn === 0 ? 1 : 0;
    }

    @action
    resetApp() {
        this.state.start = true;
        this.state.showPopup = false;
        this.clickStartButton();
    }
}

export default StoreState;

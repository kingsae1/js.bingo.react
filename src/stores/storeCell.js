/**
 * Created by kingsae1004@gmail.com on 09/06/2019
 * Github : https://github.com/kingsae1
 */
import {observable, action, computed} from 'mobx';

class StoreCell {
    constructor(rootStore) {
        // CONSTANT 정의
        this.ARRAY_LENGTH = 25;
        this.rootStore = rootStore;
    }

    // 추후 Socket을 이용한 User 가능
    @observable user = [{
        name: 'USER1',
    }, {
        name: 'USER2'
    }];

    @observable cellList = new Array(this.user.length);

    // @Action : 동기적 properties 변경
    @action
    makeCellList(userIdx) {
        this.cellList[userIdx] = this.shuffleCellList();
    }

    @action
    clickCell(cell) {
        const {storeScore, storeState} = this.rootStore;
        this.checkClicked(cell.props.element.value, 0);
        this.checkClicked(cell.props.element.value, 1);

        if (storeScore.userScore[0].complete &&  storeScore.userScore[1].complete){
            storeState.state.showPopup = true;
            storeState.msgIdx = "SAME";
        } else if (storeScore.userScore[0].complete) {
            storeState.state.showPopup = true;
            storeState.msgIdx = "1P";
        } else if (storeScore.userScore[1].complete) {
            storeState.state.showPopup = true;
            storeState.msgIdx = "2P";
        }
    };

    // @Computed : 비지니스 로직 포함된 getter

    shuffleCellList() {
        let tempArray = [];

        for (let i = 1; i <= this.ARRAY_LENGTH; i++) {
            tempArray.push({
                value: i,
                isClicked: false
            });
        }

        // 숫자를 임의로 섞어줌
        tempArray.sort(function (a, b) {
            // 0~9까지의 무작위 숫자를 생성
            const tempNum = parseInt(Math.random() * 10, 10);
            // 짝수,홀수에 의해 0,1 생성
            const isOddOrEven = tempNum % 2;
            // 5이하, 6이상에 따라 양수, 음수 생성
            const isPosOrNeg = (tempNum > 5) ? 1 : -1;
            // -1, 0, 1 리턴
            return (isOddOrEven * isPosOrNeg);
        });

        return tempArray;
    };

    checkClicked(value, index) {
        const result = this.cellList[index].map((element) => {
            if (element.value === value) {
                element.isClicked = true;
            }
            return element;
        });

        this.rootStore.storeScore.checkBingo(index, result);

        return result;
    }

    // @AsyncAction : 비동기적 Properties 변경
}

export default StoreCell;

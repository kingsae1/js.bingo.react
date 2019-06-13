/**
 * Created by kingsae1004@gmail.com on 09/06/2019
 * Github : https://github.com/kingsae1
 */
import {observable, action, computed} from 'mobx';

class StoreScore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    SCORE_TEXT = {
        "1P": "1P가 빙고를 완성하였습니다",
        "2P": "2P가 빙고를 완성하였습니다",
        "SAME" : "무승부입니다"
    };

    @observable userScore = [
        {
            complete: false,
            score: 0
        }, {
            complete: false,
            score: 0
        }
    ];

    checkBingo(index, arr) {
        let cnt = 0;

        // 가로
        for (let i = 0; i < arr.length; i += 5) {
            let bng = true;
            for (let j = i; j < i + 5; j++) {
                if (!arr[j].isClicked) bng = false;
            }
            if (bng) cnt++;
        }

        // 세로
        for (let i = 0; i < 5; i++) {
            let bng = true;
            for (let j = i; j < arr.length; j += 5) {
                if (!arr[j].isClicked) bng = false;
            }
            if (bng) cnt++;
        }

        // 대각선
        let crossBng = true;
        for (let i = 0; i < arr.length; i += 6) {
            if (!arr[i].isClicked) crossBng = false;
        }
        if (crossBng) cnt++;

        crossBng = true;
        for (let i = 4; i < arr.length - 4; i += 4) {
            if (!arr[i].isClicked) crossBng = false;
        }
        if (crossBng) cnt++;

        this.userScore[index].score = cnt;

        if(this.userScore[index].score >=5) {
            this.userScore[index].complete = true;
        }
    }

}

export default StoreScore;

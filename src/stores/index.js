/**
 * Created by kingsae1004@gmail.com on 09/06/2019
 * Github : https://github.com/kingsae1
 */
import storeCell from './storeCell';
import storeScore from './storeScore';
import storeState from './storeState';

class rootStore {
    constructor () {
        this.storeCell = new storeCell(this);
        this.storeScore = new storeScore(this);
        this.storeState = new storeState(this);
    }
}

export default rootStore;



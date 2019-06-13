/**
 * Created by kingsae1004@gmail.com on 08/06/2019
 * Github : https://github.com/kingsae1
 */
import React from 'react';
import {inject, observer} from "mobx-react/index";

import CellComponent from './CellComponent';

@inject('rootStore')
@observer
class UserComponent extends React.Component {
    constructor(props) {
        super(props);
        // 최초 컴포넌트 정의때 CellList를 Shuffle 시켜둔다
        props.rootStore.storeCell.makeCellList(props.index);
    }

    clickCell = (cell) => {
        // 턴 변경
        this.props.rootStore.storeState.toggleTurn();
        this.props.rootStore.storeCell.clickCell(cell);
    };

    render() {
        const {storeCell, storeScore, storeState} = this.props.rootStore;
        const cellCurrentList = storeCell.cellList[this.props.index];

        const cellList = cellCurrentList.map((cell, index) => (
            <CellComponent element={cell} key={index} index={index} onClick={(e) => {
                // 1. Start 된 상태인 경우
                // 2. 현재 유저와 클릭된 컴포넌트 확인후 같을 경우
                // 3. 클릭이 되지 않은 상태인 경우 이벤트 전달
                if (storeState.state.start &&
                    storeState.state.turn === this.props.index &&
                    !e.props.element.isClicked) {
                    this.clickCell(e);
                }
            }}/>
        ));

        const getClassName = () => {
            if (storeState.state.start && storeState.state.turn === this.props.index) {
                return 'userComponent on';
            }
            return 'userComponent off';
        };

        return (
            <div id={(this.props.index + 1) + 'pUser'} className={getClassName()}>
                <div
                    className="board">{this.props.index + 1 + 'P : ' + storeScore.userScore[this.props.index].score} Bingo
                </div>
                <div className="bingo">
                    {cellList}
                </div>
            </div>

        );
    }
}

export default UserComponent;

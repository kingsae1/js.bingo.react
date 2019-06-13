# Bingo Game
>React를 이용한 Bingo Game WebApplication 개발

## Screenshot

![Bingo Screenshot](screenshot/bingo.png)


## Installation
- 기본 포트는 3000으로 다른 포트를 원한다면 PORT={특정포트} yarn start 실행

``` bash
$ cd bingo
$ yarn
$ yarn start
```

## Folder
- components : 재사용가능한 컴포넌트로 구성
    - ButtonComponent : 버튼 컴포넌트 (각각 콘테이너에서 사용)
    - CellComoponent : 빙고 하나의 셀 컴포넌트
    - UserComponent : 각각의 유저 컴포넌트
- containers : 컴포넌트의 묶음으로 구성되며, 하나의 장면(Scene)으로 정의
    - BingoContainer : BingoApp을 구성하는 최초 단위
    - PopupContainer : 팝업 컨테이너 (팝업은 하나만 존재하기에 Singletone 유지)
- stores : mobx에서 사용되는 Store의 묶음
    - storeCell : 셀관련된 State, 서비스 로직
    - storeScore : 점수 연산 관련된 서비스 로직
    - storeState : App 전반적인 Status 관리, 서비스 로직 
- styles : css 스타일 정의
    - index : 기본 Window에서 정의되는 스타일 정의
    - cellStyle : BingoContainer 각각의 셀에 관련된 스타일 정의
    - popupStyle : PopupContainer에서 사용되는 스타일 정의
- utils : utils 정의
  
  
## More..
- 시간이 좀더 존재한다면 Socket.io를 이용해 유저간 실시간 빙고게임 개발가능
- Test Tool 이용가능
- Vue.js를 이용하면 더 빠르게 개발가능

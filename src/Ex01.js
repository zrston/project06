import React, { Component } from 'react'

/* rcc : class component 생성하는 단축키 

React Hook이라는 기능들이 생겨나게 되면서
Function 컴포넌트에서 실행되지 않았던
리액트의 중요 요소들을 Function 컴포넌트에서 사용할 수 있게 되었다!

ex) LifeCycle같은 중요한 개념을 Function Component 에서 사용할 수 없었음
    React Hook이 생겨나게 되면서 이제는 Function  Component 에서도
    LifeCycle을 사용할 수 있게 됨
    
    use~
    - useState, useRef, useContext ... etc
*/
export default class Ex01 extends Component {

componentDidMount(){
    /* componentDidMount : 화면이 마운트됨!
    => API call (ajax, fetch, axios ... )
    */
    console.log('3 . compoenentDidMount - 화면 렌더링 완료!');
}

componentDidUpdate(){
    /* 값이 변경되어 갱신이 일어난 직후에 호출! */
    console.log('** 값이 변경되었습니다! **')
}

constructor(){
    console.log('1. constructor - 최초생성');
    /* constructor : 생성자
    => state, 함수, 변수 ... 값들을 초기화할 떄 사용
    => 화면이 렌더링 되기 이전, 가장 최초의 단계
    */
    super();
    this.state = {
        num : 0
    }

    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
}

handleIncrement(){
    console.log('handle Increment Function')
    this.setState({
        num : this.state.num +=1
    })
}

handleDecrement(){
    this.setState({
        num : this.state.num -=1
    })
}
  render() {
    /* render : 화면을 렌더링 할 때
        => 화면을 구성하는 요소를 작성
    */
    console.log('2. render - 화면이 렌더링 되는 중...');
    return (
      <div>
        <h1>Class Component : {this.state.num}</h1>
        <button onClick={this.handleIncrement}>+1</button>
        <button onClick={this.handleDecrement}>-1</button>
      </div>
    )
  }
}

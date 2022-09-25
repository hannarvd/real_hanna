
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집','파이썬독학']);
  let posts = '강남 고기 맛집';

  return (
    <div className="App">
        <div className="black-nav">
          <div>개발 BLOG</div>
        </div>
        <div className="list">
          <h3> { 글제목[0] } </h3>
          <p>2월 17일 발행</p>
          <hr/>
        </div>
        <div className="list">
          <h3> { 글제목[1] } </h3>
          <p>2월 18일 발행</p>
          <hr/>
        </div>
        <div className="list">
          <h3> { 글제목[2] } </h3>
          <p>2월 19일 발행</p>
          <hr/>
        </div>
        <Modal/>

    </div>
    
  );
}


function Modal() {
  return (
    <div className="modal">
          <h2>제목</h2>
          <p>날짜</p>
          <p>상세내용</p>
    </div>
  );
}


export default App;

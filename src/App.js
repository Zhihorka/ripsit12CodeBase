import logo from './logo.svg';
import './App.css';
import BasicTable from './components/Table/Table';
import BookTable from './components/BookTable/BookTable';
import ButtonsGroup from './components/Buttons/Buttons';
import React, { useState } from 'react';
import OutlinedButtons from './components/SortButton/SortButton'


function App() {

  const [viewMode, setViewMode] = useState(0);
  const [sorted, setSorted] = useState(0);

  

  if (viewMode === 0) {
    return (
      <div className="App">
        <h1 className = "mainLabel"> Список учащихся</h1>
        <div className = "buttonsWrapper">
          <ButtonsGroup setViewMode = {setViewMode} setSorted = {setSorted}/>
        </div>
        <OutlinedButtons setSorted = {setSorted}/>
        <div className = "tableWrapper">
          <BasicTable sorted = {sorted}/>
        </div>
        <h4>РиПСИТ лабораторная работа №12 Сиротин Н. Владимиров И. Гудков Д. </h4>
      </div>
    );
  }
  return (
    <div className="App">
      <h1 className = "mainLabel"> Список книг</h1>
      <div className = "buttonsWrapper">
        <ButtonsGroup setViewMode = {setViewMode} setSorted = {setSorted}/>
      </div>
      <OutlinedButtons setSorted = {setSorted}/>
      <div className = "tableWrapper">
        <BookTable sorted = {sorted}/>
      </div>
      <h4>РиПСИТ лабораторная работа №12 Сиротин Н. Владимиров И. Гудков Д. </h4>
    </div>
  );

}

export default App;

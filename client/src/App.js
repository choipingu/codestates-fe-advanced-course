import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Main from './main.js'
import Detail from './detail.js'
function App() {


  return (
    <>
      <Head>CodeStates</Head>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </>
  )
}
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  background-color: purple;
  color: white;
  width: 100%;
  height: 50px;
`
export default App;

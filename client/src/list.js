import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

function List(props) {

    const navigate = useNavigate()
    function clickHandler() {
        navigate(`/detail/${props.id}`)
    }
    return (
        <>
            <Title onClick={clickHandler}>{props.title}</Title><p>작성자 : {props.userId}</p>
        </>
    )
}
const Title = styled.h3`
  cursor: pointer;
`

export default List;
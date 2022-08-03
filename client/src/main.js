import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Pagination from "./pagination";
import List from './list';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

function Main() {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const offSet = (page - 1) * 10
    const dataFetch = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => setData(res.data))
    }
    const dataList = data.slice(offSet, offSet + 10).map((el) => {
        return (<Post key={el.id}>
            <List id={el.id} title={el.title} userId={el.userId} />
        </Post>)
    })


    useEffect(() => {
        dataFetch()
    }, [])
    console.log(data)
    return (
        <Container>
            <Head2 />
            {dataList}
            <div>
                <Pagination
                    total={data.length}
                    page={page}
                    setPage={setPage}
                />
            </div>
        </Container>
    );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`
const Head2 = styled.div`
  width: 900px;
  height: 1px;
  margin-top: 20px;
  border: 3px double #8c8c8c;
`

const Post = styled.div`
  display: flex;
  width: 800px;
  justify-content: space-between;
  border-bottom: 1px solid #8c8c8c;
`
export default Main;

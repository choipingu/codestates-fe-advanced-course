import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'


function Detail() {
    const [data, setData] = useState([])
    const [num, setNum] = useState(0)
    const [comments, setCommentst] = useState([])
    const dataFetch = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/posts/${path}`)
            .then((res) => setData(res.data))
    }
    const dataFetch2 = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/comments`)
            .then((res) => setCommentst(res.data))
    }
    const filterComments = comments.filter((el) => el.postId == num)
    const commentsData = filterComments.map((el) => {
        return (
            <CommentsTitle key={el.id}>
                {el.name}
                <CommentsBody>{el.body}</CommentsBody>
                <hr></hr>
            </CommentsTitle>
        )
    })
    const nowURL = new URL(window.location.href)
    const path = nowURL.pathname.slice(8)
    useEffect(() => {
        dataFetch()
        dataFetch2()
        setNum(path)
    }, [])


    console.log(filterComments)
    return (
        <Container>
            <h1>Title</h1>
            <Title>{data.title}</Title>
            <Under>작성자 : {data.userId}</Under>
            <h3>Body</h3>
            <Content>{data.body}</Content>
            <Counting>댓글 {filterComments.length}개</Counting>
            {commentsData}
        </Container>
    )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 10px;
  width: 800px;
`
const Title = styled.div`
  width: 90%;
  font-size: 20px;
  font-weight: bold;
`
const Under = styled.div` 
  width: 90%;
  padding-bottom: 10px;
  margin-right: 0px;
  text-align: right;
  border-bottom: 2px solid gray;
`
const Content = styled.div`
 width: 90%;
`
const Counting = styled.div`
  width: 90%;
  padding-bottom: 10px;
  text-align: right;
  border-bottom: 2px solid gray;

`
const CommentsTitle = styled.div`
  width: 80%;
  font-weight: 500;
  margin-top: 10px;
`
const CommentsBody = styled.div`

  margin-bottom: 10px;
  margin-top: 10px;
  font-weight: 100;
`
export default Detail;

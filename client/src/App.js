import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Pagination from "./pagination";

function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const offSet = (page - 1) * 10
  const dataFetch = async () => {
    await axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => setData(res.data))
  }

  useEffect(() => {
    dataFetch()
  }, [])
  console.log(data)
  return (
    <Container>
      <div>
        {data.slice(offSet, offSet + 10).map(({ userId, title, index }) => (
          <Post key={index}>
            <h3>{title}</h3><p>작성자 : {userId}</p>
          </Post>
        ))}
      </div>
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
const Post = styled.div`
  display: flex;
  
`
export default App;

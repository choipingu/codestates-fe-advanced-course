import styled from "styled-components";

function Pagination({ total, page, setPage }) {
    const pageNum = Math.ceil(total / 10)

    return (
        <Container>
            <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
                &lt;
            </Button>
            {Array(pageNum).fill().map((item, idx) => (
                <Button
                    key={idx + 1}
                    onClick={() => setPage(idx + 1)}
                    aria-current={page === idx + 1 && "page"}
                >
                    {idx + 1}
                </Button>
            ))}
            <Button onClick={() => setPage(page + 1)} disabled={page === pageNum}>
                &gt;
            </Button>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 15px;
  margin: 6px;
  margin-top: 30px;
  border: 1px solid;
  border-radius: 30%;
  background: white;
  color: black;
  font-size: 20px;

  :hover {
    cursor: pointer;
    transform: translateY(-2px);
  } 

  &[aria-current='page'] {
    color: white;
    background: purple;
    font-weight: bold;
  }
`;

export default Pagination;
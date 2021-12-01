import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;

  select {
    background: var(--blue);
    color: var(--white);
    padding: 1rem;
    width: 100%;
  }

  h2 {
    margin-bottom: 1rem;
  }
`

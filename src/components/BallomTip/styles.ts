import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: inline-block;

  #spanid {
    visibility: hidden;
    width: 120px;
    background: var(--blue);
    color: var(--white);
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    z-index: 1;

    ::before {
      content: '';
      display: block;
      width: 0;
      height: 0;
      position: absolute;
      border-width: 10px;
      border-style: solid;
      border-color: transparent transparent var(--blue) transparent;
      top: -20px;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }

  :hover {
    #spanid {
      visibility: visible;
    }
  }
`

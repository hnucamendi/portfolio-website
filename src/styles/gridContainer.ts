import styled from "styled-components"

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(15.625em, 1fr));
  gap: 1em;
  padding: 1em;
  width: 100%;
  box-sizing: border-box;

  & > * {
    height: 100%;
    min-height: 18.75em; /* You can adjust this default height */
    overflow: auto;
    max-height: 21.875em;
    overflow-y: auto;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    & > * {
      min-height: auto;
      max-height: none;
    }
  }
`

export default GridContainer


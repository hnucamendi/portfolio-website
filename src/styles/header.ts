import styled from "styled-components"


// Header //
export default styled.div`
.navbar{
  border-top: 1px solid #e6e6e6;
  padding: 15px 0;
  background-color:red;
}

.lg {
  color: ${({ theme }) => theme.secondaryBackgroundColor}
}

.sticky {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
}

.navbar ol {
  display: flex;
  align-items: center;
  gap: 25px;
  list-style: none;
}

.navbar ol li:last-child {
  margin-left: auto;
}

.pointer-toggle {
  border: 1px solid #e6e6e6;
  background-color: inherit;
  padding: 7px;
  box-shadow: 0 3px 10px rgb(255, 255, 255, 0.2);
}

.pointer-toggle:hover {
  box-shadow: 0 3px 10px rgb(255, 255, 255, 0.5);
  transition: ease-in 0.1s;
}
`

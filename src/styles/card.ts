import styled from "styled-components"

export default styled.div<{ $backgroundImage?: string }>`
.projects {
  background-image: url(${props => props.$backgroundImage || ""}) ;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.project-wrapper {
  border: 1px solid rgba(123, 255, 21, 0.19);
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding: 20px;
}

.status-wrapper {
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 25px;
}

.status-wrapper p,
.status-wrapper h4 {
  margin: 0 0;
}
`



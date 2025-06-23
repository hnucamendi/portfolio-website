import styled from "styled-components"

// FOOTER // 
export default styled.div`
.footer {
  border-bottom: 1px solid #e6e6e6;
  padding: 15px 0;
  margin: 30px 0;
}

.footer ol {
  display: flex;
  align-items: center;
  gap: 25px;
  list-style: none;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .footer ol {
    flex-direction: column;
    gap: 10px;
    padding: 0;
  }
}
`


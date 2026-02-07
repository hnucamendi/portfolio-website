import styled from "styled-components";

export default styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => theme.Background.One};
  backdrop-filter: blur(10px);
  background: rgba(33, 37, 41, 0.95);
  border-bottom: 1px solid ${({ theme }) => theme.Background.Three};

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.Spacing.MD} 0;
  }

  .logo {
    font-family: "Montserrat", sans-serif;
    font-size: ${({ theme }) => theme.Text.H5.REM}rem;
    font-weight: 700;
    color: ${({ theme }) => theme.Foreground.One};
    text-decoration: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .header-content {
      padding: ${({ theme }) => theme.Spacing.SM} 0;
    }

    .logo {
      font-size: ${({ theme }) => theme.Text.H6.REM}rem;
    }
  }
`;

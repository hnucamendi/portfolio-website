import styled from "styled-components";

export default styled.footer`
  padding: ${({ theme }) => theme.Spacing.XL} 0;
  border-top: 1px solid ${({ theme }) => theme.Background.Three};
  margin-top: ${({ theme }) => theme.Spacing.Section};

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.Spacing.LG};
  }

  .footer-left {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.Spacing.XS};
  }

  .footer-name {
    font-family: "Montserrat", sans-serif;
    font-size: ${({ theme }) => theme.Text.H6.REM}rem;
    font-weight: 700;
    color: ${({ theme }) => theme.Foreground.One};
    margin: 0;
  }

  .footer-copyright {
    color: ${({ theme }) => theme.Text.Muted};
    font-size: ${({ theme }) => theme.Text.Small.REM}rem;
    margin: 0;
  }

  .footer-links {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.Spacing.LG};
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .footer-links a {
    color: ${({ theme }) => theme.Foreground.Two};
    font-size: ${({ theme }) => theme.Text.Small.REM}rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: color ${({ theme }) => theme.Transition.Fast};
  }

  .footer-links a:hover {
    color: ${({ theme }) => theme.Foreground.One};
  }

  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      text-align: center;
    }

    .footer-links {
      flex-wrap: wrap;
      justify-content: center;
      gap: ${({ theme }) => theme.Spacing.MD};
    }
  }
`;

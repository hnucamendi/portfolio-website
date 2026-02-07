import styled from "styled-components";

export default styled.div`
  background: ${({ theme }) => theme.Background.Two};
  border-radius: ${({ theme }) => theme.BorderRadius.LG};
  padding: ${({ theme }) => theme.Spacing.LG};
  transition: transform ${({ theme }) => theme.Transition.Normal},
    box-shadow ${({ theme }) => theme.Transition.Normal};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.Shadow.Hover};
  }

  h3 {
    font-family: "Montserrat", sans-serif;
    margin: 0 0 ${({ theme }) => theme.Spacing.SM};
  }

  p {
    font-family: "IBM Plex Sans", sans-serif;
    color: ${({ theme }) => theme.Foreground.Two};
    line-height: 1.6;
    margin: 0 0 ${({ theme }) => theme.Spacing.MD};
  }

  a {
    font-family: "Montserrat", sans-serif;
    font-size: ${({ theme }) => theme.Text.Small.REM}rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-right: ${({ theme }) => theme.Spacing.MD};
    transition: color ${({ theme }) => theme.Transition.Fast};
  }

  a:hover {
    color: ${({ theme }) => theme.Text.Muted};
  }
`;

import styled from "styled-components";

export const HeroWrapper = styled.section`
  padding: ${({ theme }) => theme.Spacing.Section} 0;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 50vh;
    padding: ${({ theme }) => theme.Spacing.XL} 0;
  }
`;

export const HeroContent = styled.div`
  max-width: 800px;
`;

export const HeroName = styled.h1`
  font-size: 4.5rem;
  margin: 0 0 ${({ theme }) => theme.Spacing.SM};
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const HeroTitle = styled.h2`
  font-size: ${({ theme }) => theme.Text.H4.REM}rem;
  color: ${({ theme }) => theme.Text.Muted};
  font-weight: 500;
  margin: 0 0 ${({ theme }) => theme.Spacing.LG};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.Text.H5.REM}rem;
  }
`;

export const HeroTagline = styled.p`
  font-size: ${({ theme }) => theme.Text.H6.REM}rem;
  color: ${({ theme }) => theme.Foreground.Two};
  line-height: 1.6;
  margin: 0;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.Text.Normal.REM}rem;
  }
`;

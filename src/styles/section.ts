import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: ${({ theme }) => theme.Spacing.Section} 0;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.Spacing.XL} 0;
  }
`;

export const SectionTitleWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.Spacing.XL};

  h2 {
    font-size: ${({ theme }) => theme.Text.H3.REM}rem;
    margin: 0;
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 60px;
      height: 3px;
      background: ${({ theme }) => theme.Accent.Primary};
      border-radius: ${({ theme }) => theme.BorderRadius.Full};
    }
  }

  @media (max-width: 768px) {
    margin-bottom: ${({ theme }) => theme.Spacing.LG};

    h2 {
      font-size: ${({ theme }) => theme.Text.H4.REM}rem;
    }
  }
`;

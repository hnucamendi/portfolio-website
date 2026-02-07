import styled from "styled-components";

export const Timeline = styled.div`
  position: relative;
  padding-left: ${({ theme }) => theme.Spacing.XL};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.Background.Three};
  }

  @media (max-width: 768px) {
    padding-left: ${({ theme }) => theme.Spacing.LG};
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  padding-bottom: ${({ theme }) => theme.Spacing.XL};

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: "";
    position: absolute;
    left: calc(-${({ theme }) => theme.Spacing.XL} - 5px);
    top: 8px;
    width: 12px;
    height: 12px;
    background: ${({ theme }) => theme.Accent.Primary};
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    &::before {
      left: calc(-${({ theme }) => theme.Spacing.LG} - 5px);
    }
  }
`;

export const TimelineHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.Spacing.MD};
`;

export const Role = styled.h3`
  font-size: ${({ theme }) => theme.Text.H5.REM}rem;
  margin: 0 0 ${({ theme }) => theme.Spacing.XS};
  color: ${({ theme }) => theme.Foreground.One};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.Text.H6.REM}rem;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.Spacing.SM};
  align-items: center;
  color: ${({ theme }) => theme.Text.Muted};
  font-size: ${({ theme }) => theme.Text.Normal.REM}rem;
`;

export const Company = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.Foreground.Two};
`;

export const Dates = styled.span`
  color: ${({ theme }) => theme.Text.Muted};
`;

export const Achievements = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.Spacing.MD};

  li {
    position: relative;
    padding-left: ${({ theme }) => theme.Spacing.MD};
    margin-bottom: ${({ theme }) => theme.Spacing.SM};
    color: ${({ theme }) => theme.Foreground.Two};
    line-height: 1.6;

    &::before {
      content: "→";
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.Accent.Primary};
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.Spacing.XS};
`;

export const TechBadge = styled.span`
  background: ${({ theme }) => theme.Background.Three};
  color: ${({ theme }) => theme.Foreground.Two};
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.BorderRadius.Full};
  font-size: ${({ theme }) => theme.Text.Small.REM}rem;
  font-weight: 500;
`;

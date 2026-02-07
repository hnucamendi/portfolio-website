import styled from "styled-components";

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.Spacing.LG};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.article<{ $featured?: boolean }>`
  background: ${({ theme }) => theme.Background.Two};
  border-radius: ${({ theme }) => theme.BorderRadius.LG};
  padding: ${({ theme }) => theme.Spacing.LG};
  transition: transform ${({ theme }) => theme.Transition.Normal},
    box-shadow ${({ theme }) => theme.Transition.Normal};

  ${({ $featured }) =>
    $featured &&
    `
    grid-column: span 2;

    @media (max-width: 768px) {
      grid-column: span 1;
    }
  `}

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.Shadow.Hover};
  }
`;

export const ProjectHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.Spacing.MD};
`;

export const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.Text.H5.REM}rem;
  margin: 0 0 ${({ theme }) => theme.Spacing.XS};
  color: ${({ theme }) => theme.Foreground.One};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.Text.H6.REM}rem;
  }
`;

export const FeaturedBadge = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.Accent.Darker};
  color: ${({ theme }) => theme.Foreground.One};
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.BorderRadius.SM};
  font-size: ${({ theme }) => theme.Text.XSmall.REM}rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-left: ${({ theme }) => theme.Spacing.SM};
`;

export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.Foreground.Two};
  line-height: 1.6;
  margin: 0 0 ${({ theme }) => theme.Spacing.MD};
  font-size: ${({ theme }) => theme.Text.Normal.REM}rem;
`;

export const ProjectTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.Spacing.XS};
  margin-bottom: ${({ theme }) => theme.Spacing.MD};
`;

export const TechTag = styled.span`
  color: ${({ theme }) => theme.Text.Muted};
  font-size: ${({ theme }) => theme.Text.Small.REM}rem;
  font-weight: 500;
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.Spacing.MD};

  a {
    color: ${({ theme }) => theme.Accent.Primary};
    font-size: ${({ theme }) => theme.Text.Small.REM}rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: color ${({ theme }) => theme.Transition.Fast};

    &:hover {
      color: ${({ theme }) => theme.Accent.Light};
    }
  }
`;

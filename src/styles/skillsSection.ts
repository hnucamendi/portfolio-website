import styled from "styled-components";

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.Spacing.XL};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.Spacing.LG};
  }
`;

export const SkillCategory = styled.div``;

export const CategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.Text.H6.REM}rem;
  color: ${({ theme }) => theme.Foreground.One};
  margin: 0 0 ${({ theme }) => theme.Spacing.MD};
  font-weight: 600;
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.Spacing.XS};
`;

export const SkillBadge = styled.span`
  background: ${({ theme }) => theme.Background.Two};
  color: ${({ theme }) => theme.Foreground.One};
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.BorderRadius.Full};
  font-size: ${({ theme }) => theme.Text.Normal.REM}rem;
  font-weight: 500;
  transition: all ${({ theme }) => theme.Transition.Fast};
  border: 1px solid transparent;

  &:hover {
    border-color: ${({ theme }) => theme.Accent.Primary};
    color: ${({ theme }) => theme.Accent.Light};
  }
`;

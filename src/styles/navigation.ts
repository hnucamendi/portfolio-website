import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.Spacing.LG};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.Foreground.Two};
  font-size: ${({ theme }) => theme.Text.Small.REM}rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-decoration: none;
  transition: color ${({ theme }) => theme.Transition.Fast};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.Accent.Primary};
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.Foreground.One};
  font-size: ${({ theme }) => theme.Text.H5.REM}rem;
  cursor: pointer;
  padding: ${({ theme }) => theme.Spacing.XS};

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileNav = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.Background.One};
    flex-direction: column;
    padding: ${({ theme }) => theme.Spacing.LG};
    gap: ${({ theme }) => theme.Spacing.MD};
    border-bottom: 1px solid ${({ theme }) => theme.Background.Three};
    z-index: 99;
  }
`;

export const MobileNavLink = styled.a`
  color: ${({ theme }) => theme.Foreground.Two};
  font-size: ${({ theme }) => theme.Text.Normal.REM}rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-decoration: none;
  padding: ${({ theme }) => theme.Spacing.SM} 0;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.Accent.Primary};
  }
`;

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MainWrapper = styled.div`
  background-color: ${(p) => p.theme.background.main};
  color: ${(p) => p.theme.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  z-index: 1;
  background: ${(p) => p.theme.background.main};
  width: 100%;
  height: 8rem;
  display: flex;
  padding: 2rem 10rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  .logo {
    cursor: pointer;
    svg {
      width: 15rem;
      height: 10rem;
    }
  }
  div {
    display: flex;
    gap: 4rem;
  }
`;

export const HeaderSearchButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #f5f5fa;
  transition: 0.2s;
  :hover {
    transform: scale(1.2);
  }
  a {
    color: inherit;
  }
`;

export const HeaderWriteButton = styled(motion.button)`
  width: 14rem;
  cursor: pointer;
  background-color: transparent;
  color: ${(p) => p.theme.text};
  border: 0.2rem solid ${(p) => p.theme.text};
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
  border-radius: 2.5rem;
`;

export const HeaderProfile = styled.div`
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: ${(p) => p.theme.text};
`;

export const MainContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* grid-template-columns: repeat(4, 1fr);
  place-items: center; */
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 8.4rem;
  gap: 3rem;
  padding: 0 10rem;
  /* @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  } */
`;

export const MainContentItem = styled(motion.div)`
  box-shadow: 0 0 1rem ${(p) => p.theme.background.dark};
  width: 25rem;
  height: 35rem;
  border: 1px solid ${(p) => p.theme.text};
  border-radius: 0.4rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  .thumbnail {
    width: 100%;
    height: 20rem;
    background-color: ${(p) => p.theme.text};
    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .itemBody {
    display: grid;
    grid-template-rows: 3fr 1fr;
    .itemPost {
      padding: 1.6rem 1rem;
      line-height: 1.5;
      color: ${(p) => p.theme.text};
      .postTitle {
        font-size: 1.6rem;
        font-weight: ${(p) => p.theme.fontWeight.bold};
        height: 2.4rem;
        max-lines: 1;
      }
      .postContent {
        font-size: 1.4rem;
        font-weight: ${(p) => p.theme.fontWeight.normal};
        height: 6.3rem;
        max-lines: 3;
      }
      .subInfo {
        display: flex;
        gap: 1rem;
        font-size: 1.2rem;
        color: ${(p) => p.theme.color.light};
      }
    }
    .title {
      font-size: 2.5rem;
      font-weight: ${(p) => p.theme.fontWeight.bold};
    }
    .description {
      font-size: 1.6rem;
    }
  }
`;

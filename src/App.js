import React, { useRef } from "react";
import styled from "styled-components";
import Observer from "./Observer";

const Container = styled.div`
  & section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 102vh;

    &:nth-child(2) {
      background-color: orangered;
    }
  }
`;

const Articles = styled.div`
  display: flex;
  width: 60%;
`;

const Article = styled.article`
  width: 100%;
  margin: 0 30px;
  padding: 30px;
  background-color: burlywood;
  opacity: 0;
  transition: opacity 0.4s ease-in;
  will-change: opacity;

  &.show {
    opacity: 1;
  }
`;

const App = () => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const observerOptions = {
    root: null,
    rootMargin: "-50px",
    threshold: 1.0,
  };

  return (
    <Container>
      <section>section</section>
      <section>
        <Articles>
          <Observer childref={ref} options={observerOptions}>
            <Article ref={ref}>test</Article>
          </Observer>
          <Observer childref={ref1} options={observerOptions}>
            <Article ref={ref1}>test</Article>
          </Observer>
          <Observer childref={ref2} options={observerOptions}>
            <Article ref={ref2}>test</Article>
          </Observer>
        </Articles>
      </section>
      <section>section</section>
    </Container>
  );
};

export default App;

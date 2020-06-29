import React from "react";
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
  transform: translateY(40px);
  transition: opacity 0.4s ease-in, transform 0.4s ease-in;
  will-change: opacity transform;

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`;

const App = () => {
  return (
    <Container>
      <section>section</section>
      <section>
        <Articles>
          <Observer>
            <Article>test</Article>
          </Observer>
          <Observer>
            <Article>test</Article>
          </Observer>
          <Observer>
            <Article>test</Article>
          </Observer>
        </Articles>
      </section>
      <section>section</section>
    </Container>
  );
};

export default App;

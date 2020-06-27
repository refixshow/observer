import React from "react";
import styled, { css } from "styled-components";
import UseObserver from "./UseObserver";

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
  padding: 30px;
  background-color: burlywood;
`;

const App = () => {
  const obesrverStyles = css`
    width: 100%;
    margin: 0 30px;
  `;

  return (
    <Container>
      <section>section</section>
      <section>
        <Articles>
          <UseObserver delay={0.4} styles={obesrverStyles}>
            <Article>test</Article>
          </UseObserver>
          <UseObserver delay={0.55} styles={obesrverStyles}>
            <Article>test</Article>
          </UseObserver>
          <UseObserver delay={0.7} styles={obesrverStyles}>
            <Article>test</Article>
          </UseObserver>
        </Articles>
      </section>
      <section>section</section>
    </Container>
  );
};

export default App;

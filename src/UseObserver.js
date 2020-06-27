import React from "react";
import styled from "styled-components";
import { InView } from "react-intersection-observer";

const Container = styled.div`
  opacity: 0;
  transform: translateY(-30px);
  transition: 0.4s opacity ease-in, 0.4s transform ease-in;
  will-change: opacity transform;

  &.show {
    opacity: 1;
    transform: translateY(0px);
  }

  ${({ delay }) =>
    delay ? `transition-delay: ${delay}s;` : "transition-delay: 0.4s;"}

  ${({ styles = "" }) => styles}
`;

const UseObserver = ({ children, delay, styles }) => {
  return (
    <InView>
      {({ inView, ref }) => (
        <Container
          className={inView ? "show" : ""}
          ref={ref}
          delay={delay}
          styles={styles}
        >
          {children}
        </Container>
      )}
    </InView>
  );
};

export default UseObserver;

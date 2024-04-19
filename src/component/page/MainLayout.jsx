import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 100px 0;
  display: flex;
  justify-content: center;

`;

const MainLayout = () => {
  return (
    <Wrapper>
      <div class="photo-area">
        <dl><img src="https://i.pinimg.com/736x/37/9f/51/379f51e1d0796c56813548011d09f279.jpg" alt="photo1"></img></dl>
        <dt>모나리자</dt>
        <dd>레오나르도 다빈치</dd>
      </div>
      <div class="photo-area">
        <dl><img src="https://i.pinimg.com/564x/df/f5/95/dff5958f57b505b87abfdfee791d0bd7.jpg" alt="photo2"></img></dl>
        <dt>우아한 책읽기</dt>
        <dd>모네</dd>
      </div>
    </Wrapper>
  );
};

export default MainLayout;
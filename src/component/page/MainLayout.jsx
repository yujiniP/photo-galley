import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import PhotoInfo from '../list/PhotoInfo';
import BtnMore from '../ui/BtnMore';
import Avatar from '../list/Avatar';


const Wrapper = styled.div`
  background-color: aliceblue;
`;

function MainLayout() {

  // function toggleHandler() {
  //   setCheck(isCheck => !isCheck);
  //   console.log('BtnMore', BtnMore);
  // };

  return (
    <Wrapper>
      <h1>Photo Galley</h1>
      <div className="photo-wrap">
        <div className="frame">
          <Avatar
            image="https://uploads7.wikiart.org/images/georges-seurat/the-eiffel-tower-1889.jpg"
            isNew={true}
          />
          {/* <div className="img-area">
            <img src="https://uploads7.wikiart.org/images/georges-seurat/the-eiffel-tower-1889.jpg" alt="photo1" />
            <BtnZoomInOut />
          </div> */}
          {/* <ul>
            {
              list.map(item => <li>{item}</li>)
            }
          </ul> */}
          {/* <BtnMore onClick={toggleHandler}></BtnMore> */}
          <PhotoInfo
            title="에펠탑"
            name="조르주 쇠라"
          />
        </div>

        <div className="frame">
          <div className="img-area">
            <Avatar
              image="https://lh3.googleusercontent.com/J0sw0IiqP2F4gavYnI-vUa5IBgHiHy42lohgm-qq1vuygUX0HQgylVSV1ZdDTV5XIg=s1200"
              isNew={true}
            />
          </div>

          <PhotoInfo
            title="진주 귀고리를 한 소녀"
            name="요하네스 페르메이르"
          />
        </div>

        <div className="frame">
          <div className="img-area">
            <Avatar
              image="https://lh3.googleusercontent.com/CRzfW0tRn-yT0MgD49zBY9hIYGsV_Fi6uM1ZwIr8T7hbpI0l6NbjX9L-OFA7Aqqo=s1200"
            />
          </div>

          <PhotoInfo
            title="여성의 세시기"
            name="구스타프 클림트"
          />

        </div>
      </div>
    </Wrapper>
  );
};

export default MainLayout;
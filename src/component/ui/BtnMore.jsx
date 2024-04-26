import React from 'react';
import { Button, Flex } from 'antd';


const BtnMore = ({ handleClick }) => {

  // function handleClick() {
  //   console.log('hello');
  // }

  return (
    <Flex gap="small" wrap="wrap">
      <Button type="primary"
        onClick={handleClick}
      >
        more
      </Button>
    </Flex>
  );
};

export default BtnMore;


import React from 'react';
import tw, {styled} from 'twin.macro';
import {up} from 'styled-breakpoints';

const Wrapper = styled.div`
  ${tw`mx-auto px-1.5 md:px-3 font-body`}
  ${up('lg')}{
    max-width: 1150px;
  }
`;

export default Wrapper;
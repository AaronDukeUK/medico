import React, { useContext } from 'react';
import useSWR from 'swr';
import tw, {styled, css} from 'twin.macro';
import {up} from 'styled-breakpoints';

import Loading from './Loading';
import Pin from '../svg/pin.svg';

const VendorInfo = ({brandSlug}) => {

  const { data, error } = useSWR(`https://brand.marketcube.io/api/brand/medico-marketplace/${brandSlug}`)

  // If loading
  if(!error && !data){
    return <Section><Loading /></Section>;
  }

  if(error){
    console.error(error);
    return <div>{error}</div>
  }

  const brand = data.data.vendor;

  return (
    <Section>
      <div tw="flex items-center md:items-start">
        <ImageWrapper>
          <img src={`${brand.brandLogo}?tr=w-500,h-500`} tw="w-full rounded-full" />
        </ImageWrapper>
        <div tw="flex-1 ml-2 md:ml-4 lg:ml-4.5">
          <h1 tw="text-blue mb-1">{brand.brandName}</h1>
          <div tw="flex mb-1 md:mb-2 lg:mb-3">
            <Pin tw="w-1.5 h-1.5 mr-1" />
            <span tw="flex-1 text-grey-dark">{brand.displayAddress.city}, {brand.displayAddress.country}</span>
          </div>
          <p tw="hidden md:block">{brand.brandDescription}</p>
        </div>
      </div>
      <div tw="md:hidden mt-2">
        <p>{brand.brandDescription}</p>
      </div>
    </Section>
  )

}

const ImageWrapper = styled.div`
  width: 75px;
  ${up('md')}{
    width: 185px;
  }
  ${up('lg')}{
    width: 220px;
  }
`;

const Section = tw.section`py-2 md:py-4 lg:py-6`;

export default VendorInfo;
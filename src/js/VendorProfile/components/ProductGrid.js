import React from 'react';
import useSWR from 'swr';
import tw, {css} from 'twin.macro';

import Loading from './Loading';

import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

const ProductGrid = ({brandSlug}) => {

  const { data, error } = useSWR(`https://brand.marketcube.io/api/brand/product/medico-marketplace/${brandSlug}`);
  const { data: brandData, error: brandError } = useSWR(`https://brand.marketcube.io/api/brand/medico-marketplace/${brandSlug}`);

  if(!error && !data){
    return (
      <SkeletonTheme color="#f1f2fb">
        <Grid>
          <Skeleton height={200} />
          <Skeleton height={200} />
          <div tw="hidden md:block"><Skeleton height={200} /></div>
        </Grid>
      </SkeletonTheme>
    )
  }

  if(error){
    console.log(error);
    return <div>Error: {error}</div>
  }
  if(brandError){
    console.log(brandError);
    return <div>Brand Error: {brandError}</div>
  }

  const products = data.data.products;
  const brand = brandData.data.vendor;

  const displayPrice = price => {
    if(price === 0){
      return '0.00';
    }else if(typeof price === 'string'){
      return price;
    }else{
      return price.toFixed(2);
    }
  }

  return (
    <Grid>
      {products.map(product => (
        <a href={`/products/${product.handle}`} key={product._id}>
          <div tw="w-full relative mb-1.5" css={[css`padding-bottom: 100%`]}>
            <img src={product.primaryImageUrl} tw="w-full h-full object-cover absolute top-0 left-0" />
          </div>
          <h3 tw="text-blue text-1.8 mb-0.5">{product.title}</h3>
          <p tw="text-grey-dark mb-1">£{displayPrice(product.price)}</p>
          <div tw="flex items-center">
            <img src={`${brand.brandLogo}?tr=w-40,h-40`} tw="w-2 h-2 rounded-full mr-0.5" /><span tw="text-grey-dark">Sold by <strong tw="font-bold">{brandSlug}</strong></span>
          </div>
        </a>
      ))}
    </Grid>
  )
}

const Grid = tw.div`grid grid-cols-2 md:grid-cols-3 gap-1.5`;

export default ProductGrid;
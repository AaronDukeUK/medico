import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import tw, {styled, css, GlobalStyles} from 'twin.macro';
import {SWRConfig} from 'swr';
import {ThemeProvider} from 'styled-components'

import Wrapper from './styled/Wrapper';
import ProductGrid from './components/ProductGrid';
import VendorInfo from './components/VendorInfo';

const VendorProfile = () => {

  const pathnameSplit = window.location.pathname.split("/pages/vendor/");

  // If vendor name is blank in URL, or the URL is bad
  if (window.location.pathname === "/pages/vendor/" || pathnameSplit.length < 2) {
    return <div>Vendor not found</div>;
  };

  const brandSlug = pathnameSplit[1];

  return (
    <Wrapper>
      <section>
        <VendorInfo brandSlug={brandSlug} />
      </section>
      <section tw="pb-2 md:pb-4 lg:pb-8">
        <ProductGrid brandSlug={brandSlug} />
      </section>
    </Wrapper>
  )

}

const theme = {
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

const App = () => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <SWRConfig value={{ fetcher: (resource, init) => fetch(resource, init).then(res => res.json()) }}>
        <VendorProfile />
      </SWRConfig>
    </ThemeProvider>
  </div>
)

ReactDOM.render(<App />, document.getElementById("vendor-profile"));

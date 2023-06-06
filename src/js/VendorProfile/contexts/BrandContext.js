import React, {createContext, useState} from 'react';

const BrandContext = createContext({
  brand: {},
  setBrand: () => {}
});

export const BrandProvider = ({children}) => {
  const [brand, setBrand] = useState({});
  return (
    <BrandContext.Provider value={{ brand, setBrand }}>
      {children}
    </BrandContext.Provider>
  )
}

export default BrandContext;
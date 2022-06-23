import React, { useState } from 'react';

const ProductosContext = React.createContext({})

export function ProductosContextProvider({children}) {
    const [products, setProducts] = useState([])

    return  <ProductosContext.Provider value={{ products, setProducts }}>
                {children}
            </ProductosContext.Provider>     
}

export default ProductosContext;


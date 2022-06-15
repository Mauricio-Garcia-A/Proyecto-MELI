import React, { useState, Context } from 'react';

const ProductosContext = React.createContext({ })

export function ProductosContextProvider({children}) {
    const [productos, setProductos] = useState([])

    return  (   <Context.Provider value={{ productos, setProductos }}>
                    {children}
                </Context.Provider>
            )
}

export default ProductosContext;


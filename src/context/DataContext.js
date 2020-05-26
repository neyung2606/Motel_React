import React, { createContext, useState } from 'react';

export const DataSearchContext = createContext();

export const DataSearchProvider = (props) => {

    const [keySearch, setKeySearch] = useState('')

    const updateKeySearch = (key) => {
        setKeySearch(key)
    }
    
    return <DataSearchContext.Provider value={{
        key: keySearch,
        action: updateKeySearch
    }}>
        {props.children}
    </DataSearchContext.Provider>
}
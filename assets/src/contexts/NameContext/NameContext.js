import React, {useContext, useState} from 'react';

const NameContext = React.createContext(null);

const NameProvider = ({ children }) => {
  const [name, setName] = useState("Aldez")

  return (
    <NameContext.Provider value={[name, setName]}>
      {children}
    </NameContext.Provider>
  )
}

const useName = () => {
  return useContext(NameContext)
}

export {
  NameProvider,
  useName,
}

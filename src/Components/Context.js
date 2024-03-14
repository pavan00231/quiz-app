// Example Context.js
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [moviesList, setMoviesList] = useState([]);
  const [leadboardData, setLeadboardData] = useState([
    {
        name: 'pavan',
        score: 10,
    },
    {
        name: 'pavan',
        score: 10,
    },
    {
        name: 'pavan',
        score: 10,
    },
    {
        name: 'pavan',
        score: 10,
    },
    {
        name: 'pavan',
        score: 10,
    }])
  return (
    <MyContext.Provider value={{ leadboardData, setLeadboardData}}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};

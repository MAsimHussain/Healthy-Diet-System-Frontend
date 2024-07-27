import React, {useEffect, useState } from "react";
import myContext from "./myContext";


export default function MyState(props) {
    const [user, setUser] = useState(null);
      
    useEffect(() => {
      const localData = JSON.parse(sessionStorage.getItem('UserData'));
      if (localData) {
        setUser(localData);
      }
    }, []);
  
  return (
    <myContext.Provider
      value={{user,setUser }}
    >
      {props.children}
    </myContext.Provider>
  );
}

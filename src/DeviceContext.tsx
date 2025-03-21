import {createContext,useState,useContext, Dispatch, SetStateAction, ReactElement} from 'react';

type DeviceContextType={
  isValidDevice:boolean;
  setIsValidDevice:Dispatch<SetStateAction<boolean>>;
}

type DeviceProviderPropsType={
  children:ReactElement;
}

const DeviceContext=createContext<DeviceContextType | null>(null);

export const DeviceProvider =({children}:DeviceProviderPropsType)=>{
  const [isValidDevice,setIsValidDevice] =useState(false);

  return(
    <DeviceContext.Provider value={{isValidDevice,setIsValidDevice}}>
      {children}

      
    </DeviceContext.Provider>
  );
};

export const useDevice =()=>{
  const context=useContext(DeviceContext);
  if(!context){
    throw new Error("Device context Error")
  }
  return context;
};
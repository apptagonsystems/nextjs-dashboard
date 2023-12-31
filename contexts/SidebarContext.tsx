'use client'
import React , { createContext, useState } from 'react'

interface Props {
    children: React.ReactNode;
  }

  export type SidebarContextType = {
    expanded: boolean;
    setExpanded: (expand: boolean) => void;
  };
export const SidebarContext =  createContext<SidebarContextType | null>(null); 

export const SidebarProvider: React.FC<Props> = ({children}) => {
    const [expanded, setExpanded] = useState(true)

    return (
        <SidebarContext.Provider value={{ expanded, setExpanded }}>
            {children}
        </SidebarContext.Provider>
    );

}

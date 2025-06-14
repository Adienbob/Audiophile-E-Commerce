"use client"

import { createContext, useContext, useEffect, useState } from "react";

export type dataType = {
id: number;
slug: string;
name: string;
image: {
   mobile: string;
   tablet: string;
   desktop: string;
};
category: string;
new: boolean;
price: number;
description: string;
features: string;
includes: {
   quantity: number;
   item: string;
}[];
gallery: {
   first: {
      mobile: string;
      tablet: string;
      desktop: string;
   };
   second: {
      mobile: string;
      tablet: string;
      desktop: string;
   };
   third: {
      mobile: string;
      tablet: string;
      desktop: string;
   };
};
others: {
   slug: string;
   name: string;
   image: {
      mobile: string;
      tablet: string;
      desktop: string;
   };
}[];
};

const DataContext = createContext<dataType[] | null>(null);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
const [data, setData] = useState<dataType[]>([]);

useEffect(() => {
   fetch("/data.json") 
      .then((res) => res.json())
      .then((data) => setData(data))
}, []);

return (
   <DataContext.Provider value={data}>
      {children}
   </DataContext.Provider>
);
};

export const useData = () => {
const context = useContext(DataContext);
if (context === null) {
   throw new Error("useData must be used within a DataProvider");
}
return context;
};

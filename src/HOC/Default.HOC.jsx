import React from "react";
import {Route , Routes} from "react-router-dom" ;
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({element:Element, ...rest}) => {  
  return(
      <>
      <Routes>
        <Route {...rest} 
        Element={(props) =>(
          <DefaultLayout>
            <Element {...props}/>
          </DefaultLayout>
        )} />
      </Routes>
      </>
    )
  };


export default DefaultHOC ;
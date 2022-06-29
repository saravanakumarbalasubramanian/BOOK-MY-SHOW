import React from "react";

export const NextArrow = (props) => {
    // class
    // styles
    // onclick
    // we can get these three from  the {...props}
    return (
  <>
    <div 
     className={props.className}
     // normal props are used to make use of the className and onClick 
     // why we are using 3 dot in props in style means because we are copying the style from props and applying background so the three dots are used to copying the style
     style={{...props.style , background:"black"}}
     onClick={props.onClick}
    />
  </>
  );
};
export const PrevArrow = (props) => {
  return (
  <>
     <div  className={props.className}
     // normal props are used to make use of the className and onClick 
     // why we are using 3 dot in props in style means because we are copying the style from props and applying background so the three dots are used to copying the style
     style={{...props.style , background:"black"}}
     onClick={props.onClick} />
  </>
  );
};
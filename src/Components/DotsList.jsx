import React from 'react';
import Dots from './Dots';


const DotsList = ({pageCount, openList, active}) => { 

    return pageCount.map((e, i) => {
      if (openList===i)
        return <Dots
                 key={i}
                 active={true}/>
      else
        return <Dots 
                 key={i}/>
    })
  // if (e===openList) 
  // return (
  //   <div>
  //     <Dots active={active}/>
  //   </div> 
  //   )
  // else  (
  //   <div>
  //     <Dots/>
  //   </div> 
  //   )
  //  }
  //  )
};

export default DotsList;
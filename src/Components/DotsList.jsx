import React from 'react';
import Dots from './Dots';


const DotsList = ({pageCount, pageIndex }) => { 



    return pageCount.map((e, i) => {
      if (pageIndex===e)
        return <Dots active={true}/>
      else
        return <Dots/>
    })
};

export default DotsList;
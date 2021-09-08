import React, {useState} from 'react';
import TodoItem from './TodoItem';
import Folder from './Folder';



const TodoGrid = ({mini, rootElement, currentList}) => {

  const [openIndex, setOpenIndex] = useState(-1);

  function onFolderClick(i) {
    setOpenIndex(i === openIndex ? -1 : i)
  }

  return currentList.map((e, i) => {
      if (e.children)
        return <Folder
            key={i}
            title={e.title}
            todos={e.children}
            modal={openIndex === i}
            rootElement={rootElement}
            onClick={() => onFolderClick(i)} />
      else
        return <TodoItem title={e.title} 
                         mini={mini}
                         key={i}
                         icon= {e.icon}
                         />
    })

};

export default TodoGrid;
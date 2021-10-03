import React, { useState } from 'react';

const File = (props) =>{
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {setIsOpen(!isOpen)}
  
    return (
      <div>
        <span onClick={handleClick} style={{cursor: "pointer"}}>
          <i className="blue file alternate icon"></i>
        </span>
        {props.name}
        <div>
          {isOpen ? props.children : null}
        </div>
      </div>
    )
  };

  export default File;
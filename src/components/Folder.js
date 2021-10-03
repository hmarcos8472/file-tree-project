import {React, useState} from 'react'

const Folder = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {setIsOpen(!isOpen)}
  
    return (
      <div>
        <span onClick={handleClick} style={{cursor: "pointer"}}>
          <i className={isOpen ? "blue folder open icon" : "blue folder icon"}></i>
          {props.name}
        </span>
        <div style={{marginLeft: '30px'}}>
          {isOpen ? props.children : null}
        </div>
      </div>
    )
  };

export default Folder;

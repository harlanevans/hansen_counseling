import React from 'react';
import { Modal } from 'semantic-ui-react';


const NavModal = ({showModal}) => {
  return showModal === true ? (
      <div className='modal-main'>
    
      </div>
  ) : (<></>)
}

export default NavModal;
import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  //함수의 이름은 반드시 대문자로 작성해야 한다.

  const [ModalIsOpen, setModalisOpen] = useState(false);

  function deleteHandler() {
    setModalisOpen(true);
  }
  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {ModalIsOpen && <Modal />}
      {ModalIsOpen && <Backdrop />}
    </div>
  );
}

export default Todo;

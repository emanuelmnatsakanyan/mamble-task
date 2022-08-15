import { ReactComponent as X } from '../images/x.svg'
import CustomModal from './Modal';
import { useState } from 'react'


function Todo({ text, id, completed, showCompleted, removeTodo, checkCompleted }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={(!showCompleted && completed) ? 'todo-block d-none': 'todo-block' }>
            <input
                type='checkbox'
                checked={completed}
                className="todo-block-checkbox"
                onChange={() => {
                    checkCompleted(id)
                }}
            />
            <p className="todo-block-text" style={completed ? {color: '#ACACAC'} : {color: '#666666'}}>{text}</p>
            <button className='x-btn' onClick={() => handleShow()}>
                <X />
            </button>
            <CustomModal show={show} handleClose={handleClose} removeTodo={removeTodo} id={id} />
        </div>
    );
}
export default Todo
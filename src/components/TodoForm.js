import { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { ReactComponent as X } from '../images/x.svg'


function TodoForm({addTodo}) {
    const [value, setValue] = useState("");
    const inputRef = useRef()
    const [canBeAdded, setCanBeAdded] = useState(true)
    const id = JSON.parse(window.localStorage.getItem('id')) || 1


    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        if (canBeAdded) {
            addTodo(value, id, false)
            setValue("");
            setCanBeAdded(true)
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label>Task</Form.Label>
            <div>
                <Form.Group className='form-group'>
                    <Form.Control
                        ref={inputRef}
                        type="text"
                        className={canBeAdded ? 'input' : "input input-invalid"}
                        value={value}
                        placeholder='Write here'
                        onChange={e => {
                            const value = e.target.value
                            const length = value.length
                            setValue(value)
                            if (length > 54) {
                                setCanBeAdded(false)
                            } else if (!canBeAdded && length <= 54) {
                                setCanBeAdded(true)
                                return
                            }

                        }}
                    />
                    {value && <Button className='clear-input' onClick={() => {setCanBeAdded(true) ;setValue('')}}>
                        <X />
                    </Button>}
                </Form.Group>
                {(!canBeAdded && window.innerWidth <= 576) ? <label className='invalid-error'>Task content can contain max 54 characters.</label> : null}

                <Button className='todo-add' type="submit">
                    Add
                </Button>
            </div>
            {(!canBeAdded && window.innerWidth > 576) ? <label className='invalid-error'>Task content can contain max 54 characters.</label> : null}

        </Form>
    );
}

export default TodoForm
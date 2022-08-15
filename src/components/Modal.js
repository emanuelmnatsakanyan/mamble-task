import Modal from 'react-bootstrap/Modal';

function CustomModal({ show, handleClose, removeTodo, id}) {

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header>
				<Modal.Title>Are you sure you want to delete?</Modal.Title>
			</Modal.Header>
			<Modal.Footer>
				<button onClick={() => {removeTodo(id)}}>
					Yes
				</button>
				<button onClick={handleClose}>
					No
				</button>
			</Modal.Footer>
		</Modal>
	);
}

export default CustomModal
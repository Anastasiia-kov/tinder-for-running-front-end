import React, {useState} from 'react'
import '../css/Event.css'
import Modal from 'react-modal';
import CreateEventForm from './CreateEventForm';

Modal.setAppElement('#root')
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


function Event () {
    const [modalIsOpen, setIsOpen] = useState(false);

    const onCreateEvent = () => {
        setIsOpen(true)
    }

    const closeModal = async () => {
        setIsOpen(false);
    }
    return (
        <div className="main-container">
            <div className="title-main">𝓓𝓸 𝔂𝓸𝓾 <br></br>𝔀𝓪𝓷𝓽 𝓽𝓸 𝓻𝓾𝓷 <br></br>𝓽𝓸𝓭𝓪𝔂?</div>
            <button className="button2" onClick={onCreateEvent}>Create new event</button>
            <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                    <CreateEventForm></CreateEventForm>
                </Modal>
        </div>
    )
}

export default Event
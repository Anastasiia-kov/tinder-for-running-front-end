import React, { useEffect, useState } from "react";
import "../../css/Event.css";
import Modal from "react-modal";
import CreateEventForm from "./CreateEventForm";
import { getAllEventsFromDB } from "../../lib/event";
import { useAuth } from "../../context/AuthContext";
import SwipeList from "./SwipeList";
import axios from "axios";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Event() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const auth = useAuth();
  const getEventsOfUser = async () => {
    const response = await getAllEventsFromDB(auth.token);
    setEvents(response.data);
    // console.log(response.data);
  };

  useEffect(() => {
    getEventsOfUser();
  }, []);

  const onCreateEvent = () => {
    setIsOpen(true);
  };

  const closeModal = async () => {
    setIsOpen(false);
  };

  const Change = (index, info) => {
    // console.log("the index and info from the swipe event");
    // console.log(index);
    // console.log(info);
    const swipe = index === 2 ? "Swiped left" : "Swiped right";
    console.log(info);

    console.log(`you ${swipe} ${info.title}`);
    // axios.put("POST") to add put request to add token, notificationID
    // and to edit the request (with filter when useID === to the )
    // const newEvents = events.shift()
    // info.userId

    setEvents(events.slice(1));
  };
  return (
    <div className="main-container">
      <SwipeList
        events={events}
        Change={(i, info) => {
          Change(i, info);
        }}
      />
      <div className="title-main">
        𝓓𝓸 𝔂𝓸𝓾 <br></br>𝔀𝓪𝓷𝓽 𝓽𝓸 𝓻𝓾𝓷 <br></br>𝓽𝓸𝓭𝓪𝔂?
      </div>

      <button className="button2" onClick={onCreateEvent}>
        Create new event
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <CreateEventForm></CreateEventForm>
      </Modal>
    </div>
  );
}

export default Event;

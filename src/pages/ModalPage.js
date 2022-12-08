import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  const text = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      pellentesque dolor a ipsum scelerisque sodales. Nunc vulputate, nulla
      vitae hendrerit vehicula, augue nisi cursus ante, id fringilla elit ligula
      ut mi. Aenean vulputate leo purus, in aliquet tellus ultrices id. Donec a
      eros et mauris rhoncus rhoncus. Vestibulum sit amet varius massa, ut
      ornare quam. Nunc posuere nisi ac libero tempor, nec consectetur ante
      tempor. Etiam in tincidunt felis. Nam massa purus, cursus non tellus sit
      amet, faucibus tempus sem.
    </p>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      {text}
      {text}
      {text}
      {text}
      {text}
      {text}
      {text}
      {text}
      {text}
      {text}
      {text}
      {text}
      {text}
      {text}
    </div>
  );
}

export default ModalPage;

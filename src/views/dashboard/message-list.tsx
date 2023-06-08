import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal, Table } from "react-bootstrap";
import ButtonOutline from "../../components/atoms/buttonoutline";
import { authGateway, guestGateway } from "../../utils/gateway";
import URLS from "../../configs/urls";
import {
  AiOutlineDelete,
  AiOutlineExclamationCircle,
  AiFillCloseCircle,
  AiFillEye,
} from "react-icons/ai";
import ButtonDark from "../../components/atoms/buttondark";
import { toast } from "react-toastify";
import ButtonSimple from "../../components/atoms/buttonsimple";

const Messages = () => {
  const [messageList, setMessageList] = useState([]);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showDeleteModal, setShowdeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const [message, setMessage] = useState({
    _id: 0,
    name: "",
    email: "",
    message: "",
    services: [""]
  });

  useEffect(() => {
    getMessageList();
  }, []);

  const getMessageList = async () => {
    const response = await authGateway("GET", URLS.CONTACT.GET_CONTACT);
    if (response.success) {
      setMessageList(response.data);
    }
  };

  const handleMessageModal = (message: any) => {
    setMessage(message);
    setShowMessageModal(true);
  };

  const handleDeleteModal = (id: number) => {
    setDeleteId(id);
    setShowdeleteModal(!showDeleteModal);
  };

  const handleDelete = async () => {
    const response = await authGateway(
      "DELETE",
      URLS.CONTACT.DELETE_CONTACT + "/" + deleteId
    );
    if (response.success) {
      setShowdeleteModal(!showDeleteModal);
      toast.success(response.message);
      getMessageList();
    }
  };
  return (
    <Container className="p-4">
      <div className="d-flex justify-content-between pt-3">
        <h5 className="name">Messages</h5>
      </div>
      <Table striped className="mt-5 main-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {messageList &&
            messageList.map((messageObj, key) => {
              const { _id, name, email } = messageObj;
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td className="action">
                    <AiFillEye
                      className="me-3"
                      size="25"
                      onClick={() => handleMessageModal(messageObj)}
                    />
                    <AiOutlineDelete
                      size="22"
                      onClick={() => handleDeleteModal(_id)}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <Modal
        show={showDeleteModal}
        onHide={() => setShowdeleteModal(!showDeleteModal)}
        centered
        className="delete-modal"
      >
        <Modal.Body className="p-3 name">
          Are you sure you want to delete?
        </Modal.Body>
        <Modal.Footer>
          <ButtonDark
            width="120px"
            text="Delete"
            handleClick={() => handleDelete()}
          />
          <ButtonOutline
            text="Cancel"
            outline="outline-dark"
            width="120px"
            handleClick={() => setShowdeleteModal(!showDeleteModal)}
          />
        </Modal.Footer>
      </Modal>
      <Modal
        show={showMessageModal}
        onHide={() => setShowMessageModal(!showMessageModal)}
        centered
        className="delete-modal"
      >
        <Modal.Body className="p-3 name">
          <h6 className="mb-3">View Message</h6>
          <p>Name: {message.name}</p>
          <p>Email: {message.email}</p>
          <p>Services: {message.services.join(', ')}</p>
          <p>Message: {message.message}</p>
        </Modal.Body>
        <Modal.Footer>
          <ButtonOutline
            text="Cancel"
            outline="outline-dark"
            width="120px"
            handleClick={() => setShowMessageModal(!showMessageModal)}
          />
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Messages;

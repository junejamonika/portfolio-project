import React, { useEffect, useState } from "react";
import { Container, Modal, Table } from "react-bootstrap";
import ButtonOutline from "../../components/atoms/buttonoutline";
import { authGateway, guestGateway } from "../../utils/gateway";
import URLS from "../../configs/urls";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import ButtonDark from "../../components/atoms/buttondark";
import { toast } from "react-toastify";

const WorkList = () => {
  const [faqList, setFaqList] = useState([]);
  const [showDeleteModal, setShowdeleteModal] = useState(false);
  const [modalDeleteToggle, setModalDeleteToggle] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  useEffect(() => {
    getFaqList();
  }, []);

  const getFaqList = async () => {
    const response = await authGateway("GET", URLS.FAQ.GET_FAQS);
    if (response.success) {
      setFaqList(response.data);
    }
  };

  const handleDeleteModal = (id: number) => {
    setDeleteId(id);
    setShowdeleteModal(!showDeleteModal);
  };

  const handleDelete = async () => {
    const response = await authGateway(
      "DELETE",
      URLS.FAQ.DELETE_FAQ + "/" + deleteId
    );
    if (response.success) {
      setShowdeleteModal(!showDeleteModal);
      toast.success(response.message);
      getFaqList();
    }
  };
  return (
    <Container className="p-4">
      <div className="d-flex justify-content-between pt-3">
        <h5 className="heading">FAQ</h5>
        <Link to="/dashboard/work">
          <ButtonOutline text="Add Work" width="140px" outline="outline-dark" />
        </Link>
      </div>
      <Table striped className="mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Answer</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {faqList &&
            faqList.map(({ _id, question, answer }, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{question}</td>
                  <td dangerouslySetInnerHTML={{__html:answer}}></td>
                  <td className="action">
                    <Link to={`/dashboard/faq?id=${_id}`}>
                      <AiOutlineEdit className="me-3" size="25" />
                    </Link>
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
        <Modal.Body className="p-3 heading">
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
    </Container>
  );
};

export default WorkList;

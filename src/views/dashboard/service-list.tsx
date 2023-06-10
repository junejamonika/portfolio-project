import React, { useEffect, useState } from "react";
import { Container, Modal, Table } from "react-bootstrap";
import ButtonOutline from "../../components/atoms/buttonoutline";
import { authGateway, guestGateway } from "../../utils/gateway";
import URLS from "../../configs/urls";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import ButtonDark from "../../components/atoms/buttondark";
import { toast } from "react-toastify";

const ServiceList = () => {
  const [serviceList, setServiceList] = useState([]);
  const [showDeleteModal, setShowdeleteModal] = useState(false);
  const [modalDeleteToggle, setModalDeleteToggle] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  useEffect(() => {
    getServiceList();
  }, []);

  const getServiceList = async () => {
    const response = await authGateway("GET", URLS.SERVICE.GET_SERVICES);
    if (response.success) {
      setServiceList(response.data);
    }
  };

  const handleDeleteModal = (id: number) => {
    setDeleteId(id);
    setShowdeleteModal(!showDeleteModal);
  };

  const handleDelete = async () => {
    const response = await authGateway(
      "DELETE",
      URLS.SERVICE.DELETE_SERVICE + "/" + deleteId
    );
    if (response.success) {
      setShowdeleteModal(!showDeleteModal);
      toast.success(response.message);
      getServiceList();
    }
  };
  return (
    <Container className="p-4">
      <div className="d-flex justify-content-between pt-3">
        <h5 className="heading">SERVICES</h5>
        <Link to="/dashboard/service">
          <ButtonOutline text="Add Service" width="155px" outline="outline-dark" />
        </Link>
      </div>
      <Table striped className="mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {serviceList &&
            serviceList.map(({ _id, name, desc }, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{name}</td>
                  <td>{desc}</td>
                  <td className="action">
                    <Link to={`/dashboard/service?id=${_id}`}>
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

export default ServiceList;

import React, { useEffect, useState } from "react";
import { Container, Form, Modal, Table } from "react-bootstrap";
import ButtonOutline from "../../components/atoms/buttonoutline";
import { authGateway, guestGateway } from "../../utils/gateway";
import URLS from "../../configs/urls";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import ButtonDark from "../../components/atoms/buttondark";
import { toast } from "react-toastify";

const ValuesAndBeliefs = () => {
  const [faqList, setFaqList] = useState([]);
  const [showValueModal, setShowValueModal] = useState(false);
  const [showDeleteModal, setShowdeleteModal] = useState(false);
  const [value, setValue] = useState({
    mainheading: "",
    subheading: "",
    icon: "",
  });
  const [errors, setErrors] = useState({
    mainheading: "",
    subheading: "",
    icon: "",
  });
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

  const handleChange = (event: any) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleImage = (event: any) => {
    setValue({ ...value, [event.target.name]: event.target.files[0] });
  };

  const handleSubmit = async (id: string = "") => {
    var errors = { mainheading: "", subheading: "", icon: "" };
    var is_error = 0;
    if (value.mainheading == "") {
      errors.mainheading = "Please fill in the required field";
      is_error = 1;
    }
    if (value.subheading == "") {
      errors.subheading = "Please fill in the required field";
      is_error = 1;
    }
    if (!is_error) {
      const formData = new FormData();
      formData.append("mainheading", value.mainheading);
      formData.append("subheading", value.subheading);
      formData.append("icon", value.icon);
      const url = `${URLS.VALUES.VALUE}${id ? "/" + id : ""}`;
      const method = id ? "PUT" : "POST";
      const response = await authGateway(method, url, JSON.stringify(formData));
      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    }
    setErrors(errors);
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
        <h5 className="heading">Values & Beliefs</h5>
        <ButtonOutline
          handleClick={() => {
            setShowValueModal(true);
          }}
          text="Add"
          width="140px"
          outline="outline-dark"
        />
      </div>
      <Table striped className="mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Main Heading</th>
            <th>Sub Heading</th>
            <th>Icon</th>
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
                  <td dangerouslySetInnerHTML={{ __html: answer }}></td>
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
      <Modal
        show={showValueModal}
        onHide={() => setShowValueModal(!showValueModal)}
        centered
        className="delete-modal"
      >
        <Modal.Body className="p-3 heading">
          <Form.Group className="mb-2 mt-4" controlId="formBasicEmail">
            <Form.Label>Main Heading*</Form.Label>
            <Form.Control
              className="text-field"
              type="text"
              name="question"
              onChange={(event) => handleChange(event)}
              defaultValue={value.mainheading}
            />
            <Form.Control.Feedback
              type="invalid"
              className={errors.mainheading ? "d-block" : ""}
            >
              <AiOutlineExclamationCircle /> {errors.mainheading}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-2 mt-4" controlId="formBasicEmail">
            <Form.Label>Sub Heading*</Form.Label>
            <Form.Control
              className="text-field"
              type="text"
              name="question"
              onChange={(event) => handleChange(event)}
              defaultValue={value.subheading}
            />
            <Form.Control.Feedback
              type="invalid"
              className={errors.subheading ? "d-block" : ""}
            >
              <AiOutlineExclamationCircle /> {errors.subheading}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Icon</Form.Label>
            <Form.Control type="file" onChange={(e) => handleImage(e)} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <ButtonDark
            width="120px"
            text="Add"
            handleClick={() => handleSubmit()}
          />
          <ButtonOutline
            text="Cancel"
            outline="outline-dark"
            width="120px"
            handleClick={() => setShowValueModal(!showValueModal)}
          />
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ValuesAndBeliefs;

import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal, Table } from "react-bootstrap";
import ButtonOutline from "../../components/atoms/buttonoutline";
import { authGateway, guestGateway } from "../../utils/gateway";
import URLS from "../../configs/urls";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineExclamationCircle,
  AiFillCloseCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import ButtonDark from "../../components/atoms/buttondark";
import { toast } from "react-toastify";
import ButtonSimple from "../../components/atoms/buttonsimple";

const ValuesAndBeliefs = () => {
  const [valuesList, setValuesList] = useState([]);
  const [showValueModal, setShowValueModal] = useState(false);
  const [showDeleteModal, setShowdeleteModal] = useState(false);
  const [previewImg, setPreviewImg] = useState("");
  const [value, setValue] = useState({
    _id: 0,
    heading: "",
    subheading: "",
    image: "",
  });
  const [errors, setErrors] = useState({
    heading: "",
    subheading: "",
    image: "",
  });
  const [deleteId, setDeleteId] = useState(0);

  useEffect(() => {
    getValuesList();
  }, []);

  const getValuesList = async () => {
    const response = await authGateway("GET", URLS.VALUES.GET_VALUES);
    if (response.success) {
      setValuesList(response.data);
    }
  };

  const handleChange = (event: any) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleImage = (event: any) => {
    setValue({ ...value, [event.target.name]: event.target.files[0] });
    const objectUrl = URL.createObjectURL(event.target.files[0]);
    setPreviewImg(objectUrl);
  };

  const tiggerImageField = () => {
    document.getElementById("image")?.click();
  };

  const handleSubmit = async () => {
    var errors = { heading: "", subheading: "", image: "" };
    var is_error = 0;
    if (value.heading == "") {
      errors.heading = "Please fill in the required field";
      is_error = 1;
    }
    if (value.subheading == "") {
      errors.subheading = "Please fill in the required field";
      is_error = 1;
    }
    if (value.image == "") {
      errors.image = "Image is required";
      is_error = 1;
    }
    if (!is_error) {
      const formData = new FormData();
      formData.append("heading", value.heading);
      formData.append("subheading", value.subheading);
      if (typeof value.image != "string") {
        formData.append("image", value.image);
      }
      const url = `${URLS.VALUES.VALUE}${value._id ? "/" + value._id : ""}`;
      const method = value._id ? "PUT" : "POST";
      const response = await authGateway(method, url, formData, true);
      if (response.success) {
        toast.success(response.message);
        setShowValueModal(false);
        getValuesList();
      } else {
        toast.error(response.message);
      }
    }
    setErrors(errors);
  };

  const handleValueModal = (value: any) => {
    setValue(value);
    setShowValueModal(true);
    setPreviewImg(value.image);
  };

  const handleDeleteModal = (id: number) => {
    setDeleteId(id);
    setShowdeleteModal(!showDeleteModal);
  };

  const handleDelete = async () => {
    const response = await authGateway(
      "DELETE",
      URLS.VALUES.DELETE_VALUE + "/" + deleteId
    );
    if (response.success) {
      setShowdeleteModal(!showDeleteModal);
      toast.success(response.message);
      getValuesList();
    }
  };
  return (
    <Container className="p-4">
      <div className="d-flex justify-content-between pt-3">
        <h5 className="heading">Values & Beliefs</h5>
        <ButtonOutline
          handleClick={() => {
            setValue({ _id: 0, heading: "", subheading: "", image: "" });
            setPreviewImg("");
            setShowValueModal(true);
          }}
          text="Add"
          width="140px"
          outline="outline-dark"
        />
      </div>
      <Table striped className="mt-5 main-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Main Heading</th>
            <th>Sub Heading</th>
            <th>image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {valuesList &&
            valuesList.map((valueObj, key) => {
              const { _id, heading, subheading, image } = valueObj;
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{heading}</td>
                  <td>{subheading}</td>
                  <td>
                    <img src={image} height="50" />
                  </td>
                  <td className="action">
                    <AiOutlineEdit
                      className="me-3"
                      size="25"
                      onClick={() => handleValueModal(valueObj)}
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
          <h6>{value._id ? "Update" : "Add"} Value & Belief</h6>
          <Form.Group className="mb-2 mt-4" controlId="formBasicEmail">
            <Form.Label>Main Heading*</Form.Label>
            <Form.Control
              className="text-field"
              type="text"
              name="heading"
              onChange={(event) => handleChange(event)}
              defaultValue={value.heading}
            />
            <Form.Control.Feedback
              type="invalid"
              className={errors.heading ? "d-block" : ""}
            >
              <AiOutlineExclamationCircle /> {errors.heading}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-2 mt-4" controlId="formBasicEmail">
            <Form.Label>Sub Heading*</Form.Label>
            <Form.Control
              className="text-field"
              type="text"
              name="subheading"
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
          <Form.Group controlId="formFile" className="mb-3 d-none">
            <Form.Control
              type="file"
              name="image"
              id="image"
              onChange={(e) => handleImage(e)}
            />
          </Form.Group>
          <div className="mt-4">
            {previewImg && (
              <div className="preview-image">
                <img src={previewImg} height="50" width="50" />
                <AiFillCloseCircle
                  className="close"
                  onClick={() => {
                    setPreviewImg("");
                    setValue({ ...value, image: "" });
                  }}
                />
              </div>
            )}
            <ButtonSimple
              text={`${previewImg ? "Change" : "Add"} Image`}
              handleClick={() => tiggerImageField()}
            />
            <Form.Control.Feedback
              type="invalid"
              className={errors.image ? "d-block" : ""}
            >
              <AiOutlineExclamationCircle /> {errors.image}
            </Form.Control.Feedback>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <ButtonDark
            width="120px"
            text={value._id ? "Update" : "Add"}
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

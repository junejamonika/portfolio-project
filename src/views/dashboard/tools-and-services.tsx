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

const ToolsAndServices = () => {
  const [toolsList, setToolsList] = useState([]);
  const [showToolModal, setShowToolModal] = useState(false);
  const [showDeleteModal, setShowdeleteModal] = useState(false);
  const [previewImg, setPreviewImg] = useState("");
  const [tool, setTool] = useState({
    _id: 0,
    name: "",
    image: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    image: "",
  });
  const [deleteId, setDeleteId] = useState(0);

  useEffect(() => {
    getToolsList();
  }, []);

  const getToolsList = async () => {
    const response = await authGateway("GET", URLS.TOOLS.GET_TOOLS);
    if (response.success) {
      setToolsList(response.data);
    }
  };

  const handleChange = (event: any) => {
    setTool({ ...tool, [event.target.name]: event.target.value });
  };

  const handleImage = (event: any) => {
    setTool({ ...tool, [event.target.name]: event.target.files[0] });
    const objectUrl = URL.createObjectURL(event.target.files[0]);
    setPreviewImg(objectUrl);
  };

  const tiggerImageField = () => {
    document.getElementById("image")?.click();
  };

  const handleSubmit = async () => {
    var errors = { name: "", image: "" };
    var is_error = 0;
    if (tool.name == "") {
      errors.name = "Please fill in the required field";
      is_error = 1;
    }
    if (tool.image == "") {
      errors.image = "Image is required";
      is_error = 1;
    }
    if (!is_error) {
      const formData = new FormData();
      formData.append("name", tool.name);
      if (typeof tool.image != "string") {
        formData.append("image", tool.image);
      }
      const url = `${URLS.TOOLS.TOOL}${tool._id ? "/" + tool._id : ""}`;
      const method = tool._id ? "PUT" : "POST";
      const response = await authGateway(method, url, formData, true);
      if (response.success) {
        toast.success(response.message);
        setShowToolModal(false);
        getToolsList();
      } else {
        toast.error(response.message);
      }
    }
    setErrors(errors);
  };

  const handleToolModal = (tool: any) => {
    setTool(tool);
    setShowToolModal(true);
    setPreviewImg(tool.image);
  };

  const handleDeleteModal = (id: number) => {
    setDeleteId(id);
    setShowdeleteModal(!showDeleteModal);
  };

  const handleDelete = async () => {
    const response = await authGateway(
      "DELETE",
      URLS.TOOLS.DELETE_TOOL + "/" + deleteId
    );
    if (response.success) {
      setShowdeleteModal(!showDeleteModal);
      toast.success(response.message);
      getToolsList();
    }
  };
  return (
    <Container className="p-4">
      <div className="d-flex justify-content-between pt-3">
        <h5 className="name">Tools & Services</h5>
        <ButtonOutline
          handleClick={() => {
            setTool({ _id: 0, name: "", image: "" });
            setPreviewImg("");
            setShowToolModal(true);
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
            <th>Name</th>
            <th>image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {toolsList &&
            toolsList.map((toolObj, key) => {
              const { _id, name, image } = toolObj;
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{name}</td>
                  <td>
                    <img src={image} height="50" />
                  </td>
                  <td className="action">
                    <AiOutlineEdit
                      className="me-3"
                      size="25"
                      onClick={() => handleToolModal(toolObj)}
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
        show={showToolModal}
        onHide={() => setShowToolModal(!showToolModal)}
        centered
        className="delete-modal"
      >
        <Modal.Body className="p-3 name">
          <h6>{tool._id ? "Update" : "Add"} Tool</h6>
          <Form.Group className="mb-2 mt-4" controlId="formBasicEmail">
            <Form.Label>Name*</Form.Label>
            <Form.Control
              className="text-field"
              type="text"
              name="name"
              onChange={(event) => handleChange(event)}
              defaultValue={tool.name}
            />
            <Form.Control.Feedback
              type="invalid"
              className={errors.name ? "d-block" : ""}
            >
              <AiOutlineExclamationCircle /> {errors.name}
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
                    setTool({ ...tool, image: "" });
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
            text={tool._id ? "Update" : "Add"}
            handleClick={() => handleSubmit()}
          />
          <ButtonOutline
            text="Cancel"
            outline="outline-dark"
            width="120px"
            handleClick={() => setShowToolModal(!showToolModal)}
          />
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ToolsAndServices;

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

const PassionProjects = () => {
  const [projectsList, setProjectsList] = useState([]);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showDeleteModal, setShowdeleteModal] = useState(false);
  const [previewImg, setPreviewImg] = useState("");
  const [project, setProject] = useState({
    _id: 0,
    image: "",
  });
  const [errors, setErrors] = useState({
    image: "",
  });
  const [deleteId, setDeleteId] = useState(0);

  useEffect(() => {
    getProjectsList();
  }, []);

  const getProjectsList = async () => {
    const response = await authGateway("GET", URLS.PROJECTS.GET_PROJECTS);
    if (response.success) {
      setProjectsList(response.data);
    }
  };

  const handleImage = (event: any) => {
    setProject({ ...project, [event.target.name]: event.target.files[0] });
    const objectUrl = URL.createObjectURL(event.target.files[0]);
    setPreviewImg(objectUrl);
  };

  const tiggerImageField = () => {
    document.getElementById("image")?.click();
  };

  const handleSubmit = async () => {
    var errors = { name: "", image: "" };
    var is_error = 0;
    if (project.image == "") {
      errors.image = "Image is required";
      is_error = 1;
    }
    if (!is_error) {
      const formData = new FormData();
      if (typeof project.image != "string") {
        formData.append("image", project.image);
      }
      const url = `${URLS.PROJECTS.PROJECT}${project._id ? "/" + project._id : ""}`;
      const method = project._id ? "PUT" : "POST";
      const response = await authGateway(method, url, formData, true);
      if (response.success) {
        toast.success(response.message);
        setShowProjectModal(false);
        getProjectsList();
      } else {
        toast.error(response.message);
      }
    }
    setErrors(errors);
  };

  const handleProjectModal = (project: any) => {
    setProject(project);
    setShowProjectModal(true);
    setPreviewImg(project.image);
  };

  const handleDeleteModal = (id: number) => {
    setDeleteId(id);
    setShowdeleteModal(!showDeleteModal);
  };

  const handleDelete = async () => {
    const response = await authGateway(
      "DELETE",
      URLS.PROJECTS.DELETE_PROJECT + "/" + deleteId
    );
    if (response.success) {
      setShowdeleteModal(!showDeleteModal);
      toast.success(response.message);
      getProjectsList();
    }
  };
  return (
    <Container className="p-4">
      <div className="d-flex justify-content-between pt-3">
        <h5 className="name">Passion Projects</h5>
        <ButtonOutline
          handleClick={() => {
            setProject({ _id: 0, image: "" });
            setPreviewImg("");
            setShowProjectModal(true);
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
            <th>image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projectsList &&
            projectsList.map((projectObj, key) => {
              const { _id, name, image } = projectObj;
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>
                    <img src={image} height="50" />
                  </td>
                  <td className="action">
                    <AiOutlineEdit
                      className="me-3"
                      size="25"
                      onClick={() => handleProjectModal(projectObj)}
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
        show={showProjectModal}
        onHide={() => setShowProjectModal(!showProjectModal)}
        centered
        className="delete-modal"
      >
        <Modal.Body className="p-3 name">
          <h6>{project._id ? "Update" : "Add"} Passion Project</h6>
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
                    setProject({ ...project, image: "" });
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
            text={project._id ? "Update" : "Add"}
            handleClick={() => handleSubmit()}
          />
          <ButtonOutline
            text="Cancel"
            outline="outline-dark"
            width="120px"
            handleClick={() => setShowProjectModal(!showProjectModal)}
          />
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default PassionProjects;

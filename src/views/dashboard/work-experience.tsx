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

const WorkExperience = () => {
  const [ExperienceList, setExperienceList] = useState([]);
  const [showExperienceModal, setShowExperienceModal] = useState(false);
  const [showDeleteModal, setShowdeleteModal] = useState(false);
  const [previewImg, setPreviewImg] = useState("");
  const [experience, setExperience] = useState({
    _id: 0,
    company: "",
    designation: "",
    year: "",
  });
  const [errors, setErrors] = useState({
    company: "",
    designation: "",
    year: "",
  });
  const [deleteId, setDeleteId] = useState(0);

  useEffect(() => {
    getExperiencesList();
  }, []);

  const getExperiencesList = async () => {
    const response = await authGateway("GET", URLS.EXPERIENCE.GET_EXPERIENCE);
    if (response.success) {
      setExperienceList(response.data);
    }
  };

  const handleChange = (event: any) => {
    setExperience({ ...experience, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    var errors = { company: "", designation: "", year: "" };
    var is_error = 0;
    console.log(experience);
    if (experience.company == "") {
      errors.company = "Please fill in the required field";
      is_error = 1;
    }
    if (experience.designation == "") {
      errors.designation = "Please fill in the required field";
      is_error = 1;
    }
    if (experience.year == "") {
      errors.year = "Please fill in the required field";
      is_error = 1;
    }
    if (!is_error) {
      const url = `${URLS.EXPERIENCE.EXPERIENCE}${experience._id ? "/" + experience._id : ""}`;
      const method = experience._id ? "PUT" : "POST";
      const response = await authGateway(method, url, JSON.stringify(experience));
      if (response.success) {
        toast.success(response.message);
        setShowExperienceModal(false);
        getExperiencesList();
      } else {
        toast.error(response.message);
      }
    }
    setErrors(errors);
  };

  const handleExperienceModal = (experience: any) => {
    setExperience(experience);
    setShowExperienceModal(true);
    setPreviewImg(experience.year);
  };

  const handleDeleteModal = (id: number) => {
    setDeleteId(id);
    setShowdeleteModal(!showDeleteModal);
  };

  const handleDelete = async () => {
    const response = await authGateway(
      "DELETE",
      URLS.EXPERIENCE.DELETE_EXPERIENCE + "/" + deleteId
    );
    if (response.success) {
      setShowdeleteModal(!showDeleteModal);
      toast.success(response.message);
      getExperiencesList();
    }
  };
  return (
    <Container className="p-4">
      <div className="d-flex justify-content-between pt-3">
        <h5 className="company">Work Experience</h5>
        <ButtonOutline
          handleClick={() => {
            setExperience({ _id: 0, company: "", designation: "", year: "" });
            setPreviewImg("");
            setShowExperienceModal(true);
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
            <th>Company</th>
            <th>Designation</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ExperienceList &&
            ExperienceList.map((experienceObj, key) => {
              const { _id, company, designation, year } = experienceObj;
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{company}</td>
                  <td>{designation}</td>
                  <td>{year}</td>
                  <td className="action">
                    <AiOutlineEdit
                      className="me-3"
                      size="25"
                      onClick={() => handleExperienceModal(experienceObj)}
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
        <Modal.Body className="p-3 company">
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
        show={showExperienceModal}
        onHide={() => setShowExperienceModal(!showExperienceModal)}
        centered
        className="delete-modal"
      >
        <Modal.Body className="p-3 company">
          <h6>{experience._id ? "Update" : "Add"} Work Experience</h6>
          <Form.Group className="mb-2 mt-4" controlId="formBasicEmail">
            <Form.Label>Company*</Form.Label>
            <Form.Control
              className="text-field"
              type="text"
              name="company"
              onChange={(event) => handleChange(event)}
              defaultValue={experience.company}
            />
            <Form.Control.Feedback
              type="invalid"
              className={errors.company ? "d-block" : ""}
            >
              <AiOutlineExclamationCircle /> {errors.company}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-2 mt-4" controlId="formBasicEmail">
            <Form.Label>Designation*</Form.Label>
            <Form.Control
              className="text-field"
              type="text"
              name="designation"
              onChange={(event) => handleChange(event)}
              defaultValue={experience.designation}
            />
            <Form.Control.Feedback
              type="invalid"
              className={errors.designation ? "d-block" : ""}
            >
              <AiOutlineExclamationCircle /> {errors.designation}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-2 mt-4" controlId="formBasicEmail">
            <Form.Label>Year*</Form.Label>
            <Form.Control
              className="text-field"
              type="text"
              name="year"
              onChange={(event) => handleChange(event)}
              defaultValue={experience.year}
            />
            <Form.Control.Feedback
              type="invalid"
              className={errors.year ? "d-block" : ""}
            >
              <AiOutlineExclamationCircle /> {errors.year}
            </Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <ButtonDark
            width="120px"
            text={experience._id ? "Update" : "Add"}
            handleClick={() => handleSubmit()}
          />
          <ButtonOutline
            text="Cancel"
            outline="outline-dark"
            width="120px"
            handleClick={() => setShowExperienceModal(!showExperienceModal)}
          />
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default WorkExperience;

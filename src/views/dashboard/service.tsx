import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { AiFillCloseCircle, AiOutlineExclamationCircle } from "react-icons/ai";
import { authGateway, guestGateway } from "../../utils/gateway";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import URLS from "../../configs/urls";
import ButtonDark from "../../components/atoms/buttondark";
import { useSearchParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { GrAddCircle, GrSubtractCircle } from "react-icons/gr";
import ButtonSimple from "../../components/atoms/buttonsimple";

const Service = () => {
  const navigate = useNavigate();
  const [service, setService] = useState({
    name: "",
    desc: "",
    image: "",
    list: [""],
  });
  const [errors, setErrors] = useState({
    name: "",
    desc: "",
    image: "",
    list: "",
  });
  const [previewImg, setPreviewImg] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      getService(id);
    }
  }, [id]);

  const getService = async (id: string) => {
    const response = await authGateway("GET", URLS.SERVICE.SERVICE + "/" + id);
    if (response.success) {
      setService(response.data);
      setPreviewImg(response.data.image);
    }
  };

  const handleChange = (event: any) => {
    setService({ ...service, [event.target.name]: event.target.value });
  };

  const handleImage = (event: any) => {
    setService({ ...service, [event.target.name]: event.target.files[0] });
    const objectUrl = URL.createObjectURL(event.target.files[0]);
    setPreviewImg(objectUrl);
  };

  const handleArrayInput = (event: any, index: number) => {
    service.list[index] = event.target.value;
    setService({ ...service, list: [...service.list] });
  };

  const addArrayInput = (name: string) => {
    service.list.push("");
    setService({ ...service, list: [...service.list] });
  };

  const tiggerImageField = () => {
    document.getElementById("image")?.click();
  };

  const deleteArrayInput = (index: number, name: string) => {
    service.list.splice(index, 1);
    setService({ ...service, list: service.list });
  };

  const handleSubmit = async () => {
    var errors = { name: "", desc: "", list: "", image: "" };
    var is_error = 0;
    if (service.name == "") {
      errors.name = "Please fill in the required field";
      is_error = 1;
    }
    if (service.desc == "") {
      errors.desc = "Please fill in the required field";
      is_error = 1;
    }
    if (service.image == "") {
      errors.image = "Image is required";
      is_error = 1;
    }
    if (service.list.length == 0 || service.list.some((val) => val == "")) {
      errors.list = "Please fill in the required field";
      is_error = 1;
    }
    if (!is_error) {
      const formData = new FormData();
      formData.append("name", service.name);
      formData.append("desc", service.desc);
      formData.append("list", JSON.stringify(service.list));
      if (typeof service.image != "string") {
        formData.append("image", service.image);
      }
      const url = `${URLS.SERVICE.SERVICE}${id ? "/" + id : ""}`;
      const method = id ? "PUT" : "POST";
      const response = await authGateway(method, url, formData, true);
      if (response.success) {
        navigate("/dashboard/services");
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    }
    setErrors(errors);
  };
  return (
    <Container className="p-4">
      <div className="d-flex justify-content-between pt-3">
        <h5 className="heading">{id ? "Edit " : "Add "}SERVICE</h5>
      </div>
      <Form>
        <Form.Group className="mb-2 mt-4" controlId="formBasicEmail">
          <Form.Label>Name*</Form.Label>
          <Form.Control
            className="text-field"
            type="text"
            name="name"
            onChange={(event) => handleChange(event)}
            defaultValue={service.name}
          />
          <Form.Control.Feedback
            type="invalid"
            className={errors.name ? "d-block" : ""}
          >
            <AiOutlineExclamationCircle /> {errors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-2 mt-4" controlId="formBasicEmail">
          <Form.Label>Description*</Form.Label>
          <Form.Control
            className="text-field"
            type="text"
            name="desc"
            onChange={(event) => handleChange(event)}
            defaultValue={service.desc}
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
        <Row>
          <Col md={6}>
            <Form.Group className="mb-2 mt-4" controlId="formBasicEmail">
              <div className="d-flex justify-content-between mb-2">
                <Form.Label>List</Form.Label>
                <GrAddCircle
                  className="align-self-center"
                  onClick={() => addArrayInput("list")}
                />
              </div>
              {service.list.map((elmt, index) => {
                return (
                  <div className="d-flex">
                    <Form.Control
                      className="text-field"
                      type="text"
                      name="list"
                      onBlur={(event) => handleArrayInput(event, index)}
                      defaultValue={elmt}
                    />
                    <GrSubtractCircle
                      className="align-self-center"
                      onClick={() => deleteArrayInput(index, "list")}
                    />
                  </div>
                );
              })}
              <Form.Control.Feedback
                type="invalid"
                className={errors.list ? "d-block" : ""}
              >
                <AiOutlineExclamationCircle /> {errors.list}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <div className="mt-4 mb-4">
          {previewImg && (
            <div className="preview-image">
              <img src={previewImg} height="50" width="50" />
              <AiFillCloseCircle
                className="close"
                onClick={() => {
                  setPreviewImg("");
                  setService({ ...service, image: "" });
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
        <ButtonDark width="150px" text="Submit" handleClick={handleSubmit} />
      </Form>
    </Container>
  );
};

export default Service;

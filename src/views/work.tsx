import React, { useEffect, useState } from "react";
import Work from "../components/molecules/work";
import { Col, Row } from "react-bootstrap";
import ButtonOutline from "../components/atoms/buttonoutline";
import { guestGateway } from "../utils/gateway";
import URLS from "../configs/urls";

const Works = () => {
  const [workList, setWorkList] = useState([]);
  const [limit, setLimit] = useState(3);
  const [totalCount, setTotalCount] = useState(1);
  useEffect(() => {
    getWorkList(limit);
  }, []);

  const getWorkList = async (limit: number) => {
    const response = await guestGateway(
      "GET",
      URLS.WORK.GET_WORK + `?limit=${limit}`
    );
    if (response.success) {
      setWorkList(response.data);
      setTotalCount(response.count);
    }
  };
  return (
    <div className="work-section mt-100">
      <Row className="work-title">
        <Col md={4}>
          <h1 className="text-white">Work</h1>
        </Col>
        <Col md={8} className="text-gray align-self-center text-end">
          <a href="tel:+91-90048-55805">(+91) 90048-55805</a>
          <span className="divider">|</span>
          <a href="mailto:smeetmak@gmail.com">smeetmak@gmail.com</a>
        </Col>
      </Row>
      <div>
        {workList.map((data) => (
          <Work data={data} />
        ))}
      </div>
      <div className="d-flex justify-content-center mt-60">
        {totalCount > limit && (
          <ButtonOutline
            width="167px"
            text="LOAD MORE"
            outline="outline-light"
            handleClick={() => {
              setLimit(limit + 3);
              getWorkList(limit + 3);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Works;

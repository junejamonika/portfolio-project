import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'

const DesignProcess = () => {
  useEffect(() => {
    processCurve();
  }, []);

  const process = [
    {
      title: "Discover",
      desc: "At this stage of the process, I immerse myself in your universe to learn more about your business. It is essential that I understand your needs, as well as your target market. The result? A leeway to an unmatched user experience."
    },
    {
      title: "Design",
      desc: "With my understanding of your unique needs, I begin crafting an experience to best suit them. Every aspect of the design will effectively demonstrate your brand identity and elevate the user experience."
    },
    {
      title: "Deliver",
      desc: "Once the designs meet your approval, I will deliver them in a way that conforms to latest design standards, together with scope verification and a smooth handoff."
    }
  ]
  const processCurve = () => {
    var canvas = document.querySelector("#myCanvas") as HTMLCanvasElement;
    var context = canvas?.getContext("2d");
    console.log(context);

    // Water
    if (context) {
      context.beginPath();
      context.moveTo(0, 28)
      context.bezierCurveTo(0, 28, 31, 7, 70, 8);
      context.bezierCurveTo(109, 9, 313, 99, 425, 90);
      context.bezierCurveTo(516, 82.5, 536, 55, 536, 55);
      context.stroke();
    }
  }
  return (
    <Container fluid className='design-preocess'>
      <p className='text-sm-oragne text-center'>SIMPLE 3-STEP</p>
      <h2 className='text-center'>Design Process</h2>
      <div className='process-section'>
      {process.map((data, index) => {
        return (
          <div className='process'>
            <p className='process-count'>0{index + 1}</p>
            <div className='process-detail'>
              <h5>{data.title}</h5>
              <p className='color-gray'>{data.desc}</p>
            </div>
          </div>
        )
      })}
      </div>
    </Container>
  )
}

export default DesignProcess
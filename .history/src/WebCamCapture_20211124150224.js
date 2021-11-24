import { RadioButtonChecked } from "@material-ui/icons";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Webcam from "react-webcam";
import { selectedCameraImage, setCameraImage } from "./features/slices/cameraSlice";
const videoConstraints = {
  width: 600,
  height: 400,
  facingMode: "user",
};

export default function WebCamCapture() {
  const dispatch = useDispatch()
  const image = useSelector(state => state.camera.cameraImage)
  console.log(image);
  const webcamRef = useRef(null);
  // const [image, setImage] = useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();

    dispatch(setCameraImage(imageSrc))
  }, [webcamRef]);

  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
      <RadioButtonChecked
        fontSize="large"
        className="webCamCapture__button"
        onClick={capture}
      >
        Capture photo
      </RadioButtonChecked>
      <img src={image} alt='' />
    </div>
  );
}

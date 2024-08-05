import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Nav from "../Nav";
import { currentState } from "../../App";
import Button from "../Button";
import GenerateScienceButton from "../science/GenerateScience";
import Popup from "reactjs-popup";
import "../css/Found.css";

export default function Found() {
  const { state, setState } = React.useContext(currentState);
  const [camera, setCamera] = useState(false);
  const [file, setFile] = useState();
  const fileInputRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const celestialBody = location.state.celestialBody;

  const handleReturn = () => {
    navigate("/find", { state: { celestialBody } });
  };

  const generateStory = () => {
    let nextDest = state === "/story" ? "/story_config" : "/science_overview";
    navigate(nextDest, { state: { celestialBody } });
  };
  const generateScience = () => {
    let nextDest = state === "/story" ? "/story_config" : "/science_overview";
    navigate(nextDest, { state: { celestialBody } });
  };

  const handleCamera = () => {
    setCamera(!camera);
    //console.log(camera);
  };

  const ImageUpload = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  useEffect(() => {
    if (camera) {
      const startCamera = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" },
          });
          const video = document.getElementById("video");
          if (video) {
            video.srcObject = stream;
          }
        } catch (err) {
          console.error("Error accessing webcam:", err);
        }
      };
      startCamera();
    }
  }, [camera]);

  const handleCapture = (close) => {
    const video = document.getElementById("video");
    const picture = document.getElementById("picture");
    const canvas = document.createElement("canvas");
    [canvas.width, canvas.height] = [1024, 768];
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/jpeg");
    picture.src = dataUrl;
    //const dataUrl = canvas.toDataURL("image/jpeg");
    close();
  };

  const handleCancel = (close) => {
    close();
  };

  return (
    <div className="find page">
      <Nav title="You found:" navigate={handleReturn} return_path={"/find"} />
      <h1>{celestialBody.name}</h1>
      <div className="buttonsContainer">
        <input
          type="file"
          onChange={ImageUpload}
          multiple={false}
          ref={fileInputRef}
          style={{ display: "none" }}
        ></input>
        <Button
          onClick={() => fileInputRef.current.click()}
          name="Upload Image"
        />
        <Popup trigger={<Button name="Take Photo" />} modal nested>
          {(close) => (
            <div className="popup">
              <div className="uploadPhoto">
                <video id="video" autoPlay></video>
              </div>
              <div className="buttonsContainer">
                <Button onClick={handleCamera} name="Start Recording" />
                <Button
                  onClick={() => handleCapture(close)}
                  Close
                  modal
                  name="Capture"
                />{" "}
                <Button
                  onClick={() => handleCancel(close)}
                  Close
                  modal
                  name="Cancel"
                />
              </div>
            </div>
          )}
        </Popup>
        <Button onClick={generateStory} name="Generate Photo (AI)" />
      </div>

      <img className="picture" id="picture" src={file}></img>

      {state === "/story" ? (
        <Button onClick={generateStory} name="Add Story" />
      ) : (
        <GenerateScienceButton star={celestialBody.name} name="Add Science" />
      )}
    </div>
  );
}

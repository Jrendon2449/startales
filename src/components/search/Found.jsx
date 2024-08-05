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
  const [croppedFile, setCroppedFile] = useState();
  const fileInputRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const celestialBody = location.state.celestialBody;
  const api_private =
    "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDYtx1O+pbphTzvuZg6SC/e2v+kt9t1l4jFOp//6aRZ0b8DwJ3Pge2XKD1VDGrzLFQVB21mKM8dP6wsJOYUvuabUpbLUk+durHGmfpunDOMVMRKhXRUAsLIPCD3UdbjhL0NjoysOHveHB0651YZbD5qoXWK1EfCw0jcegk33h9kj8QlCONxXu9QjWZ47mFuBGwDXVGu5/TSk54JZLra+7Gd5BM8WrLCqPgMcQBKtVp/WH3pcNEt4NTW9fE+brAnuXgMMJSB0UvxU+3vYpZ4eI+lzZ9UVaMnV2mulGUf4Z3g/EHft0LXQJue6nXL9sOoVVKCz0e4uxk06DWrPPbvlZHfAgMBAAECggEACsuARb1cxBATe3t6tjh/TfIJtupDn8VnFi/35Vb9jU3R3n17PulhbNyfxXtDXo6QN6XxkJuqyXGxAVfrMBBcS1NfWIxmk9xHW7Wy0EyukqhsSKwCIecrTa8VE0y70AR+KE03+6IqpWMwH42Db+vA5i3ZvYsacfypRfY8PFCvrqIVLWUJNfYsTX8MC/Gdn/3NQ8Mn2Co9JjleZzpntN7EY4wuWTErT0HwgzesGgm8oT+8rCwOiyYgEhJi8tdNij4Qcfc+JOyQoVXAXsgwJ4LQ5GEqPehiirZAxG+S7MhKETHyLQlWtYz5nCGSIw07QGaIQxTo+vSbzaj6Y8da71d7tQKBgQD2W/Mtb0YoGuitStWVezaMl553EoCpAE4eBpjpJRGgxuqwhyTsQg8zFsEZrx0S6TlT+RPpdGse7eHcRqnuIqb6RVGQ8vodzyLubg8uwWPKWvgy4G1zklMMuUE/BjcuNA70TH6CDFKomKzZQD0IgOK/+m/NfpR949y+Lm92jrcZQwKBgQDhMjBxlmWbwH8oOPwC6XpgEBRcpPHWqm7bNH1nqoGhTX/iCBkS43fK6ENN3p3ppCFJjI5o+43YtpRp4M+q4e6jkpcELBgbcDpaY/4M9+Wl8s2wl+5Ebx4MDc3Yyj/WP84uP3f6ormhidBuRM42xZjeFLDfM97LIZ5DjcLl6oBdNQKBgDsV1n7hHyxjN8bIGe2d/Xk+q+zW7TCbOCEPaAESuOWcj5EC+KIJPef83xcv3oM4mF1BcbseBssGNpNEB2FrwixoD6X6AG7BzRjuIIoQK8TOiJR7KwT65Rw6GiHpdbaJGcURy42ZMwHojBwWwgyWDMwKXmIkp6yBx+F89ZKzq8pNAoGBAL1iYwEzlTH+GjHucmnUhlkBTM543PVGEcKBizFCYJARyAmD++o5qAXZfLihDjZuFJxw+1borurg6UF9kcfJB9NCNYSJvKBeqoRX8VBgrh34auknbHba5+8FMOcvd64rrK6SK8l5Thm+9620aaQAW0XxKqobSjOUiy+OqaiHpPo9AoGBAPD7hxfNOsp6lu7SMuahzqyCGErPrGsJlRrikhpkT4i1ncByOv91qhirJMfFnLO5c+BRyYddfTvONoXd/9GfMbG5JFL1t9a7dl7KiOFfMN6K4hqB0LlbMcTXTXrtDvGbJfzgDHn7N05dcHScHsfL0VopibmqpCaM7INxPLpjF7y0";
  const api_actual = "AIzaSyA8CKVgIfnRhNMEQDpoPOetMzavqA2MjUQ";
  const searchID = "80fd241a6e7334a4c";

  const resizeAndCropPic = (dataUrl) => {
    // crop to the center and resize to 512x512
    return new Promise((resolve) => {
      const canvas = document.createElement("canvas");
      [canvas.width, canvas.height] = [512, 512];
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = dataUrl;
      img.onload = () => {
        const [width, height] = [img.width, img.height];
        const [shorter, longer] = width < height ? [width, height] : [height, width];
        const [x, y] = width < height ? [0, (height - width) / 2] : [(width - height) / 2, 0];
        ctx.drawImage(img, x, y, shorter, shorter, 0, 0, 512, 512);
        const croppedDataUrl = canvas.toDataURL("image/jpeg");
        resolve(croppedDataUrl);
      };
    });
  };
  const handleReturn = () => {
    navigate("/find", { state: { celestialBody } });
  };

  const generateStory = () => {
    let nextDest = state === "/story" ? "/story_config" : "/science_overview";
    navigate(nextDest, { state: { celestialBody, croppedFile } });
  };
  const generateScience = () => {
    let nextDest = state === "/story" ? "/story_config" : "/science_overview";
    navigate(nextDest, { state: { celestialBody, croppedFile } });
  };

  const handleCamera = () => {
    setCamera(!camera);
    //
  };
  const fetchResults = async () => {
    try {
      const query = `${celestialBody.name} space object image`;
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${api_actual}&cx=${searchID}&q=${celestialBody.name}&searchType=image`
      );
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        setFile(data.items[0].link);
      }
    } catch (error) {
      console.error("Error fetching results:", error);
    }
    
    resizeAndCropPic(file).then((croppedDataUrl) => {
      setCroppedFile(croppedDataUrl);
      document.getElementById("picture").src = croppedDataUrl;
    });
  };

  const ImageUpload = (event) => {
    const fileUrl = URL.createObjectURL(event.target.files[0]);
    setFile(fileUrl);
    resizeAndCropPic(fileUrl).then((croppedDataUrl) => {
      setCroppedFile(croppedDataUrl);
      document.getElementById("picture").src = croppedDataUrl;
    });
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
         
        {/* <Popup trigger={<Button name="Take Photo" />} modal nested>
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
        </Popup> */}
        <Button onClick={fetchResults} name="Get Image" />
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

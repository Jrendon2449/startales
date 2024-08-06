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
  const [file, setFile] = useState();
  const [croppedFile, setCroppedFile] = useState();
  const [hasImage, setHasImage] = useState(false);
  const fileInputRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const celestialBody = location.state.celestialBody;
  const api_private =
    "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDYtx1O+pbphTzvuZg6SC/e2v+kt9t1l4jFOp//6aRZ0b8DwJ3Pge2XKD1VDGrzLFQVB21mKM8dP6wsJOYUvuabUpbLUk+durHGmfpunDOMVMRKhXRUAsLIPCD3UdbjhL0NjoysOHveHB0651YZbD5qoXWK1EfCw0jcegk33h9kj8QlCONxXu9QjWZ47mFuBGwDXVGu5/TSk54JZLra+7Gd5BM8WrLCqPgMcQBKtVp/WH3pcNEt4NTW9fE+brAnuXgMMJSB0UvxU+3vYpZ4eI+lzZ9UVaMnV2mulGUf4Z3g/EHft0LXQJue6nXL9sOoVVKCz0e4uxk06DWrPPbvlZHfAgMBAAECggEACsuARb1cxBATe3t6tjh/TfIJtupDn8VnFi/35Vb9jU3R3n17PulhbNyfxXtDXo6QN6XxkJuqyXGxAVfrMBBcS1NfWIxmk9xHW7Wy0EyukqhsSKwCIecrTa8VE0y70AR+KE03+6IqpWMwH42Db+vA5i3ZvYsacfypRfY8PFCvrqIVLWUJNfYsTX8MC/Gdn/3NQ8Mn2Co9JjleZzpntN7EY4wuWTErT0HwgzesGgm8oT+8rCwOiyYgEhJi8tdNij4Qcfc+JOyQoVXAXsgwJ4LQ5GEqPehiirZAxG+S7MhKETHyLQlWtYz5nCGSIw07QGaIQxTo+vSbzaj6Y8da71d7tQKBgQD2W/Mtb0YoGuitStWVezaMl553EoCpAE4eBpjpJRGgxuqwhyTsQg8zFsEZrx0S6TlT+RPpdGse7eHcRqnuIqb6RVGQ8vodzyLubg8uwWPKWvgy4G1zklMMuUE/BjcuNA70TH6CDFKomKzZQD0IgOK/+m/NfpR949y+Lm92jrcZQwKBgQDhMjBxlmWbwH8oOPwC6XpgEBRcpPHWqm7bNH1nqoGhTX/iCBkS43fK6ENN3p3ppCFJjI5o+43YtpRp4M+q4e6jkpcELBgbcDpaY/4M9+Wl8s2wl+5Ebx4MDc3Yyj/WP84uP3f6ormhidBuRM42xZjeFLDfM97LIZ5DjcLl6oBdNQKBgDsV1n7hHyxjN8bIGe2d/Xk+q+zW7TCbOCEPaAESuOWcj5EC+KIJPef83xcv3oM4mF1BcbseBssGNpNEB2FrwixoD6X6AG7BzRjuIIoQK8TOiJR7KwT65Rw6GiHpdbaJGcURy42ZMwHojBwWwgyWDMwKXmIkp6yBx+F89ZKzq8pNAoGBAL1iYwEzlTH+GjHucmnUhlkBTM543PVGEcKBizFCYJARyAmD++o5qAXZfLihDjZuFJxw+1borurg6UF9kcfJB9NCNYSJvKBeqoRX8VBgrh34auknbHba5+8FMOcvd64rrK6SK8l5Thm+9620aaQAW0XxKqobSjOUiy+OqaiHpPo9AoGBAPD7hxfNOsp6lu7SMuahzqyCGErPrGsJlRrikhpkT4i1ncByOv91qhirJMfFnLO5c+BRyYddfTvONoXd/9GfMbG5JFL1t9a7dl7KiOFfMN6K4hqB0LlbMcTXTXrtDvGbJfzgDHn7N05dcHScHsfL0VopibmqpCaM7INxPLpjF7y0";
  const api_actual = "AIzaSyBVjEMSPweWvMAFzqnGCOcuEw01IUuTBb8";
  const searchID = "a4ec0928817604670";

  const handleReturn = () => {
    navigate("/find", { state: { celestialBody } });
  };

  const generateStory = () => {
    let nextDest = state === "/story" ? "/story_config" : "/science_overview";
    navigate(nextDest, { state: { celestialBody, file } });
  };
  const generateScience = () => {
    let nextDest = state === "/story" ? "/story_config" : "/science_overview";
    navigate(nextDest, { state: { celestialBody, file } });
  };

  const fetchResults = async () => {
    try {
      const query = `${celestialBody.name} space object image`;
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${api_actual}&cx=${searchID}&q=${celestialBody.name}&searchType=image`
      );
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        console.log("get image", data.items[0].link);
        setFile(data.items[0].link);
        setHasImage(true);
      }
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  const ImageUpload = (event) => {
    const reader = new FileReader();
    reader.onloadend = function() {
      console.log("upload", reader.result);
      setFile(reader.result);
      setHasImage(true);
    }
    reader.readAsDataURL(event.target.files[0]);
    event.target.value = null;
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
        <Button onClick={fetchResults} name="Get Image" />
      </div>

      <img className={hasImage ? "image" : "picture"} id="picture" src={file}></img>

      {state === "/story" ? (
        <Button onClick={generateStory} name="Add Story" />
      ) : (
        <GenerateScienceButton img={file} star={celestialBody.name} name="Add Science" />
      )}
    </div>
  );
}

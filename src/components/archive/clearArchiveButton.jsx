import React, { useState } from "react";
import Button from "../Button";
import { useNavigate, useLocation } from "react-router-dom";

const clearArchiveButton = () => {
    const handleClick = () =>{
        localStorage.clear();
    }

    return (
    <>
        <Button
        onClick={handleClick}
        name="clear Archive"
        />
    </>
        );
};

export default clearArchiveButton;
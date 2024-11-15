import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
      <div className=" rounded-[30px] my-5 py-5">
        <Col className="w-full h-fit max-w-[1800px] pl-8 2xl:text-center">
          <h3 className="text-[1em]  text-black pl-2">Designed and Developed by Avishek Kr Pandit And Team.</h3>
          <span className="text-[1em] flex justify-center text-black  sm:-mt-[25px] ">Copyright © {year} AP</span>
        </Col>  
      </div>
  );
}

export default Footer;



/*eslint-disable*/
import React from "react";

import { Container } from "reactstrap";
import { BsTelegram, BsWhatsapp } from "react-icons/bs";

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage: "url(" + require("assets/img/card.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 id="title" className="presentation-title">
                Site oficial Black paineis
              </h1>
              {/* <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div> */}
            </div>
            <h2 className="presentation-subtitle text-center">
              Entre em contato através do nosso Whatsapp, telegram ou Chat
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
        <h6 className="category category-absolute">
          <div className="buttons-container">
            <a href="/">
              <button className="whatsapp">
                <BsWhatsapp size={24} color="#fff" />
                <div>Whatsapp</div>
              </button>
            </a>
            <a href="/">
              <button className="telegram">
                <BsTelegram size={24} color="#fff" />
                <div>Telegram</div>
              </button>
            </a>
          </div>
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;

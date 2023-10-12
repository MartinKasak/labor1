import "./item.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Item = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://www.oomipood.ee/image/cache/catalog/IMG31723351664-600x600.jpg",
    },
    {
      src: "https://www.oomipood.ee/image/cache/catalog/IMG31723351660-600x600.jpg",
    },
    {
      src: "https://www.oomipood.ee/image/cache/catalog/IMG31723351661-600x600.jpg",
    },
    {
      src: "https://www.oomipood.ee/image/cache/catalog/IMG31723351662-600x600.jpg",
    },
    {
      src: "https://www.oomipood.ee/image/cache/catalog/IMG31723351663-600x600.jpg",
    },

  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 4 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 4 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="itemContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="itemWrapper">
          <button className="bookNow">Reserveeri kohe</button>
          <h1 className="itemTitle">Labori toiteplokk 0-30VDC 5A, 2xLED tabloo UNI-T mudel 2</h1>
          <div className="itemAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Ruum 453</span>
          </div>
          <span className="itemDistance">
            
          </span>
          <span className="itemPriceHighlight">
            
          </span>
          <div className="itemImages">
            {photos.map((photo, i) => (
              <div className="itemImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="itemImg"
                />
              </div>
            ))}
          </div>
          <div className="itemDetails">
            <div className="itemDetailsTexts">
              <h1 className="itemTitle">Toiteplokk 0-30VDC 5A</h1>
              <p className="itemDesc">
              Labori toiteplokk 0-30VDC 5A, 2xLED tabloo UNI-T mudel 2 on lineaarne DC toiteplokk, mis pakub väljundpinget vahemikus 0 kuni 30 V ja väljundvoolu kuni 5 A. Sellel on kaks eraldi väljundit, mis võimaldavad toita kahte seadet korraga. Toiteplokil on kaks LED-ekraani, mis näitavad väljundpinget ja -voolu.


              </p>
            </div>
            <div className="itemDetailsPrice">
         
           
              <h2>

              </h2>
              <b></b>
                <b></b> 
                
              <button>Reserveeri</button>
              <b></b>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Item;

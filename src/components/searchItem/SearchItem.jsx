import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F27%2Fdf%2Fab%2F27dfabfe092c6855f92c7a059f2d6db8.jpg&f=1&nofb=1&ipt=efd08554a15356c2cf938cec6bbb906aefb311916499ec4c1468a952d441d694&ipo=images"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tallinna Ülikool </h1>
        <span className="siDistance">A 546</span>
        <span className="siTaxiOp"></span>
        <span className="siSubtitle">
          Arvutilabor
        </span>
        <span className="siFeatures">
          22 Arvutit • 21m² 
        </span>
        <span className="siCancelOp"> </span>
        <span className="siCancelOpSubtitle">
          
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Suurepärane  </span>
          <button> 8.5</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice"></span>
          <span className="siTaxOp"></span>
          <button className="siCheckButton">Vaata saadavust</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;

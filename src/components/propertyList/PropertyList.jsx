import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://www.oomipood.ee/image/cache/catalog/IMG32932721160-670x743.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Kategooria 1  </h1>
          <h2>23 items</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://www.oomipood.ee/image/cache/catalog/FLIR-ONE-PRO-iOS_1-600x600.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Kategooria 2</h1>
          <h2>5 items</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://www.oomipood.ee/image/cache/catalog/IMG33926652364-450x449.png"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Kategooria 3</h1>
          <h2>11 items</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://www.oomipood.ee/image/cache/catalog/IMG33926661500-800x800.png"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Kategooria 4</h1>
          <h2>13 items</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://www.oomipood.ee/image/cache/catalog/IMG32134556528-800x800.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Kategooria 5</h1>
          <h2>33 items</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;

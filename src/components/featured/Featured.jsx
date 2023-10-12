import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhasenstabinc.com%2Fwp-content%2Fuploads%2F2018%2F10%2FOSU-CFAES_Lab-2_Full.jpg&f=1&nofb=1&ipt=f6774779092ecb72f0a5770a4989c5066b5ac428fe1a90a736d32c4b2dffb710&ipo=images"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Labor 1 </h1>
          <h2>5 valikut</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F97%2Fa3%2Fd5%2F97a3d527a241f1b0381d69c92651ce83.jpg&f=1&nofb=1&ipt=6e731903e76f0d860dfabeaba285ad9e6df503a64519c42d933a7c2ca107fe8c&ipo=images"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Labor 2 </h1>
          <h2>2 valikut</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.vcfsShf-Q2TaAEHU4fIiWwHaD-%26pid%3DApi&f=1&ipt=7d2bfdc9b588bb7ecc2a697d0f73470e2f8cace3c77ce09ee14971287ed360b8&ipo=images"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Labor 3</h1>
          <h2>7 valikut</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;

import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tlu.ee%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fimage_1300xn%2Fpublic%2FVeebisisu%2FYlemised%2F3700x1100%2520pildivalik181.jpg%3Fitok%3DJ_o5opj3&f=1&nofb=1&ipt=0fee58929a2d09aaa5028940a42648aa511861940b39644ebaa5a1cf47bd413a&ipo=images"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Tallinna Ülikool</span>
        <span className="fpCity">Tallinn</span>
        <span className="fpPrice"></span>
        <div className="fpRating">
          <button>9.7</button>
          <span>Suurepärane</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff7.pmo.ee%2FpV3A0ceB7ZnKrvxNXxECFbcctqQ%3D%2F1536x0%2Fnginx%2Fo%2F2020%2F02%2F13%2F12939851t1h6103.jpg&f=1&nofb=1&ipt=efffcd0d82dbef08778fcc7bc1f0d48fe06e3a5ba4eff5b5a888e95b887e8930&ipo=images"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Tallinna Tehnika Ülikool</span>
        <span className="fpCity">Tallinn</span>
        <span className="fpPrice"></span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Suurepärane</span>
        </div>
      </div>
   
     
    </div>
  );
};

export default FeaturedProperties;

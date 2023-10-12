import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Uudistekiri</h1>
      <span className="mailDesc">Sign up</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Teie Email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList
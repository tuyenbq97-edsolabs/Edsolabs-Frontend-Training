// import logo from './logo.svg';
import "./fonts/SFPRODISPLAYBOLD.OTF";
import "./fonts/SFPRODISPLAYMEDIUM.OTF";
import "./fonts/SFPRODISPLAYREGULAR.OTF";
import logo from "./images/logo.png";
import faceId from "./images/faceID.svg";
import iconGg from "./images/icon_gg.svg";
import iconFb from "./images/icon_fb.svg";
import iconPs from "./images/icon_ps.svg";
import "./App.css";

const formHeader = (
  <div className="header">
    <img src={logo} alt="logo" />
  </div>
);

const formContent = (
  <div className="content">
    <section className="title">
      <h4>WELCOME BACK 😀</h4>
      <h1>Log In your Account</h1>
    </section>
    <form action>
      <div className="form-group">
        <span className="form-control-label">Email</span>
        <input
          type="email"
          className="form-control"
          placeholder="johnsondoe@nomail.com"
        />
      </div>
      <div className="form-group">
        <span className="form-control-label">Password</span>
        <input
          type="password"
          className="form-control"
          placeholder="***************"
        />
        <img src={iconPs} alt="icon-password" />
      </div>
      <button type="submit" className="btn-submit">
        <span className="btn-content">Continue</span>
      </button>
      <div className="login-with">
        <a href className="btn-login-with">
          <img src={iconGg} alt="logo-google" />
          <span className="btn-login-submit">Log In with Google</span>
        </a>
        <a href="facebook.com" className="btn-login-with">
          <img src={iconFb} alt="logo-facebook" />
          <span className="btn-login-submit">Log In with Facebook</span>
        </a>
      </div>
      <div className="seperator">
        <hr />
        <span className="seperator_text">Or Use</span>
        <hr />
      </div>
      <div className="faceID">
        <img src={faceId} alt="icon-faceID" />
        <span>FACE ID</span>
      </div>
    </form>
  </div>
);

const formFooter = (
  <div className="footer">
    <span className="btn-sign-up">New to Secula?</span>
    <a href>Sign up</a>
  </div>
);

function App() {
  return (
    <div className="body">
      <main>
        {formHeader};{formContent};{formFooter}
      </main>
    </div>
  );
}

export default App;

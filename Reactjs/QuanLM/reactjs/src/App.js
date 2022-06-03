import logo from './images/logo.png';
import symbol from './images/Symbol.svg';
import iconFacebook from './images/icons8-facebook.svg';
import iconGoogle from './images/icons8-google.svg';
import iconFaceId from './images/Frame988.png';

import './App.css';
import PropTypes from 'prop-types'

function App() {

    const header = (
      <div className="logo">
        <img src={logo} alt=""/>
      </div>
    )

    const container = (
      <div className="container">
            <section className="title">
              <h4>WELCOME BACK</h4>
              <h1>Log In your Account</h1>
           </section>
            <form action="">
                <div className="control-group">
                    <span className="form-control_title">Email</span>
                    <input type="email" className="form-control" placeholder=" johnsondoe@nomail.com"/>
                </div>
                <div className="control-group">
                    <span className="form-control_title">Password</span>
                    <input type="password" className="form-control" placeholder="**************"/>
                    <img src={symbol} alt=""></img>
                </div>
                <button type="submit" className="btn-submit">
                    <span className="btn-content">Continue</span>
                </button>
                <div className="other-submit">
                    <a href="" className="btn_other-submit">
                        <img src={iconGoogle} alt=""/>
                        <span>Log In with Google</span>
                    </a>
                    <a href="" className="btn_other-submit">
                        <img src={iconFacebook} alt=""/>
                        <span>Log In with Facebook</span>
                    </a>
                </div>
                <div className="seperator">
                    <span className="seperator-text">
                        Or use
                    </span>
                </div>
            </form>
        </div>
    )

    const faceId = (
      <div className="btn_face-id">
            <a href="">
                <img src={iconFaceId} alt=""/>
            </a>
        </div>
    )

    const footer = (
      <div className="create-user">
        <span>New to Secula? </span>
          <a href="">
            <b>
              Sign up
            </b>
          </a>
      </div>
    )  
    const TesingProp = ({title}) => {
      return (
        <header>
          <h1>{title}</h1>
        </header>
      );
    }
    TesingProp.propTypes = {
      title: PropTypes.string
    };

    TesingProp.defaultProps = {
      title: 'Hello',
    };

  return (
    <main>
      {header}
      {container}
      {faceId}
      {/* <TesingProp title={'Xin chao Quan'}/> */}
      {footer}
    </main>
  );
}

export default App;

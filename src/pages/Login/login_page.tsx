import { Link } from "react-router-dom";
import "./css/login-styles.css";
import bg_img from "./src/bg-img.svg";

const LoginPage = () => {
  const onLogin = (e: any) => {
    e.preventDefault();
  };
  return (
    <section id="wrapper" className="bg-login">
      <div className="manager-activity-container login-register login-sidebar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="login-box card card-login">
                <div className="card-body">
                  <div className="form-horizontal form-material">
                    <form
                      className="form-login"
                      name="basic"
                      onSubmit={onLogin}
                    >
                      <div className="form-group m-t-40">
                        <h5 className="title-login">Bienvenido</h5>
                      </div>
                      <div className="form-group m-t-40">
                        <label htmlFor="">Identificación</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group m-t-20">
                        <label htmlFor="">Contraseña</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group m-t-40">
                        <button
                          type="submit"
                          className="btn btn-inf btn-login text-center"
                        >
                          <Link to="/dashboard"> Continuar</Link>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="content-bg-img">
                <img src={bg_img} alt="" className="img-bg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

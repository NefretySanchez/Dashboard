import "./css/insues.css";
import icon_info from "./src/information.svg";
import icon_see_more from "./src/ver_mas.svg";
import icon_accordion from "./src/accordeon-icon.svg";
import { withPrincipal } from "../../componets/principal";
import Accordion from "react-bootstrap/Accordion";

const Insues = () => {
  const data = [
    {
      name: "Luisa Perez Ferrera",
      cargo: "Auxiliar",
      sede: "Foca Norte",
      paciente: "Ana Gutierrez Florez",
      date: "11/04/2022 10:30 a.m.",
      description: "El paciente se cayó de una silla y se partió del brazo",
    },
    {
      name: "Luisa Perez Ferrera",
      cargo: "Auxiliar",
      sede: "Foca Norte",
      paciente: "Ana Gutierrez Florez",
      date: "11/04/2022 10:30 a.m.",
      description: "El paciente se cayó de una silla y se partió del brazo",
    },
    {
      name: "Luisa Perez Ferrera",
      cargo: "Auxiliar",
      sede: "Foca Norte",
      paciente: "Ana Gutierrez Florez",
      date: "11/04/2022 10:30 a.m.",
      description: "El paciente se cayó de una silla y se partió del brazo",
    },
    {
      name: "Luisa Perez Ferrera",
      cargo: "Auxiliar",
      sede: "Foca Norte",
      paciente: "Ana Gutierrez Florez",
      date: "11/04/2022 10:30 a.m.",
      description: "El paciente se cayó de una silla y se partió del brazo",
    },
    {
      name: "Luisa Perez Ferrera",
      cargo: "Auxiliar",
      sede: "Foca Norte",
      paciente: "Ana Gutierrez Florez",
      date: "11/04/2022 10:30 a.m.",
      description: "El paciente se cayó de una silla y se partió del brazo",
    },
    {
      name: "Luisa Perez Ferrera",
      cargo: "Auxiliar",
      sede: "Foca Norte",
      paciente: "Ana Gutierrez Florez",
      date: "11/04/2022 10:30 a.m.",
      description: "El paciente se cayó de una silla y se partió del brazo",
    },
    {
      name: "Luisa Perez Ferrera",
      cargo: "Auxiliar",
      sede: "Foca Norte",
      paciente: "Ana Gutierrez Florez",
      date: "11/04/2022 10:30 a.m.",
      description: "El paciente se cayó de una silla y se partió del brazo",
    },
    {
      name: "Luisa Perez Ferrera",
      cargo: "Auxiliar",
      sede: "Foca Norte",
      paciente: "Ana Gutierrez Florez",
      date: "11/04/2022 10:30 a.m.",
      description: "El paciente se cayó de una silla y se partió del brazo",
    },
    {
      name: "Luisa Perez Ferrera",
      cargo: "Auxiliar",
      sede: "Foca Norte",
      paciente: "Ana Gutierrez Florez",
      date: "11/04/2022 10:30 a.m.",
      description: "El paciente se cayó de una silla y se partió del brazo",
    },
    {
      name: "Luisa Perez Ferrera",
      cargo: "Auxiliar",
      sede: "Foca Norte",
      paciente: "Ana Gutierrez Florez",
      date: "11/04/2022 10:30 a.m.",
      description: "El paciente se cayó de una silla y se partió del brazo",
    },
    {
      name: "Luisa Perez Ferrera",
      cargo: "Auxiliar",
      sede: "Foca Norte",
      paciente: "Ana Gutierrez Florez",
      date: "11/04/2022 10:30 a.m.",
      description: "El paciente se cayó de una silla y se partió del brazo",
    },
    {
      name: "Luisa Perez Ferrera",
      cargo: "Auxiliar",
      sede: "Foca Norte",
      paciente: "Ana Gutierrez Florez",
      date: "11/04/2022 10:30 a.m.",
      description: "El paciente se cayó de una silla y se partió del brazo",
    },
    {
      name: "Luisa Perez Ferrera",
      cargo: "Auxiliar",
      sede: "Foca Norte",
      paciente: "Ana Gutierrez Florez",
      date: "11/04/2022 10:30 a.m.",
      description: "El paciente se cayó de una silla y se partió del brazo",
    },
    {
      name: "Luisa Perez Ferrera",
      cargo: "Auxiliar",
      sede: "Foca Norte",
      paciente: "Ana Gutierrez Florez",
      date: "11/04/2022 10:30 a.m.",
      description: "El paciente se cayó de una silla y se partió del brazo",
    },
    {
      name: "Luisa Perez Ferrera",
      cargo: "Auxiliar",
      sede: "Foca Norte",
      paciente: "Ana Gutierrez Florez",
      date: "11/04/2022 10:30 a.m.",
      description: "El paciente se cayó de una silla y se partió del brazo",
    },
    {
      name: "Luisa Perez Ferrera",
      cargo: "Auxiliar",
      sede: "Foca Norte",
      paciente: "Ana Gutierrez Florez",
      date: "11/04/2022 10:30 a.m.",
      description: "El paciente se cayó de una silla y se partió del brazo",
    },
  ];

  return (
    <div className="manager-activity-container site-layout-content">
      <div className="container">
        <h2>Incidentes</h2>
        <Accordion className="acordion-insues" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <img src={icon_accordion} />
            </Accordion.Header>
            <Accordion.Body>
              <form className="form-login" name="basic">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Fecha inicio"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Fecha fin"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Estado"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="No. programación"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="ID paciente"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Cirujano"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Tracking"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Condicion"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Recuento"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="table-insues table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Nombre reportante</th>
                <th scope="col">Cargo</th>
                <th scope="col">Sede</th>
                <th scope="col">Paciente</th>
                <th scope="col">Fecha incidente</th>
                <th scope="col">Descripción incidente</th>
              </tr>
            </thead>
            <tbody>
              {data.map((insues, index) => {
                return (
                  <>
                    <tr>
                      <td>{insues.name}</td>
                      <td>{insues.cargo}</td>
                      <td>{insues.sede}</td>
                      <td>{insues.paciente}</td>
                      <td>{insues.date}</td>
                      <td>{insues.description}</td>
                      <td>
                        <img src={icon_info} alt="" />
                      </td>
                      <td>
                        <img src={icon_see_more} alt="" />
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default withPrincipal(Insues);

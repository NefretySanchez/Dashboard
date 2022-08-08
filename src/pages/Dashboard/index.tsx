import { Chart } from "react-google-charts";
import "./css/dashboard.css";
import { withPrincipal } from "../../componets/principal";

const DashBoard = () => {
  const data = [
    ["Riesgo", "Nivel"],
    ["Operacional", "Muy grave"],
    ["Actuarial ", "Importante"],
    ["Financiero", "Apreciable"],
    ["En salud", "Marginal"],
  ];

  const options = {
    chart: {
      title: "Nivel de riesgo",
    },
    bar: { groupWidth: "75%" },
    isStacked: true,
    colors: ["#CDCAE5", "#CDCAE5"],
    legend: { position: "none" },
    axes: {
      x: {
        0: { label: "" },
      },
    },
  };

  const data_insues = [
    ["Meses", "Insidentes"],
    ["Ene", 0],
    ["Feb ", 50],
    ["Mar", 100],
    ["Abr", 20],
    ["May", 50],
    ["Jun", 100],
    ["Jul", 20],
    ["Ago", 50],
    ["Sep", 70],
    ["Oct", 120],
    ["Nov", 70],
    ["Dic", 90],
  ];

  const options_insues = {
    chart: {
      title: "Incidentes y eventos adversos",
    },
    colors: ["#CDCAE5", "#CDCAE5"],
    legend: { position: "none" },
    axes: {
      x: {
        0: { label: "" },
      },
    },
  };

  const data_pie = [
    ["Pac Man", "Percentage"],
    ["", 67],
    ["", 33],
  ];

  const options_pie = {
    legend: "none",
    pieSliceText: "none",
    pieStartAngle: 135,
    tooltip: { trigger: "none" },
    slices: {
      0: { color: "#CDCAE5" },
      1: { color: "transparent" },
    },
  };

  return (
    <div className="manager-activity-container site-layout-content">
      <div className="container">
        <h2>Dashboard</h2>
        <div className="row">
          <div className="col-lg-3">
            <div className="card card-active">
              <div className="card-body">
                <div className="d-flex no-block">
                  <div className="align-self-center">
                    <h6 className="title-operation m-t-10">Operacional</h6>
                    <h6 className="subtitle-operation m-t-0">
                      Riesgos identificados
                    </h6>
                  </div>
                  <div className="m-l-20 align-self-center">
                    <span className="number-operation">35</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card card-inactive ">
              <div className="card-body">
                <div className="d-flex no-block">
                  <div className="align-self-center">
                    <h6 className="title-operation title-actuaril m-t-10">
                      Actuarial
                    </h6>
                    <h6 className="subtitle-operation m-t-0">
                      Riesgos identificados
                    </h6>
                  </div>
                  <div className="m-l-20 align-self-center">
                    <span className="number-operation">55</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card card-inactive ">
              <div className="card-body">
                <div className="d-flex no-block">
                  <div className="align-self-center">
                    <h6 className="title-finance title-operation m-t-10">
                      Financiero
                    </h6>
                    <h6 className="subtitle-operation m-t-0">
                      Riesgos identificados
                    </h6>
                  </div>
                  <div className="m-l-20 align-self-center">
                    <span className="number-operation">10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card card-inactive ">
              <div className="card-body">
                <div className="d-flex no-block">
                  <div className="align-self-center">
                    <h6 className="title-salud title-operation m-t-10">
                      En salud
                    </h6>
                    <h6 className="subtitle-operation m-t-0">
                      Riesgos identificados
                    </h6>
                  </div>
                  <div className="m-l-20 align-self-center">
                    <span className="number-operation">15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card card-inactive ">
              <div className="card-body">
                <Chart
                  chartType="Bar"
                  width="100%"
                  height="400px"
                  data={data}
                  options={options}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card card-inactive ">
              <div className="card-body">
                <Chart
                  chartType="Bar"
                  width="100%"
                  height="400px"
                  data={data_insues}
                  options={options_insues}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="card card-inactive card-rules">
              <div className="card-body">
                <h6 className="title-rules">Cumplimiento planes de acción</h6>
                <ul>
                  <li className="active">Operacional</li>
                  <li className="actuarial">Actuarial</li>
                  <li className="finance">Financiero</li>
                  <li className="salud">En salud</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-6">
                <div className="card card-inactive ">
                  <div className="card-body">
                    <div className="d-flex no-block">
                      <div className="align-self-center">
                        <h6 className="subtitle-chart-pie m-t-0">
                          Revisión de los informes
                        </h6>
                      </div>
                      <div className="align-self-center">
                        <Chart
                          chartType="PieChart"
                          data={data_pie}
                          options={options_pie}
                          width={"70%"}
                          height={"70px"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-inactive ">
                  <div className="card-body">
                    <div className="d-flex no-block">
                      <div className="align-self-center">
                        <h6 className="subtitle-chart-pie m-t-0">
                          Revisión de los informes
                        </h6>
                      </div>
                      <div className="align-self-center">
                        <Chart
                          chartType="PieChart"
                          data={data_pie}
                          options={options_pie}
                          width={"70%"}
                          height={"70px"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-inactive ">
                  <div className="card-body">
                    <div className="d-flex no-block">
                      <div className="align-self-center">
                        <h6 className="subtitle-chart-pie m-t-0">
                          Revisión de sillas de la Sala Azul
                        </h6>
                      </div>
                      <div className="align-self-center">
                        <Chart
                          chartType="PieChart"
                          data={data_pie}
                          options={options_pie}
                          width={"70%"}
                          height={"70px"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-inactive ">
                  <div className="card-body">
                    <div className="d-flex no-block">
                      <div className="align-self-center">
                        <h6 className="subtitle-chart-pie m-t-0">
                          Revisión de sillas de la Sala Azul
                        </h6>
                      </div>
                      <div className="align-self-center">
                        <Chart
                          chartType="PieChart"
                          data={data_pie}
                          options={options_pie}
                          width={"70%"}
                          height={"70px"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-inactive ">
                  <div className="card-body">
                    <div className="d-flex no-block">
                      <div className="align-self-center">
                        <h6 className="subtitle-chart-pie m-t-0">
                          Revisión de reportes de RRHH
                        </h6>
                      </div>
                      <div className="align-self-center">
                        <Chart
                          chartType="PieChart"
                          data={data_pie}
                          options={options_pie}
                          width={"70%"}
                          height={"70px"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-inactive ">
                  <div className="card-body">
                    <div className="d-flex no-block">
                      <div className="align-self-center">
                        <h6 className="subtitle-chart-pie m-t-0">
                          Revisión de reportes de RRHH
                        </h6>
                      </div>
                      <div className="align-self-center">
                        <Chart
                          chartType="PieChart"
                          data={data_pie}
                          options={options_pie}
                          width={"70%"}
                          height={"70px"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withPrincipal(DashBoard);

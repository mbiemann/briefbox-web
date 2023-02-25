import { Link } from "react-router-dom";

function BoxButtonGroup(box) {
  return (
    <div className="btn-group">

      <Link className={"btn btn-dark " + (box.public ? "text-danger" : "")} to={"/" + box.id}>
        <i className={"bi bi-door-" + (box.public ? "open-fill" : "closed")}></i> {box.public ? "Public" : "Private"} Box {box.alias}
      </Link>

      <button type="button" className="btn btn-dark dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span className="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
        <li>
          <Link className="dropdown-item" to={"/" + box.id}>
            <i className={"bi bi-door-" + (box.public ? "open-fill" : "closed")}></i> Show files
          </Link>
        </li>
        <li hidden={box.public}>
          <button className="dropdown-item text-danger">
            <i className="bi bi-door-open-fill"></i> Share
          </button>
        </li>
        <li hidden={!box.public}>
          <button className="dropdown-item">
            <i className="bi bi-door-closed"></i> Unshare
          </button>
        </li>
        <li><hr className="dropdown-divider" /></li>
        <li>
          <button className="dropdown-item">
            <i className="bi bi-x-square"></i> Delete
          </button>
        </li>
      </ul>

    </div>
  )
}

function BoxProgressBar(box) {
  return (
    <div className="progress bg-secondary" role="progressbar" aria-valuenow={box.progressPercent} aria-valuemin="0" aria-valuemax="100">
      <div className="progress-bar bg-info text-dark" style={{ width: box.progressPercent + "%" }}>{box.progressText}</div>
    </div>
  )
}

function BoxCard(props) {
  return (
    <div className="col">
      <div className="card text-bg-secondary text-nowrap mb-3">
        {props.children}
      </div>
    </div>
  );
}

export function BoxList() {

  const boxList = [
    { id: "b1633c31-e9aa-4727-b9b3-4032d9e84134", alias: "4032d9e84134", progressPercent: 25, progressText: "2 minutes left", public: false },
    { id: "5044a7d5-f5cc-4f9f-ba41-c027ed6fa56f", alias: "c027ed6fa56f", progressPercent: 30, progressText: "3 hours left", public: true },
    { id: "1e378f41-cdd0-43f1-a183-f90ed88ec205", alias: "f90ed88ec205", progressPercent: 40, progressText: "6 hours left", public: false },
    { id: "33329103-8422-413b-b1c4-d9c3855f3686", alias: "d9c3855f3686", progressPercent: 50, progressText: "12 hours left", public: false },
    { id: "623136e3-eb9c-4e03-80d8-61eef62b00cd", alias: "61eef62b00cd", progressPercent: 80, progressText: "3 days left", public: false },
    { id: "f18ba426-8615-40fd-8726-a7f248b8ed71", alias: "a7f248b8ed71", progressPercent: 99, progressText: "2 years left", public: true },
  ];

  const boxListDiv = boxList.map(
    box => (
      <BoxCard key={box.id}>
        {BoxProgressBar(box)}
        {BoxButtonGroup(box)}
      </BoxCard>
    )
  );

  boxListDiv.push(
    <BoxCard key="new">
      <button className="btn btn-primary">
        <i className="bi bi-plus-circle-fill"></i> New Box
      </button>
    </BoxCard>
  );

  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        {boxListDiv}
      </div>
    </div>
  );

}

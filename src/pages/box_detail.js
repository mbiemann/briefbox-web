import { useParams } from 'react-router';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

function File(file) {
  return (
    <li className="list-group-item bg-dark text-light d-flex align-items-center justify-content-between">
      <a href="#">
        <i className="bi bi-file-earmark-arrow-down"></i> {file.filename}
      </a>
      <div>
        <button className="btn btn-outline-light btn-sm me-1">Rename</button>
        <button className="btn btn-outline-light btn-sm">Delete</button>
      </div>
    </li>
  )
}

export function BoxDetailPage() {

  const params = useParams();
  const box_public = false;
  const box_progressPercent = 20;
  const box_progressText = "3 minutes left";


  console.log(params);

  return (
    <div>
      <Header>(back to home)</Header>

      <div className="card text-bg-secondary text-nowrap mb-3">

        <div className="progress bg-secondary" role="progressbar" aria-valuenow={box_progressPercent} aria-valuemin="0" aria-valuemax="100">
          <div className="progress-bar bg-info text-dark" style={{ width: box_progressPercent + "%" }}>{box_progressText}</div>
        </div>

        <div className="card text-bg-dark">

          <div className={"card-header " + (box_public ? "text-danger" : "")}>
            <i className={"bi bi-door-" + (box_public ? "open-fill" : "closed")}></i> {box_public ? "Public" : "Private"} Box {params.id}
          </div>

          <div className="card-body bg-secondary">
            <div className="card">
              <ul className="list-group list-group-flush">

                {File({filename: "file1.csv"})}
                {File({filename: "file2.pdf"})}
                {File({filename: "file3.txt"})}

                <li className="list-group-item text-bg-primary text-center">
                  <i className="bi bi-file-earmark-arrow-up-fill"></i> Upload File
                </li>
              </ul>
            </div>
          </div>

          <div className="card-footer d-flex justify-content-between">

            <button className="btn btn-outline-light me-3">
              Back to home
            </button>

            <button className="btn btn-outline-danger me-3">
              Share Box
            </button>
            
            <button className="btn btn-outline-danger">
              Delete Box
            </button>
            
          </div>

        </div>

      </div>

      <Footer />
    </div>
  )
}

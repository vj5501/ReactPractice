import Card from "react-bootstrap/Card";
import React from "react";

export default function App() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand text-center text-danger text-capitalize" href="#">
              Website Title 
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      <h1 className="text-center text-danger text-capitalize my-5">Course Buttons Are Here !!!</h1>
      <div className="text-center">
        <button type="button" class="btn btn-primary me-1">
          Primary
        </button>
        <button type="button" class="btn btn-secondary me-1">
          Secondary
        </button>
        <button type="button" class="btn btn-success me-1">
          Success
        </button>
        <button type="button" class="btn btn-danger me-1">
          Danger
        </button>
        <button type="button" class="btn btn-warning me-1">
          Warning
        </button>
        <button type="button" class="btn btn-info me-1">
          Info
        </button>
        <button type="button" class="btn btn-light me-1">
          Light
        </button>
        <button type="button" class="btn btn-dark me-1">
          Dark
        </button>

        <button type="button" class="btn btn-link me-1">
          Link
        </button>
      </div>

      <h1 className="text-center text-danger text-capitalize my-5">Team Cards Are Here !!!</h1>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Title style={{ color: "green" }}>
                  VJ Card Title
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  One Stop For all CS subjects
                </Card.Subtitle>
                <Card.Text>
                  Cisco provides a platform for all the students to study about
                  all the subjects in CS.
                </Card.Text>
                <Card.Link href="#"> For Students</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Title style={{ color: "green" }}>
                  VJ Card Title
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  One Stop For all CS subjects
                </Card.Subtitle>
                <Card.Text>
                  Cisco provides a platform for all the students to study about
                  all the subjects in CS.
                </Card.Text>
                <Card.Link href="#"> For Students</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Title style={{ color: "green" }}>
                  VJ Card Title
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  One Stop For all CS subjects
                </Card.Subtitle>
                <Card.Text>
                  Cisco provides a platform for all the students to study about
                  all the subjects in CS.
                </Card.Text>
                <Card.Link href="#"> For Students</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
        </div>
        <div className="container text-center">
        <div className="row">
          <div className="col">
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Title style={{ color: "green" }}>
                  VJ Card Title
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  One Stop For all CS subjects
                </Card.Subtitle>
                <Card.Text>
                  Cisco provides a platform for all the students to study about
                  all the subjects in CS.
                </Card.Text>
                <Card.Link href="#"> For Students</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Title style={{ color: "green" }}>
                  VJ Card Title
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  One Stop For all CS subjects
                </Card.Subtitle>
                <Card.Text>
                  Cisco provides a platform for all the students to study about
                  all the subjects in CS.
                </Card.Text>
                <Card.Link href="#"> For Students</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Title style={{ color: "green" }}>
                  VJ Card Title
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  One Stop For all CS subjects
                </Card.Subtitle>
                <Card.Text>
                  Cisco provides a platform for all the students to study about
                  all the subjects in CS.
                </Card.Text>
                <Card.Link href="#"> For Students</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
        </div>
        <div className="container text-center">
        <div className="row">
          <div className="col">
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Title style={{ color: "green" }}>
                  VJ Card Title
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  One Stop For all CS subjects
                </Card.Subtitle>
                <Card.Text>
                  Cisco provides a platform for all the students to study about
                  all the subjects in CS.
                </Card.Text>
                <Card.Link href="#"> For Students</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Title style={{ color: "green" }}>
                  VJ Card Title
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  One Stop For all CS subjects
                </Card.Subtitle>
                <Card.Text>
                  Cisco provides a platform for all the students to study about
                  all the subjects in CS.
                </Card.Text>
                <Card.Link href="#"> For Students</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Title style={{ color: "green" }}>
                  VJ Card Title
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  One Stop For all CS subjects
                </Card.Subtitle>
                <Card.Text>
                  Cisco provides a platform for all the students to study about
                  all the subjects in CS.
                </Card.Text>
                <Card.Link href="#"> For Students</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
        </div>
        <div className="container text-center">
        <div className="row">
          <div className="col">
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Title style={{ color: "green" }}>
                  VJ Card Title
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  One Stop For all CS subjects
                </Card.Subtitle>
                <Card.Text>
                  Cisco provides a platform for all the students to study about
                  all the subjects in CS.
                </Card.Text>
                <Card.Link href="#"> For Students</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Title style={{ color: "green" }}>
                  VJ Card Title
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  One Stop For all CS subjects
                </Card.Subtitle>
                <Card.Text>
                  Cisco provides a platform for all the students to study about
                  all the subjects in CS.
                </Card.Text>
                <Card.Link href="#"> For Students</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Title style={{ color: "green" }}>
                  VJ Card Title
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  One Stop For all CS subjects
                </Card.Subtitle>
                <Card.Text>
                  Cisco provides a platform for all the students to study about
                  all the subjects in CS.
                </Card.Text>
                <Card.Link href="#"> For Students</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

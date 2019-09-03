import React from "react";
import "./App.css";
import marked from "marked";
import ReactFCCTest from "react-fcctest";
import DOMPurify from "dompurify";
import { Container, Row, Col, Navbar, NavbarBrand, Input } from "reactstrap";
import INITIAL_MARKDOWN from "./markdown";

marked.setOptions({
  gfm: true,
  breaks: true
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: INITIAL_MARKDOWN
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ markdown: event.target.value });
  }

  createHTML() {
    return { __html: marked(DOMPurify.sanitize(this.state.markdown)) };
  }

  render() {
    return (
      <Container fluid>
        <ReactFCCTest />
        <Navbar dark color="dark">
          <NavbarBrand href="#'" className="mx-auto">
            Markdown Previewer
          </NavbarBrand>
        </Navbar>
        <Row>
          <Col lg="6">
            <div className="pane">
              <div className="pane-title">Input</div>
              <Input
                type="textarea"
                name="editor"
                id="editor"
                value={this.state.markdown}
                onChange={this.handleChange}
              ></Input>
            </div>
          </Col>
          <Col lg="6">
            <div className="pane">
              <div className="pane-title">Preview</div>
              <div
                id="preview"
                dangerouslySetInnerHTML={this.createHTML()}
              ></div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

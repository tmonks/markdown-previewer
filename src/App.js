import React from "react";
import "./App.css";
import marked from "marked";
import ReactFCCTest from "react-fcctest";
import DOMPurify from "dompurify"; // used to clean user input and prevent XSS attacks
import { Container, Row, Col, Navbar, NavbarBrand, Input } from "reactstrap";
import INITIAL_MARKDOWN from "./markdown"; // sample markdown initially loaded in editor

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

  render() {
    return (
      <Container fluid>
        <ReactFCCTest />
        <Header />
        <Row>
          <Col lg="6">
            <EditorPane
              markdown={this.state.markdown}
              handleChange={this.handleChange}
            />
          </Col>
          <Col lg="6">
            <PreviewPane markdown={this.state.markdown} />
          </Col>
        </Row>
      </Container>
    );
  }
}

function Header() {
  return (
    <Navbar dark color="dark">
      <NavbarBrand href="#'" className="mx-auto">
        Markdown Previewer
      </NavbarBrand>
    </Navbar>
  );
}

const EditorPane = props => {
  return (
    <div className="pane">
      <div className="pane-title">Input</div>
      <Input
        type="textarea"
        name="editor"
        id="editor"
        value={props.markdown}
        onChange={props.handleChange}
      ></Input>
    </div>
  );
};

class PreviewPane extends React.Component {
  constructor(props) {
    super(props);
    this.createHTML = this.createHTML.bind(this);
  }

  // takes markdown and provides sanitized HTML for dangerouslySetInnerHTML
  createHTML() {
    return { __html: marked(DOMPurify.sanitize(this.props.markdown)) };
  }

  render() {
    return (
      <div className="pane">
        <div className="pane-title">Preview</div>
        <div id="preview" dangerouslySetInnerHTML={this.createHTML()}></div>
      </div>
    );
  }
}

export default App;

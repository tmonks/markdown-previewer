import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import marked from "marked";
import ReactFCCTest from "react-fcctest";
import DOMPurify from "dompurify";
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Input
} from "reactstrap";

marked.setOptions({
  gfm: true,
  breaks: true
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: `# Heading 1
[freeCodeCamp](https://freecodecamp.org)

## Heading 2
Some \`inline code\`

\`\`\`
echo 'Hello World'
\`\`\` 

### Heading 3

Here is how you do a list:
- Item 1
- Item 2
- Item 3

### Block Quotes

> Here is how you do a block quote
> Block quote line 2

**This is how you bold text**

### Images
![freeCodeCamp Logo](https://d33wubrfki0l68.cloudfront.net/e66392bc2941ad564b6956321e778f29073cf585/4190b/img/glyph-alternative.svg "freeCodeCamp Logo")
`
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ markdown: event.target.value });
  }

  createHTML() {
    return {__html: marked(DOMPurify.sanitize(this.state.markdown))}
  }

  render() {
    return (
      <Container fluid>
        <ReactFCCTest />
        <Navbar light color="light">
          <NavbarBrand>Markdown Previewer</NavbarBrand>
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
              <div id="preview" dangerouslySetInnerHTML={this.createHTML()}></div>
            </div>
          </Col>
        </Row>
     </Container>
    );
  }
}

export default App;

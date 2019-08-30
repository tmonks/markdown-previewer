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
  Form,
  FormGroup,
  Label,
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
    document.getElementById("preview").innerHTML = marked(
      DOMPurify.sanitize(event.target.value)
    );
  }

  componentDidMount() {
    document.getElementById("preview").innerHTML = marked(this.state.markdown);
  }

  render() {
    return (
      <Container fluid>
        <ReactFCCTest />
        <Navbar color="light" light>
          <NavbarBrand>Markdown Previewer</NavbarBrand>
        </Navbar>
        <Row>
          <Col sm="6">
            <Form>
              <FormGroup>
                <Label for="editor">Markdown Input</Label>
                <Input
                  type="textarea"
                  name="editor"
                  id="editor"
                  value={this.state.markdown}
                  onChange={this.handleChange}
                ></Input>
              </FormGroup>
            </Form>
          </Col>
          <Col sm="6">
            <p>Formatted Output</p>
            <div id="preview"></div>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <p>Purified output for testing</p>
            <div style={{ border: "1px solid lightgray" }}>
              {DOMPurify.sanitize(this.state.markdown)}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

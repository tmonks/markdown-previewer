import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: "Enter Markdown here"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ markdown: event.target.value });
  }

  render() {
    return (
      <Container fluid>
        <Navbar color="light" light>
          <NavbarBrand>Markdown Previewer</NavbarBrand>
        </Navbar>
        <Row>
          <Col sm="6">
            <Form>
              <FormGroup>
                <Label for="input">Markdown Input</Label>
                <Input
                  type="textarea"
                  name="input"
                  id="input"
                  value={this.state.markdown}
                  onChange={this.handleChange}
                ></Input>
              </FormGroup>
            </Form>
          </Col>
          <Col sm="6">
            <p>HTML Output</p>
            <div
              id="output"
              style={{ border: "1px solid lightgray", borderRadius: 5 }}
            >
              {this.state.markdown}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

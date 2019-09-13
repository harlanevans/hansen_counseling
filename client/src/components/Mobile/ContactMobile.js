import React from "react";
import axios from 'axios'
import { SubTitleContact } from "./Styles";
import { Form, } from "semantic-ui-react";

class ContactMobile extends React.Component {
  state = {firstName: '', lastName: '', phone: '', email: '', questions: ''}

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const contact = { ...this.state }

    axios.post('/api/contact', contact)
      .then(res => {
        this.props.history.push("/#contact");
      })
    this.setState({ ...this.defaultValues })
  }

  render() {
    const { firstName, lastName, phone, email, questions } = this.state;
    return (
      <div className='contact-wrapper'>
        <SubTitleContact>Contact</SubTitleContact>

        {/* Either my own form orrr */}
        {/* --------------------- */}
        {/* <div className='form-opacity'>
        <form className='contact-column'>
          <input type='text' placeholder="First Name" className='input-style'/>
        </form>
        </div> */}

        {/* Semantic-form ? */}
            <Form>
              <Form.Input
                label="First Name"
                className="label"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
              />
              <Form.Input
                label="Last Name"
                className="label"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
              />
              <Form.Input
                label="Phone"
                type="phone"
                className="label"
                name="phone"
                value={phone}
                onChange={this.handleChange}
              />
              <Form.Input
                label="Email"
                type="email"
                className="label"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <Form.TextArea
                label="Questions?"
                className="label"
                name="questions"
                value={questions}
                onChange={this.handleChange}
              />
              <div className='button'>
              <button className='contact-button'>Lets Chat</button>
              </div>
            </Form>
      </div>
    );
  }
}

export default ContactMobile;

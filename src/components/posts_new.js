import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    )
  }

  render() {
    return (
      <form>
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          title="content"
          component={this.renderField}
        />
      </form>
    )
  }
}

function validate(values) {
  const errors = {}

  if(!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is atleast 3 characters!";
  }
  if(!values.catergories) {
    errors.title = "Enter some catergories!";
  }
  if(!values.content) {
      errors.title = "Enter some content please!";
  }
  return errors
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew)

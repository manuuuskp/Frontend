// formik is a library that makes handling the form much easier in React.
// Formik avoids creating state for each of the fields in the form.
// Formik handles the changes and maintains the value in its state which we can utilize to work around.
// We can also validations easy and throw errors easily.

// The most common components that Formik provides are :

<>
  <Formik />
  <Form />
  <Field />
  <ErrorMessage />
  **************************
  <Formik /> : Formik works on the principle of Render props pattern. It accepts
  a function as prop which returns a JSX. Formik can be initialised in couple of
  ways. we can have component attribute where we can mention the component. or
  we can add the component as a child directly.
  <Formik component={ContactForm} />
  {
    (ContactForm = (props) => {
      <Form>
        <Field></Field>
        ...
      </Form>;
    })
  }
  or
  <Formik>
    {() => {
      return (
        <Form>
          <Field></Field>
          ...
        </Form>
      );
    }}
  </Formik>
  Also there are quite a few attributes which we can mention in the Formik
  component. initialValues, validationSchema or validate, onSubmit :{" "}
  {(values, action) => {}}
  validateOnBlur - default true, validateOnChange - default true,
  validateOnMount - default false
  <br></br>
  Also this provides many props : values, errors, touched, handleSubmit,
  handleChange, handleBlur, handleReset - using this to reset the form,
  isSubmitting - when the submit button is clicked, dirty - if value is not same
  as initial values, isValid - is form valid without any errors, validateForm -
  manually triggering validation if required,
  ***************************************************
  <Field /> - Field compoent contains the following props that can be set.
  onChange, onBlur, value, name, type, validate - which needs function to check
  and returns error string.
  <br></br>as - default is input but we can load any component like select or
  any custom react component.
  <br></br>or component - attribute same as "as"
  ****************************************************
  <Form></Form> - just a wrapper that has two props. onSubmit, onReset NOTE -
  onSubmit method is present in Formik as well which executes the onSubmit
  method. onSubmit in Form calls the handleSubmit method which is received as
  props. ****************************************************
  <ErrorMessage /> - can be created manually but this triggers automatically
  when touched - true and errors - true.
  {/* <ErrorMessage name="fieldname" component={(errmsg) => <div>{errmsg}</div>>}/>  */}
  *********************************************************** In addition to the
  above - Yup library is the one which is used to create Validation Schema.
  import * as Yup from "yup". Yup.object().shape(
  {
    // "fieldname" : Yup.string().required("Required message"),
    // "fieldname2": Yup.number().min(2, "minimum value is 2"),
    // ...
  }
  )
</>;

// example below :

{
  const MyForm = () => {
    const validationSchema = Yup.object().shape({
      username: Yup.string().required("Required"),
      password: Yup.string()
        .required("Required")
        .min(7, "Password should be minimum of 7 characters"),
    });
    return (
      <div>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            alert(JSON.stringify(values));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <div>
                  <Field
                    name="username"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></Field>
                  {errors.username && touched.username ? (
                    <div style={{ color: "red" }}>{errors.username}</div>
                  ) : null}
                </div>
                <div>
                  <Field
                    name="password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></Field>
                  <ErrorMessage name="password" />
                </div>
                <button type="submit">Submit</button>
              </Form>
            );
          }}
        </Formik>
      </div>
    );
  };
}

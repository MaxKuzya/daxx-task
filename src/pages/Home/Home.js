import React, { useCallback, useState } from "react";

import { Section, SectionTitle } from "../../components/Section";
import { Container } from "../../components/Container";
import { PageTitle } from "../../components/UI";
import { Form, FormSubmit, InputField } from "../../components/Form";

import { useAuth } from "../../utils/useAuth";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

function HomeComponent() {
  const { login, user } = useAuth();
  const [errors, setErrors] = useState(null);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const { username: usernameEl, password: passwordEl } = e.target.elements;

      login(usernameEl.value, passwordEl.value).then(
        () => {
          setErrors("");
        },
        ({ message }) => {
          setErrors(message);
        }
      );
    },
    [login]
  );

  return (
    <>
      <PageTitle visuallyHidden>Login page</PageTitle>

      <Section>
        <Container>
          <SectionTitle>Welcome! Please log in</SectionTitle>

          <Form onSubmit={handleSubmit}>
            <InputField
              errors={errors}
              name="username"
              label="Username"
              type="text"
            />
            <InputField name="password" label="Password" type="password" />
            <p>
              <Link to="/reset">Reset your password</Link>
            </p>
            <FormSubmit>Submit</FormSubmit>
          </Form>
        </Container>
      </Section>

      {user && <Redirect to="/dashboard" />}
    </>
  );
}

export default HomeComponent;

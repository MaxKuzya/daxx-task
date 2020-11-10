import React, { useCallback, useState } from "react";
import { Redirect } from "react-router";

import { Form, FormSubmit, InputField } from "../../components/Form";
import { Section, SectionTitle } from "../../components/Section";
import { Container } from "../../components/Container";
import { PageTitle } from "../../components/UI";

import { useAuth } from "../../utils/useAuth";
import { useMessage } from "../../utils/useMessage";

function ResetComponent() {
  const { resetPassword } = useAuth();
  const [errors, setErrors] = useState(null);
  const [username, setUsername] = useState(false);
  const { addMessage } = useMessage();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const { username: usernameEl } = e.target.elements;

      resetPassword(usernameEl.value).then(
        () => {
          addMessage("Your password was successfully reset");
          setUsername(usernameEl.value);
        },
        ({ message }) => {
          setErrors(message);
        }
      );
    },
    [resetPassword, resetPassword]
  );

  return (
    <>
      <PageTitle visuallyHidden>Login page</PageTitle>

      <Section>
        <Container>
          <SectionTitle>Type your username to reset password</SectionTitle>

          <Form onSubmit={handleSubmit}>
            <InputField
              errors={errors}
              name="username"
              label="Username"
              type="text"
            />

            <FormSubmit>Submit</FormSubmit>
          </Form>
        </Container>
      </Section>

      {username && <Redirect to={`/activation/${username}`} />}
    </>
  );
}

export default ResetComponent;

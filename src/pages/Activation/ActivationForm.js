import { useCallback, useState } from "react";
import { Redirect } from "react-router";

import { Form, FormSubmit, InputField } from "../../components/Form";
import { Container } from "../../components/Container";
import { Section, SectionTitle } from "../../components/Section";
import { PageTitle } from "../../components/UI";

import { useAuth } from "../../utils/useAuth";
import { useMessage } from "../../utils/useMessage";

import PasswordService from "../../services/PasswordService";

function ActivationComponent({ username }) {
  const { signup } = useAuth();
  const [errors, setErrors] = useState(null);
  const [isActivated, setActivated] = useState(false);

  const { addMessage } = useMessage();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const {
        password: passwordEl,
        ["password-confirm"]: confirmEl,
      } = e.target.elements;

      const validationErrors = PasswordService.validate(
        passwordEl.value,
        confirmEl.value
      );

      if (validationErrors.length) {
        setErrors(validationErrors);
      } else {
        setErrors(null);

        signup(username, passwordEl.value);
        addMessage(`User ${username} signed up successfully!`);
        setActivated(true);
      }
    },
    [setErrors, signup, username, addMessage]
  );

  return (
    <>
      <PageTitle visuallyHidden>Activation page</PageTitle>

      <Section>
        <Container>
          <SectionTitle>
            Please set password for your account, {username}
          </SectionTitle>

          <Form onSubmit={handleSubmit}>
            <InputField
              errors={errors}
              name="password"
              label="Create your password"
              type="password"
            />
            <InputField
              name="password-confirm"
              label="Confirm your password"
              type="password"
            />
            <FormSubmit>Submit</FormSubmit>
          </Form>
        </Container>
      </Section>

      {isActivated && <Redirect to="/login" />}
    </>
  );
}

export default ActivationComponent;

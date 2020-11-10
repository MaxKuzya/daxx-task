import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, FormSubmit, InputField } from '../../components/Form';
import { Container } from '../../components/Container';
import { Section, SectionTitle } from '../../components/Section';
import { PageTitle } from '../../components/UI';
import PasswordService from '../../services/PasswordService';
import LoginDataService from '../../services/LoginDataService';

function ActivationComponent() {
  const { username } = useParams();
  const [errors, setErrors] = useState(null);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const { password: passwordEl, ['password-confirm']: confirmEl } = e.target.elements;

    const validationErrors = PasswordService.validate(passwordEl.value, confirmEl.value);

    if (validationErrors.length) {
      setErrors(validationErrors);
    } else {
      setErrors(null);

      LoginDataService.createUser(username, passwordEl.value);
    }

  }, [setErrors])

  return (
    <>
      <PageTitle visuallyHidden>Activation page</PageTitle>

      <Section>
        <Container>
          <SectionTitle>
            Please set password for your account, {username}
          </SectionTitle>

          <Form onSubmit={handleSubmit}>
            <InputField errors={errors} name="password" label="Create your password" type='password'/>
            <InputField name="password-confirm" label="Confirm your password" type='password'/>
            <FormSubmit>Submit</FormSubmit>
          </Form>
        </Container>
      </Section>
    </>
  );
}

export default ActivationComponent;

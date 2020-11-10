import React from "react";
import { PageTitle } from "../../components/UI";
import { Container } from "../../components/Container";

import { useAuth } from "../../utils/useAuth";
import { Section, SectionTitle } from "../../components/Section";

function DashboardComponent() {
  const { user } = useAuth();

  return (
    <Container>
      <PageTitle>Dashboard</PageTitle>

      <Section>
        <SectionTitle>Welcome, {user.username}</SectionTitle>
      </Section>
    </Container>
  );
}

export default React.memo(DashboardComponent);

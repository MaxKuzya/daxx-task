import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import { MainLayout } from "./layout";
import { LoadingFallback } from "./components/LoadingFallback";
import { ErrorFallback } from "./components/ErrorFallback";
import { PrivateRoute } from "./components/PrivateRoute";
import { MessageDialog } from "./components/MessageDialog";
// Providers
import { ThemeProvider } from "styled-components";
// Utils
import { styledTheme } from "./constants/styled-theme";
import { ProvideAuth } from "./utils/useAuth";
import { ProvideMessage } from "./utils/useMessageProvider";
import { Redirect } from 'react-router';
// Pages
const HomePage = React.lazy(() => import("./pages/Home"));
const ActivationPage = React.lazy(() => import("./pages/Activation"));
const DashboardPage = React.lazy(() => import("./pages/Dashboard"));
const ResetPage = React.lazy(() => import("./pages/Reset"));

/**
 * App component
 */
export function App() {
  return (
    <ProvideAuth>
      <ProvideMessage>
        <Router>
          <ThemeProvider theme={styledTheme}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingFallback />}>
                <MainLayout>
                  <Switch>
                    <Route path="/activation/:username">
                      <ActivationPage />
                    </Route>

                    <PrivateRoute path="/dashboard">
                      <DashboardPage />
                    </PrivateRoute>

                    <Route path="/login" exact>
                      <HomePage />
                    </Route>

                    <Route path="/reset" exact>
                      <ResetPage />
                    </Route>

                    <Redirect to='/login'/>
                  </Switch>
                  <MessageDialog />
                </MainLayout>
              </Suspense>
            </ErrorBoundary>
          </ThemeProvider>
        </Router>
      </ProvideMessage>
    </ProvideAuth>
  );
}

import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components
import { MainLayout } from './layout';
import { LoadingFallback } from './components/LoadingFallback';
import { ErrorFallback } from './components/ErrorFallback';
import { PrivateRoute } from './components/PrivateRoute';
// Providers
import { ThemeProvider } from 'styled-components';
// Utils
import { styledTheme } from './constants/styled-theme';
import { ProvideAuth } from './utils/useAuth';
// Pages
const HomePage = React.lazy(() => import('./pages/Home'));
const ActivationPage = React.lazy(() => import('./pages/Activation'));
const DashboardPage = React.lazy(() => import('./pages/Dashboard'));

/**
 * App component
 */
export function App() {
  return (
    <ProvideAuth>
      <Router>
        <ThemeProvider theme={styledTheme}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<LoadingFallback />}>
              <MainLayout>
                <Switch>

                  <Route path="/activation/:username">
                    <ActivationPage />
                  </Route>

                  <PrivateRoute path='/dashboard'>
                    <DashboardPage />
                  </PrivateRoute>

                  <Route path="/" exact>
                    <HomePage />
                  </Route>

                </Switch>
              </MainLayout>
            </Suspense>
          </ErrorBoundary>
        </ThemeProvider>
      </Router>
    </ProvideAuth>
  );
}

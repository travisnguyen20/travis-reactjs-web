/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components/macro';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'styles/global-styles';

import { LeftMenuBar } from './components/LeftMenuBar';
import { HomePage } from './pages/HomePage/Loadable';
import { UserPage } from './pages/UserPage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';

import 'bootstrap/dist/css/bootstrap.min.css';
import theme from '../styles/theme';

export function App() {
  const { i18n } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>

        <LeftMenuBar />
        <PageContent className="min-vh-100">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/users" component={UserPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </PageContent>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

const PageContent = styled.div`
  margin-left: 300px;
`;

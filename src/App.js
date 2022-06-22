import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import storeFactory from "./state/store";
import customHistory from './common/history';
import PageSearch from './components/pages/search/PageSearch';
import messages from "./www/config/messages.json";
import './App.scss';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import Header from './components/layout/header/Header';

export const LOCALE = "es";

export const AppWrapper = () => {
  const store = storeFactory();

  return (
    <IntlProvider locale={LOCALE} messages={messages}>
      <Provider store={store}>
        <App store={store} />
      </Provider>
    </IntlProvider>
  )
}


function App() {
  return (
    <div className="app">
      <ConnectedRouter history={customHistory}>
        <Header />
        <Switch>
          <Route
            exact
            path={"/"}
          >
            <PageSearch />
          </Route>
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default App;

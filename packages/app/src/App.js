import logo from './logo.svg';
import './App.css';
import { LocalComponent } from './LocalComponent';
import { MyComponent } from 'foobar-components';
import { I18nextProvider, useTranslation } from 'react-i18next';



function App() {
  const { i18n } = useTranslation();
  console.log('i18n is %o', i18n);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <LocalComponent />

        {/* in 12.0.0 with or without this wrapping provider the translation keys are found and the value is shown 
         * in 12.1.1+ with or without this wrapping provider the translation keys are NOT found and the key is shown
         */}
        <I18nextProvider i18n={i18n}>
          <MyComponent />
        </I18nextProvider>

        <MyComponent i18n={i18n}/>
        
      </header>
    </div>
  );
}

export default App;

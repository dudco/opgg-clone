import React from 'react';
import ChampionsList from './pages/ChampionsList';
import {createGlobalStyle} from "styled-components";
import Header from './components/Header';

const MyGlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

function App() {
  return (
    <>
      <MyGlobalStyle />
      <Header headerHeight={100} />
      <ChampionsList />
    </>
  );
}

export default App;

// 1. git clone https://github.com/dudco/opgg-1clone.git
// 2. cd opgg-clone
// 3. npm install
// 4. npm run start

// styled components
// 1. npm install --save styled-components
// 2. npm install --save @types/styled-components


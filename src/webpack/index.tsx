import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from "./components/app"

document.addEventListener('DOMContentLoaded', e => {
  const el = document.querySelector("#main")
  ReactDOM.render(<App />, el)
});
import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import App1 from '../build/app1/index.js';
import App2 from '../build/app2/index.js';

import html from './html';

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static('./build'));

app.get('/app1/*', (req, res) => {
  const app = renderToString(React.createElement(App1));
  console.log('Chegou aqui app', app);
  res.send(
    html({
      body: app,
      srcPath: 'app1/index.js'
    })
  );
});

app.get('/app2/*', (req, res) => {
  const app = renderToString(React.createElement(App2));
  console.log('Chegou aqui app2', app);
  res.send(
    html({
      body: app,
      srcPath: 'app2/index.js'
    })
  );
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});
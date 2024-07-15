// server.js
import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider, FilledContext } from 'react-helmet-async';
import App from './src/App';

const PORT = 3000;
const app = express();

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', (req, res) => {
  const helmetContext = {};

  const app = (
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  );

  const appString = renderToString(app);
  const { helmet } = helmetContext;

  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Internal Server Error');
    }

    return res.send(
      data
        .replace('<div id="root"></div>', `<div id="root">${appString}</div>`)
        .replace('<title></title>', helmet.title.toString())
        .replace('<meta name="description" content="">', helmet.meta.toString())
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

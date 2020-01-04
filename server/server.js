import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App.jsx';

const PORT = 8000;

const app = express();

app.use('^/$', (req, res, next) => {
  fs.readFile(path.resolve('./dist/index.html'), 'utf-8', (err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      return res.status(500).send('some error happen');
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`,
      ),
    );
  });
});

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});

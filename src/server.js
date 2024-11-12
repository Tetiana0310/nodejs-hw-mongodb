import express from "express";
import cors from "cors";
import pino from 'pino-http';

const setupServer = () => {
    const app = express();

    app.use(cors());

    app.use(
  pino({
    transport: {
      target: 'pino-pretty',
    },
  }),
    );

    app.use('*', (req, res, next) => {
  res.status(404).json({
    message: 'Not found',
  });
});

};

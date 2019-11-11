import { Application, Request, Response } from 'express';
import express = require('express');

export const app: Application = express();

app.use(express.static('./www'));
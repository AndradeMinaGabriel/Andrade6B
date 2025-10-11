import ejemplo from './ejemplo.routes.js';
import { Router } from 'express';
const routesindex = Router();

routesindex.use('/ejemplo', ejemplo);

export default routesindex;
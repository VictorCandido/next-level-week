import express from 'express';
import knex from './database/connection';

import PointsController from './Controllers/PointsController';
import ItemController from './Controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemController = new ItemController();

routes.get('/items', itemController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;
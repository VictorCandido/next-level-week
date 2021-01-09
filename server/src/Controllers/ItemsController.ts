import {Request, Response} from 'express';

import knex from '../database/connection';

class ItemController {
    async index(req: Request, res: Response) {
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                name: item.title,
                image: 'http://192.168.0.101:3000/uploads/' + item.image
            }
        });
    
        res.json(serializedItems)
    }
}

export default ItemController;
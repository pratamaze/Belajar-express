
import type { Request, Response } from 'express';
    import { itemSchema, type Item } from '../models/items';

    let items: Item[] = [];
    let nextId = 1;

    export const getItems = (req: Request, res: Response) => {
      res.json(items);
    };

    export const createItem = (req: Request, res: Response) => {
      try {
        const newItem: Item = { id: nextId++, ...itemSchema.parse(req.body) };
        items.push(newItem);
        res.status(201).json(newItem);
      } catch (error) {
         res.status(400).json(error);
      }
    };

   export const getItem = (req: Request, res: Response) => {
    
        // parshing int if assignable to type string 
        // const id = parseInt(req.params.id);

        // parshing string to int if not assignable to type 'string'
        let id = req.params.id as string;
        const id_new = parseInt(id)

        // reference 
        // https://stackoverflow.com/questions/54496398/typescript-type-string-undefined-is-not-assignable-to-type-string
        
        const item = items.find(item => item.id === id_new);
        if (item) {
            res.json(item);
        } else {
            res.status(404).send();
        }
    };

    export const updateItem = (req: Request, res: Response) => {
        // const id = parseInt(req.params.id);
        let id_pass = req.params.id as string;
        const id = parseInt(id_pass)

         try {
            const updatedItem: Item = itemSchema.parse(req.body);
            const index = items.findIndex(item => item.id === id);

            if (index !== -1) {
                items[index] = { id, ...updatedItem };
                res.json(items[index]);
            } else {
                res.status(404).send();
            }
        } catch (error) {
            res.status(400).json(error);
        }
    };

    export const deleteItem = (req: Request, res: Response) => {
        let id = req.params.id as string;
        const id_new = parseInt(id)

        const index = items.findIndex(item => item.id === id_new);
        if (index !== -1) {
            items.splice(index, 1);
            res.status(204).send();
        } else {
            res.status(404).send();
        }
    };
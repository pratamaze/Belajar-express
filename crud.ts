import express, {type Application} from 'express'
import itemRoutes from '../belajar-express/src/routes/items';

class App{
    public app:Application;
    constructor(){
        this.app = express()
    }
}
const app = new App().app
const port = 8080

app.use(express.json());
app.use('/items', itemRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
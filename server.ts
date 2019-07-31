import * as express from 'express'
import { appFiles } from './appFiles'
class Server{
    private app;
    constructor(){
        this.app = express();
        this.bootstrap();
        this.app.listen(9000)
    }
    bootstrap(){
        this.setupRoutes();
    }
    setupRoutes(){
        this.app.use(check)
    }

}
const check = (req, res, next) => {
    if (req.url in appFiles){
        res.send(appFiles[req.url])
    }
    else{
        next(`${req.url} does not exist`)
    }
}
const app1 = new Server();
app1.bootstrap();
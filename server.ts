import * as express from 'express'
import { appFiles } from './appFiles'
class Server{
    private app;
    constructor(){
        this.app = express();
        this.bootstrap();
        this.app.listen(3000)
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
        console.log(req.url)
        next('not found')
    }
}
const app1 = new Server();
app1.bootstrap();
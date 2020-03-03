import { Router as createRouter, Request, Response } from 'express'
import { Router } from "express-serve-static-core";
const Promise = require('bluebird');

class SessionIssueBackend {
  private router: Router;

  constructor(private pluginContext: any) {

    let router: Router = createRouter();

    router.get('/inc', this.doIncrement.bind(this));
    router.get('/', this.handleCounterRequest.bind(this));

    this.router = router;
  }

  private doIncrement(request: Request, response: Response) {
    const { counter } = (request as any).session;
    (request as any).session.counter = counter != null ? counter + 1 : 0;
    response.status(200).send();
  }

  private handleCounterRequest(request: Request, response: Response) {
    const { counter } = (request as any).session;
    response.status(200).json({ counter });
  }


  public getRouter(): Router {
    return this.router;
  }

}

exports.sessionIssueBackendRouter = function (context): Router {
  return new Promise(function (resolve) {
    let dataservice = new SessionIssueBackend(context);
    resolve(dataservice.getRouter());
  });
}
class BaseController {
    static _instance = null;
    
    static getInstance() {
        if(this._instance === null) {
            this._instance = new this();
        }
        return this._instance;
    }
}

module.exports = BaseController;
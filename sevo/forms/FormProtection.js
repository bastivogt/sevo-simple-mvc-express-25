const crypto = require("crypto");

class FormProtection {
    constructor(name = "protection") {
        this._token = null;
        this._name = name;
    }

    protect() {
        this._token = crypto.randomUUID();
        console.log(this._token);
        console.warn("TOKEN:", this._token);
        return `<input type="hidden" name="${this._name}" value="${this._token}" />`;
    }

    check(token) {
        console.log(this._token);
        console.log(token);
        return this._token === token;
    }

    getName() {
        return this._name;
    }
}

module.exports = FormProtection;

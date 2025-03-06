class FormData {
    constructor(params) {
        this.update(params);
    }

    update(params) {
        this._params = params;
        this._fields = {}
        this._createFields();
        this.validateOfEmpty();
    }

    getField(name) {
        return this._fields[name];
    }

    getFields() {
        return this._fields;
    }

    validateOfEmpty() {
        for(const prop in this._fields) {
            if(this._fields[prop].value === "" || this._fields[prop].value === null) {
                this._fields[prop].error = true;
            }
        }
    }

    isValid() {
        for(const prop in this._fields) {
            if(this._fields[prop].error) {
                return false;
            }
        }
        return true;
    }

    _createFields() {
        for(const prop in this._params) {
            this._fields[prop] = {value: this._params[prop], error: false}
        }
    }


}


module.exports = FormData;
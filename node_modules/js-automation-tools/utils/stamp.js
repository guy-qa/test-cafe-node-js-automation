'use strict';

// #############################################################################

let stamp = {
    _timestamp: '',
    resetTimestamp: function () {
        if (this._timestamp.length > 0) {
            // If timestamp already exists, increment it by 1
            this._timestamp = (parseInt(this._timestamp, 10) + 1).toString();
        } else {
            // Initiate timestamp
            this._timestamp = new Date().getTime().toString();
        }

        process.env.TIMESTAMP = this._timestamp;

        return process.env.TIMESTAMP;
    },
    getTimestamp: function () {
        process.env.TIMESTAMP = this._timestamp.length > 0 ?
            this._timestamp :
            this.resetTimestamp();

        return process.env.TIMESTAMP;
    }
};

module.exports = stamp;

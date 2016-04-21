/**
 * Created by xavier on 4/18/16.
 */
class Model {
    constructor() {
        if (new.target === Model) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }

    }
}
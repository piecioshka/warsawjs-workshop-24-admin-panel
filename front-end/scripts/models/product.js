const NAME_LENGTH = 20;
const DESCRIPTION_LENGTH = 30;

export class Product {

    name = null;
    description = null;

    constructor(options) {
        Object.keys(options).forEach((property) => {
            this[property] = options[property];
        });
    }

    getName() {
        return this.name.slice(0, NAME_LENGTH);
    }

    getDescription() {
        const description = this.description || '';
        return description.slice(0, DESCRIPTION_LENGTH);
    }

}

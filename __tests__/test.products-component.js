import { Product } from '../front-end/scripts/models/product';
import { ProductsComponent as C } from '../front-end/scripts/components/products-component';
import { JSDOM } from 'jsdom';

beforeAll(() => {
    global.window = new JSDOM().window;
    global.document = window.document;
});

afterAll(() => {
    global.window = null;
    global.document = null;
});

test('component', () => {
    expect(typeof C).toBe('function');
});

test('render', () => {
    const c = new C();
    expect(typeof c.render).toBe('function');
});

test('DOM', () => {
    const $place = document.createElement('div');
    const c = new C($place);
    c.render();
    expect($place.children.length).toBe(0);
});

test('i can see products', () => {
    function productFactory(name) {
        return new Product({ name });
    }

    const products = [
        productFactory('one'),
        productFactory('two'),
        productFactory('thrrre')
    ];
    const $place = document.createElement('div');
    const c = new C($place, products);
    c.render();
    expect($place.children[0].textContent.trim()).toBe('one');
    expect($place.children[1].textContent.trim()).toBe('two');
    expect($place.children[2].textContent.trim()).toBe('thrrre');
});

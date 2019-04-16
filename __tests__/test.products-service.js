import ps from '../front-end/scripts/services/products-service';

const nock = require('nock');
const HTTP_STATUS = require('http-status');

function fakeProduct() {
    return {
        id: 'fake-id',
        name: 'fake-name',
        description: 'fake-description',
        image: 'fake-image'
    };
}

test('is exist', () => {
    expect(typeof ps).toBe('object');
});

test('fetching', async () => {
    nock('http://localhost:3000')
        .get('/products')
        .reply(HTTP_STATUS.OK, [fakeProduct()]);

    const products = await ps.fetchList();
    expect(Array.isArray(products)).toBeTruthy();
    expect(products.length).toBeGreaterThan(0);
});

const request = require('supertest');
const app = require('./app')
describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
})

describe('Test the root path (supertest)', () => {
    test('It should respond to the GET method', () => {
        return request(app).get('/api').expect(200);
    });
})
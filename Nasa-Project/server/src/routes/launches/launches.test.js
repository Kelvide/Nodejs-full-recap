const request = require('supertest')
const app = require('../../app');
const { mongoConnect } = require('../../services/mongo');

describe('Launches API', () => {
    beforeAll(async () => {
        await mongoConnect()
    });

    describe('Test GET /launches', () => {
        test('It should respond with 200 success', async () => {
            const response = await request(app)
                .get('/v1/launches')
                .expect('content-type', /json/)
                .expect(200)
        });
    });

    describe('Test POST /launch', () => {
        const completeLaunchData = {
            mission: "USS Enterprise",
            rocket: "NCC 1701-p",
            target: "Kepler-62 f",
            launchDate: "January 4, 2028"
        }
        const launctDataWithoutDate = {
            mission: "USS Enterprise",
            rocket: "NCC 1701-p",
            target: "Kepler-62 f",
        }
        const launctDataWithInvalidDate = {
            mission: "USS Enterprise",
            rocket: "NCC 1701-p",
            target: "Kepler-62 f",
            launchDate: "root"
        }
        test('It should respond with 201 created', async () => {
            const response = await request(app)
                .post('/v1/launches')
                .send(completeLaunchData)
                .expect('content-type', /json/)
                .expect(201)

            const requestDate = new Date(completeLaunchData.launchDate).valueOf();
            const responseDate = new Date(response.body.launchDate).valueOf();
            expect(responseDate).toBe(requestDate)

            expect(response.body).toMatchObject(launctDataWithoutDate)
        });

        test('It should catch missing required properties', async () => {
            const response = await request(app)
                .post('/v1/launches')
                .send(launctDataWithoutDate)
                .expect('content-type', /json/)
                .expect(400)
            expect(response.body).toStrictEqual({
                error: 'Missing required launch property',
            })
        })
        test('It should catch invalid dates', async () => {
            const response = await request(app)
                .post('/v1/launches')
                .send(launctDataWithInvalidDate)
                .expect('content-type', /json/)
                .expect(400)
            expect(response.body).toStrictEqual({
                error: 'Invalid launch date',
            })
        })
    })
});
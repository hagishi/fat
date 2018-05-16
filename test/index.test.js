const supertest = require('supertest');
const fastify = require('../app');

test('fo', async () => {
  await fastify.ready();
  const res = await supertest(fastify.server)
    .get('/')
    .expect(200);
});

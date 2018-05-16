const fastify = require('../app')();

test('fo', async () => {
  let res = await fastify.inject({ method: 'GET', url: '/' });
  res.statusCode;
  JSON.parse(res.payload);
});

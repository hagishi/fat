const Fastify = require('fastify');

const app = Fastify();

app.get('/', function(request, reply) {
  reply.send({ hello: 'world' });
});

module.exports = app;

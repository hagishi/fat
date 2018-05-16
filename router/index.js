async function routes(fastify, opitons) {
  fastify.post('/', async (request, reply) => {
    return request.query;
  });
}

module.exports = routes;

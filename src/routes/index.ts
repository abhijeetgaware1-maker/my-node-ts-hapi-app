// ...existing code...
import Hapi from '@hapi/hapi';

export default function initRoutes(server: Hapi.Server): void {
  server.route({
    method: 'GET',
    path: '/',
    handler: (_request, h) => {
      return 'Hello World';
    }
  });
}
// ...existing code...
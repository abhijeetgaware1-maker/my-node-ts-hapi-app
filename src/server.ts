// ...existing code...
import Hapi from '@hapi/hapi';
import routes from './routes';

const init = async () => {
    const server = Hapi.server({
        port: Number(process.env.PORT) || 3000,
        host: '0.0.0.0'
    });

    // './routes' exports a function that registers routes on the server,
    // so call it with the server instance instead of passing it to server.route.
    routes(server);

    await server.start();
    console.log('Hello, world!');
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});

init();
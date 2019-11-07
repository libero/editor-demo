import * as server from './server';
const port = 8080;

const serverHandle = server.app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});

process.on('SIGINT', () => {
    serverHandle.close(() => {
        process.exit(0);
    });
})

process.on('SIGTERM', () => {
    serverHandle.close(() => {
        process.exit(0);
    });
})
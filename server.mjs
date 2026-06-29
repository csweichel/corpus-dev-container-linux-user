import "./scripts/check-user.mjs";

import http from "node:http";

const host = process.env.HOST ?? "0.0.0.0";
const port = Number(process.env.PORT ?? "3000");

const server = http.createServer((_request, response) => {
  response.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
  response.end("ok\n");
});

server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
});

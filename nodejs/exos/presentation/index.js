const http = require("http");
const fs = require("fs");
const url = require("url");
const { log } = require("console");
const os = require("os");

const server = http.createServer(async (request, response) => {
  const date = new Date();
  const pageVisited = request.url;

  if (pageVisited !== "/favicon.ico") {
    console.log(os.cpus());
    console.log(os.freemem());
    console.log(os.totalmem());
    console.log(os.hostname());

    fs.appendFile("log.txt", `${pageVisited} - ${date}\n`, (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  }

  if (request.url === "/hello") {
    response.write("Hello");
    response.write(" World");
    response.end();
  }
  if (request.url === "/bye") {
    response.write("Bye");
    response.end();
  }

  if (request.url === "/file") {
    handleFile(response, fs);
  }

  if (request.url.startsWith("/customFile")) {
    const parsedUrl = url.parse(request.url, true);
    const fileName = parsedUrl.query.name;

    fs.readFile(fileName + ".txt", "utf8", (err, data) => {
      if (err) {
        response.write("Le fichier n'existe pas");
        response.end();
        return;
      }
      response.write("Fichier : \n");
      response.write(data);
      response.write("\nFin du fichier");
      response.end();
    });
  }
});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});

function handleFile(response, fs) {
  fs.readFile("fichier.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    response.write("Fichier : \n");
    response.write(data);
    response.write("\nFin du fichier");
    response.end();
  });
}

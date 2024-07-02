SSE Demo with NestJS
This repository contains a simple proof of concept demonstrating Server-Sent Events (SSE) using NestJS for the server and a basic client for displaying the events. SSE is a standard allowing servers to push real-time updates to the client over a single HTTP connection, making it suitable for use cases like live notifications, stock price updates, or chat applications.

Project Structure
NestJS Server (sse-demo)
The server is built using NestJS, a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.

main.ts: Entry point of the NestJS application, where CORS is enabled.
sse.controller.ts: Contains the implementation of SSE, sending periodic messages to the client.
app.module.ts: Main application module that includes the SSE controller.
Client (client directory)
The client is a simple HTML file that connects to the NestJS server using SSE and displays the received messages.

index.html: A web page that establishes an SSE connection to the server and displays incoming messages.
Getting Started
Prerequisites
Node.js (version 14 or higher)
npm (Node Package Manager)
Setting Up the Server
Install NestJS CLI:

bash
Copy code
npm i -g @nestjs/cli
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/sse-demo.git
cd sse-demo/sse-demo
Install dependencies:

bash
Copy code
npm install
Run the server:

bash
Copy code
npm run start
The server will start on http://localhost:3000.

Setting Up the Client
Navigate to the client directory:

bash
Copy code
cd ../client
Serve the HTML file:

You can use a simple HTTP server to serve the HTML file. One easy way is to use the http-server package:

bash
Copy code
npm install -g http-server
http-server
The client will be available on http://localhost:8080 (or the port shown in the terminal).

Testing the SSE
Open your web browser and navigate to http://localhost:8080.
You should see messages being pushed from the NestJS server to the client in real-time.
Conclusion
This project demonstrates the basic implementation of Server-Sent Events with NestJS and a simple client. It can be used as a foundation for building more complex real-time applications.

# My Node.js TypeScript Hapi App

This is a simple Node.js application built using TypeScript and the Hapi framework. The application serves a "Hello World" response.

## Project Structure

```
my-node-ts-hapi-app
├── .node-version
├── Dockerfile
├── src
│   ├── server.ts
│   ├── routes
│   │   └── index.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version specified in `.node-version`)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-node-ts-hapi-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To run the application in development mode, use:
```
npm run dev
```

To build and start the application, use:
```
npm run build
npm start
```

### Docker

To build and run the application using Docker, use the following commands:

1. Build the Docker image:
   ```
   docker build -t my-node-ts-hapi-app .
   ```

2. Run the Docker container:
   ```
   docker run -p 3000:3000 my-node-ts-hapi-app
   ```

### Accessing the Application

Once the application is running, you can access it at `http://localhost:3000`. You should see a "Hello World" message.

## License

This project is licensed under the MIT License.
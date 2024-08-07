# StreamChat

StreamChat is a Next.js application featuring a simple chat interface that streams markdown responses. The project is built with TypeScript and Tailwind CSS, providing a real-time chat experience similar to ChatGPT.

## Features

- **Next.js**: Framework for server-side rendering and building static web applications.
- **TypeScript**: Strongly typed programming language that builds on JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Chat Interface**: Simple and intuitive chat interface with an input box.
- **Markdown Streaming**: Displays markdown content as a stream, simulating real-time response generation.

## Live Demo

You can view the live application deployed on Vercel at: [StreamChat Live Demo](https://jahid-stream-chat.vercel.app)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.22.x or later)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/jahid-git/stream-chat.git
    ```

2. Navigate to the project directory:

    ```bash
    cd chat-stream
    ```

3. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

1. Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

   This will start the Next.js development server, and you should be able to access the application at [http://localhost:3000](http://localhost:3000).

2. Build and start for production:

    ```bash
    npm run build
    npm start
    # or
    yarn build
    yarn start
    ```

### Configuring the Chat Component

Ensure your chat component is set up to fetch markdown content from your API endpoint or mock service. 

With these steps, you should have a running local instance of your StreamChat application with markdown streaming. If you need any more details or run into issues, feel free to open an issue or contact support!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

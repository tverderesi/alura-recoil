# Alura Recoil Refactoring Project

This project is part of Week 23 of [Boticário's Desenvolve program](https://desenvolve.grupoboticario.com.br/) and focuses on refactoring an existing application using Recoil, a state management library for React. The goal is to improve the maintainability and scalability of the application by adopting Recoil's predictable state management approach.

## Project Overview

The project involves refactoring an application that manages events. The initial implementation used traditional React state management techniques, but it was decided to adopt Recoil to leverage its benefits such as centralized state management, easy composition of stateful components, and efficient re-rendering.

The refactoring process involved the following steps:

1. **Dependency Setup**: Install Recoil and related dependencies to enable state management in the project.

2. **Identifying State**: Analyze the existing codebase to identify the application's state requirements and determine which components rely on that state.

3. **State Atomization**: Introduce Recoil atoms to represent individual pieces of application state. This allows components to subscribe to and modify specific portions of the state.

4. **Selector Definition**: Create Recoil selectors to derive computed values or filter the application state based on specific criteria.

5. **Component Refactoring**: Update the existing components to use Recoil hooks (`useRecoilValue`, `useSetRecoilState`, etc.) to access and update the application state.

6. **Testing and Validation**: Test the refactored components and validate that the application behaves as expected with the new Recoil state management.

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository: `git clone https://github.com/<your-username>/<your-repo-name>.git`
2. Navigate to the project directory: `cd <your-repo-name>`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. upload your project to github
6. Create a .env file why the value REACT_APP_JSON_SERVER
7. the url can be create using this [tutorial](https://my-json-server.typicode.com/)
8. Open the application in your browser: `http://localhost:3000`

## Learn More

To learn more about Recoil and its usage, refer to the official Recoil documentation:

- [Recoil Documentation](https://recoiljs.org/)

## Credits

This project is a collaboration between Alura and the Boticários Desenvolve program. It demonstrates the practical application of Recoil in a real-world scenario and highlights the benefits of using Recoil for state management in React applications.

## License

This project is licensed under the [MIT License](LICENSE).

# Food for everyone
Food for everyone is an React Native application that replicates an food delivery scenario, based on this[ figma design](https://www.figma.com/file/gwXkrYSIAkK5iOl8z6HAJR/Food-delivery-app-Ui-kit-(Community)?node-id=0%3A1 " figma design"). This project and challenge was proposed by **Ifeira** for an evaluation exam.

## Required tools to run the project
- NodeJS
- Yarn
-React Native CLI (you will be able to run the commands using `npx react-native [command]`) or installing the CLI globally `npm install -g react-native-cli`

## Running the app
1. After cloning the project, install all project dependencies running yarn in root directory:
`yarn`

2. The next step is link the assets and fonts in the two kind of devices that the application will be builded (IOS and Android) using the command:
`react-native link`

3. Start the metro server by the command:
`react-native start` or `react-native start --reset-cache`

4. Build and executve the application running the command:
`react-native run-android` or `react-native run-ios`

### Basic informations

- For building components, we used **styled-components**  for better replication of design and make the dynamism easier.
- For the commits and code versioning was used [**git-commit-msg-linter**](https://github.com/legend80s/commit-msg-linter "**git-commit-msg-linter**"), to lint the future commit messages to check if it agree with an standart convention
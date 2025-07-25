# Instructions to run the app

1. Setup your environment

   Follow the instructions from the [React Native Docs](https://reactnative.dev/docs/set-up-your-environment) to setup your local environment to run the app on your local IOS and Android simulator.

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the metro bundler

   ```bash
   npx expo start
   ```

4. To run the app on an IOS simulator:

   ```
   press "I" on the metro bundler
   ```

   or

   ```
   npm run ios
   ```

5. To run the app on an Android simulator:

   ```
   press "A" on the metro bundler
   ```

   or

   ```
   npm run android
   ```

# 3rd Party libraries used

- [Axios](https://axios-http.com/) for http requests
- [TanStack Query](https://tanstack.com/query/latest) to easily manage server state

# Unit test

To run unit test run the following command:

```
npm run test
```

# E2E test

e2e test are ran with [Maestro](https://maestro.dev/).

## Installing Maestro

To install Maestro you will need to install the Maestro Cli

To install Maestro cli run the following command:

```
curl -fsSL "https://get.maestro.mobile.dev" | bash
```

or

```
brew tap mobile-dev-inc/tap
brew install maestro
```

## Running e2e test

1. Run the app with following commmand:

   ```
   npm run ios
   ```

2. In a separate window in your terminal run the following command:

   ```
   npm run e2e
   ```

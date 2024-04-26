module.exports = {
    transform: {
        // Transform JavaScript and JSX files with babel-jest
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    moduleNameMapper: {
        // If you use CSS modules or similar, you can define how to handle them
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
    testEnvironment: "jest-environment-jsdom",
};

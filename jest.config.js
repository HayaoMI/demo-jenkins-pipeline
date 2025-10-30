// jest.config.js
module.exports = {
    testEnvironment: 'node',
    reporters: [
        'default',
        ['jest-junit', { outputDirectory: './', outputName: 'test-results.xml' }] // Changement ici: './' au lieu de './reports'
    ]
};

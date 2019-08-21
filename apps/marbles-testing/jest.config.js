module.exports = {
  name: 'marbles-testing',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/marbles-testing',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

module.exports = {
  name: 'shop-layout',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shop/layout',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

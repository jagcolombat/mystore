module.exports = {
  name: 'shop-share-dto',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/shop/share/dto',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

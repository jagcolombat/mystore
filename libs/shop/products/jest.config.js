module.exports = {
  name: 'shop-products',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shop/products',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

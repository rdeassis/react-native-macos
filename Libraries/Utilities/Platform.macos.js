/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

// TODO(macOS ISS#2323203) Copied from Platform.ios.js

'use strict';

const NativeModules = require('../BatchedBridge/NativeModules');

export type PlatformSelectSpec<D, I> = {
  default?: D,
  macos?: I,
};

const Platform = {
  __constants: null,
  OS: 'macos',
  get Version() {
    const constants = NativeModules.PlatformConstants;
    return constants && constants.osVersion;
  },
  get constants(): {|
    isTesting: boolean,
    osVersion: string,
    reactNativeVersion: {|
      major: number,
      minor: number,
      patch: number,
      prerelease: ?number,
    |},
  |} {
    if (this.__constants == null) {
      this.__constants = NativeModules.PlatformConstants;
    }
    return this.__constants;
  },

  get isTesting(): boolean {
    if (__DEV__) {
      return this.constants.isTesting;
    }
    return false;
  },
  select: <D, I>(spec: PlatformSelectSpec<D, I>): D | I =>
    'macos' in spec ? spec.macos : spec.default,
};

module.exports = Platform;

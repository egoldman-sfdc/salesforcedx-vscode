/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export interface LocalizationProvider {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  localize(label: string, ...args: any[]): string;
}

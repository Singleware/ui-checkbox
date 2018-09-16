/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Checkbox element interface.
 */
export interface Element extends HTMLDivElement {
  /**
   * Checkbox name.
   */
  name: string;
  /**
   * Checkbox group.
   */
  group: string;
  /**
   * Checkbox value.
   */
  value: any;
  /**
   * Checked state.
   */
  checked: boolean;
  /**
   * Default checkbox value.
   */
  readonly defaultValue: any;
  /**
   * Default checked state.
   */
  readonly defaultChecked: boolean;
  /**
   * Required state.
   */
  required: boolean;
  /**
   * Read-only state.
   */
  readOnly: boolean;
  /**
   * Disabled state.
   */
  disabled: boolean;
}

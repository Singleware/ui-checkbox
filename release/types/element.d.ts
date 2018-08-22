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
   * Checkbox value.
   */
  value: any;
  /**
   * Checked state.
   */
  checked: boolean;
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

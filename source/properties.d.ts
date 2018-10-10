/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Checkbox properties interface.
 */
export interface Properties {
  /**
   * Checkbox classes.
   */
  class?: string;
  /**
   * Checkbox slot.
   */
  slot?: string;
  /**
   * Checkbox name.
   */
  name?: string;
  /**
   * Checkbox group.
   */
  group?: string;
  /**
   * Checkbox value.
   */
  value?: any;
  /**
   * Determines whether the checkbox is checked or not.
   */
  checked?: boolean;
  /**
   * Determines whether the checkbox is required or not.
   */
  required?: boolean;
  /**
   * Determines whether the checkbox is read-only or not.
   */
  readOnly?: boolean;
  /**
   * Determines whether the checkbox is disabled or not.
   */
  disabled?: boolean;
  /**
   * Determines whether the checkbox must return status or value.
   */
  statusOnly?: boolean;
  /**
   * Checkbox children.
   */
  children?: {};
}

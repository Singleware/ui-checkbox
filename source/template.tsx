/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as DOM from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

import { Properties } from './properties';
import { Element } from './element';
import { States } from './states';

/**
 * Checkbox template class.
 */
@Class.Describe()
export class Template extends Control.Component<Properties> {
  /**
   * Checkbox states.
   */
  @Class.Private()
  private states = {
    name: ''
  } as States;

  /**
   * Input element.
   */
  @Class.Private()
  private input = <input type="checkbox" /> as HTMLInputElement;

  /**
   * Mark element.
   */
  @Class.Private()
  private markSlot = <slot name="mark" class="mark" /> as HTMLSlotElement;

  /**
   * Checkbox element.
   */
  @Class.Private()
  private checkbox = (
    <label class="checkbox">
      {this.input}
      {this.markSlot}
    </label>
  ) as HTMLLabelElement;

  /**
   * Checkbox styles.
   */
  @Class.Private()
  private styles = (
    <style>
      {`:host {
  display: flex;
  flex-direction: row;
}
:host > .checkbox {
  flex-grow: 0;
  flex-shrink: 0;
  user-select: none;
}
:host > .checkbox > input {
  position: absolute;
  opacity: 0;
}
:host > .checkbox > .mark::slotted(*) {
  position: relative;
  border: 0.0625rem solid black;
  height: 1.25rem;
  width: 1.25rem;
}
:host > .checkbox > .mark::slotted(*):after {
  position: absolute;
  content: '';
  opacity: 0;
  left: 0.4rem;
  top: 0.08125rem;
  width: 0.3375rem;
  height: 0.8rem;
  border-style: solid;
  border-width: 0 0.15rem 0.15rem 0;
  border-color: inherit;
  transform: rotate(45deg);
}
:host > .checkbox > input:checked ~ .mark::slotted(*):after {
  opacity: 1;
}`}
    </style>
  ) as HTMLStyleElement;

  /**
   * Checkbox skeleton.
   */
  @Class.Private()
  private skeleton = (
    <div slot={this.properties.slot} class={this.properties.class}>
      {this.children}
    </div>
  ) as Element;

  /**
   * Updates the specified property state.
   * @param property Property name.
   * @param state Property state.
   */
  @Class.Private()
  private updatePropertyState(property: string, state: boolean): void {
    if (state) {
      this.skeleton.dataset[property] = 'on';
    } else {
      delete this.skeleton.dataset[property];
    }
  }

  /**
   * Click event handler.
   * @param event Event information.
   */
  @Class.Private()
  private clickHandler(event: Event): void {
    if (this.input.readOnly) {
      event.preventDefault();
    } else if (this.group) {
      const last = Template.groups[this.group];
      if (last !== this.skeleton) {
        if (last) {
          last.checked = false;
          Template.notifyChanges(last);
        }
        this.updatePropertyState('checked', (this.input.checked = true));
        Template.groups[this.group] = this.skeleton;
        Template.notifyChanges(this.skeleton);
      }
    } else {
      this.updatePropertyState('checked', this.input.checked);
      Template.notifyChanges(this.skeleton);
    }
  }

  /**
   * Bind event handlers to update the custom element.
   */
  @Class.Private()
  private bindHandlers(): void {
    this.input.addEventListener('click', this.clickHandler.bind(this));
  }

  /**
   * Bind exposed properties to the custom element.
   */
  @Class.Private()
  private bindProperties(): void {
    this.bindComponentProperties(this.skeleton, [
      'name',
      'group',
      'value',
      'checked',
      'defaultValue',
      'defaultChecked',
      'required',
      'readOnly',
      'disabled',
      'statusOnly',
      'reset'
    ]);
  }

  /**
   * Assign all element properties.
   */
  @Class.Private()
  private assignProperties(): void {
    this.assignComponentProperties(this.properties, [
      'name',
      'group',
      'value',
      'checked',
      'required',
      'readOnly',
      'disabled',
      'statusOnly'
    ]);
  }

  /**
   * Default constructor.
   * @param properties Checkbox properties.
   * @param children Checkbox children.
   */
  constructor(properties?: Properties, children?: any[]) {
    super(properties, children);
    DOM.append(this.skeleton.attachShadow({ mode: 'closed' }), this.styles, this.checkbox);
    this.bindHandlers();
    this.bindProperties();
    this.assignProperties();
  }

  /**
   * Get checkbox name.
   */
  @Class.Public()
  public get name(): string {
    return this.states.name;
  }

  /**
   * Set checkbox name.
   */
  public set name(name: string) {
    this.states.name = name;
  }

  /**
   * Get checkbox group.
   */
  @Class.Public()
  public get group(): string {
    return this.input.name;
  }

  /**
   * Set checkbox group.
   */
  public set group(name: string) {
    this.input.name = name;
  }

  /**
   * Get checkbox value.
   */
  @Class.Public()
  public get value(): any {
    if (this.states.statusOnly) {
      return this.checked;
    }
    return this.checked ? this.input.value : void 0;
  }

  /**
   * Set checkbox value.
   */
  public set value(value: any) {
    if (this.states.statusOnly) {
      this.checked = Boolean(value);
    } else {
      this.input.value = value;
    }
  }

  /**
   * Get checked state.
   */
  @Class.Public()
  public get checked(): boolean {
    return this.input.checked;
  }

  /**
   * Set checked state.
   */
  public set checked(state: boolean) {
    if (this.group) {
      const last = Template.groups[this.group];
      if (state) {
        if (last && last !== this.skeleton) {
          last.checked = false;
        }
        Template.groups[this.group] = this.skeleton;
      } else if (last === this.skeleton) {
        Template.groups[this.group] = void 0;
      }
    }
    this.updatePropertyState('checked', (this.input.checked = state));
  }

  /**
   * Get default checkbox value.
   */
  @Class.Public()
  public get defaultValue(): any {
    return this.properties.value || 'on';
  }

  /**
   * Get default checked state.
   */
  @Class.Public()
  public get defaultChecked(): boolean {
    return this.properties.checked || false;
  }

  /**
   * Get required state.
   */
  @Class.Public()
  public get required(): boolean {
    return this.input.required;
  }

  /**
   * Set required state.
   */
  public set required(state: boolean) {
    this.input.required = state;
    this.updatePropertyState('required', state);
  }

  /**
   * Get read-only state.
   */
  @Class.Public()
  public get readOnly(): boolean {
    return this.input.readOnly;
  }

  /**
   * Set read-only state.
   */
  public set readOnly(state: boolean) {
    this.input.readOnly = state;
    this.updatePropertyState('readonly', state);
  }

  /**
   * Get disabled state.
   */
  @Class.Public()
  public get disabled(): boolean {
    return this.input.disabled;
  }

  /**
   * Set disabled state.
   */
  public set disabled(state: boolean) {
    this.input.disabled = state;
    this.updatePropertyState('disabled', state);
  }

  /**
   * Get status-only state.
   */
  @Class.Public()
  public get statusOnly(): boolean {
    return this.states.statusOnly;
  }

  /**
   * Set status-only state.
   */
  public set statusOnly(state: boolean) {
    this.states.statusOnly = state;
  }

  /**
   * Checkbox element.
   */
  @Class.Public()
  public get element(): Element {
    return this.skeleton;
  }

  /**
   * Reset the checkbox to its initial value and state.
   */
  @Class.Public()
  public reset(): void {
    this.value = this.defaultValue;
    this.checked = this.defaultChecked;
  }

  /**
   * Checkbox groups.
   */
  @Class.Private()
  private static groups = {} as any;

  /**
   * Notify element changes.
   */
  @Class.Private()
  private static notifyChanges(element: Element): void {
    if (document.body.contains(element)) {
      element.dispatchEvent(new Event('change', { bubbles: true, cancelable: false }));
    }
  }
}

/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as DOM from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

import { Properties } from './properties';
import { Element } from './element';

/**
 * Checkbox template class.
 */
@Class.Describe()
export class Template extends Control.Component<Properties> {
  /**
   * Input element.
   */
  @Class.Private()
  private input: HTMLInputElement = <input type="checkbox" /> as HTMLInputElement;

  /**
   * Mark element.
   */
  @Class.Private()
  private markSlot: HTMLSlotElement = <slot name="mark" class="mark" /> as HTMLSlotElement;

  /**
   * Checkbox element.
   */
  @Class.Private()
  private checkbox: HTMLLabelElement = (
    <label class="checkbox">
      {this.input}
      {this.markSlot}
    </label>
  ) as HTMLLabelElement;

  /**
   * Checkbox styles.
   */
  @Class.Private()
  private styles: HTMLStyleElement = (
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
  private skeleton: Element = (
    <div slot={this.properties.slot} class={this.properties.class}>
      {this.children}
    </div>
  ) as Element;

  /**
   * Checkbox elements.
   */
  @Class.Private()
  private elements: ShadowRoot = DOM.append(this.skeleton.attachShadow({ mode: 'closed' }), this.styles, this.checkbox) as ShadowRoot;

  /**
   * Enable or disable the specified property in the mark elements.
   * @param property Property name.
   * @param state Determines whether the property must be enabled or disabled.
   */
  @Class.Private()
  private setMarkProperty(property: string, state: boolean): void {
    const list = this.markSlot.assignedNodes() as HTMLElement[];
    for (const mark of list) {
      if (state) {
        mark.dataset[property] = 'on';
      } else {
        delete mark.dataset[property];
      }
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
    }
  }

  /**
   * Bind event handlers to update the custom element.
   */
  @Class.Private()
  private bindHandlers(): void {
    this.skeleton.addEventListener('click', Class.bindCallback(this.clickHandler), true);
  }

  /**
   * Bind exposed properties to the custom element.
   */
  @Class.Private()
  private bindProperties(): void {
    Object.defineProperties(this.skeleton, {
      name: super.bindDescriptor(Template.prototype, 'name'),
      value: super.bindDescriptor(Template.prototype, 'value'),
      checked: super.bindDescriptor(Template.prototype, 'checked'),
      required: super.bindDescriptor(Template.prototype, 'required'),
      readOnly: super.bindDescriptor(Template.prototype, 'readOnly'),
      disabled: super.bindDescriptor(Template.prototype, 'disabled')
    });
  }

  /**
   * Assign all element properties.
   */
  @Class.Private()
  private assignProperties(): void {
    Control.assignProperties(this, this.properties, ['name', 'value', 'checked', 'required', 'readOnly', 'disabled']);
  }

  /**
   * Default constructor.
   * @param properties Checkbox properties.
   * @param children Checkbox children.
   */
  constructor(properties?: Properties, children?: any[]) {
    super(properties, children);
    this.bindHandlers();
    this.bindProperties();
    this.assignProperties();
  }

  /**
   * Get checkbox name.
   */
  @Class.Public()
  public get name(): string {
    return this.input.name;
  }

  /**
   * Set checkbox name.
   */
  public set name(name: string) {
    this.input.name = name;
  }

  /**
   * Get checkbox value.
   */
  @Class.Public()
  public get value(): any {
    return this.checked ? this.input.value : void 0;
  }

  /**
   * Set checkbox value.
   */
  public set value(value: any) {
    this.input.value = value;
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
    this.input.checked = state;
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
    this.setMarkProperty('readonly', state);
    this.input.readOnly = state;
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
    this.setMarkProperty('disabled', state);
    this.input.disabled = state;
  }

  /**
   * Checkbox element.
   */
  @Class.Public()
  public get element(): Element {
    return this.skeleton;
  }
}

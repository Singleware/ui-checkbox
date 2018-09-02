"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Template_1;
"use strict";
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const DOM = require("@singleware/jsx");
const Control = require("@singleware/ui-control");
/**
 * Checkbox template class.
 */
let Template = Template_1 = class Template extends Control.Component {
    /**
     * Default constructor.
     * @param properties Checkbox properties.
     * @param children Checkbox children.
     */
    constructor(properties, children) {
        super(properties, children);
        /**
         * Checkbox states.
         */
        this.states = {
            name: ''
        };
        /**
         * Input element.
         */
        this.input = DOM.create("input", { type: "checkbox" });
        /**
         * Mark element.
         */
        this.markSlot = DOM.create("slot", { name: "mark", class: "mark" });
        /**
         * Checkbox element.
         */
        this.checkbox = (DOM.create("label", { class: "checkbox" },
            this.input,
            this.markSlot));
        /**
         * Checkbox styles.
         */
        this.styles = (DOM.create("style", null, `:host {
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
}`));
        /**
         * Checkbox skeleton.
         */
        this.skeleton = (DOM.create("div", { slot: this.properties.slot, class: this.properties.class }, this.children));
        /**
         * Checkbox elements.
         */
        this.elements = DOM.append(this.skeleton.attachShadow({ mode: 'closed' }), this.styles, this.checkbox);
        this.bindHandlers();
        this.bindProperties();
        this.assignProperties();
    }
    /**
     * Enable or disable the specified property in this elements.
     * @param property Property name.
     * @param state Determines whether the property must be enabled or disabled.
     */
    setDataProperty(property, state) {
        if (state) {
            this.skeleton.dataset[property] = 'on';
        }
        else {
            delete this.skeleton.dataset[property];
        }
    }
    /**
     * Toggles this check by the last toggled check.
     * @param force Determines whether the same check must be toggled.
     * @returns Returns the last check or undefined when there is no last check.
     */
    toggleCheck(force) {
        const last = Template_1.groups[this.group];
        if (last === this.skeleton) {
            if (force) {
                Template_1.groups[this.group] = void 0;
            }
        }
        else {
            if (last) {
                last.checked = false;
            }
            Template_1.groups[this.group] = this.skeleton;
        }
        return last;
    }
    /**
     * Click event handler.
     * @param event Event information.
     */
    clickHandler(event) {
        if (this.input.readOnly) {
            event.preventDefault();
        }
        else {
            if (this.group) {
                const last = this.toggleCheck(!this.checked);
                if (last && last !== this.skeleton) {
                    Template_1.notifyChanges(last);
                }
            }
            this.setDataProperty('checked', this.input.checked);
            Template_1.notifyChanges(this.skeleton);
        }
    }
    /**
     * Bind event handlers to update the custom element.
     */
    bindHandlers() {
        this.input.addEventListener('click', this.clickHandler.bind(this));
    }
    /**
     * Bind exposed properties to the custom element.
     */
    bindProperties() {
        Object.defineProperties(this.skeleton, {
            name: super.bindDescriptor(this, Template_1.prototype, 'name'),
            group: super.bindDescriptor(this, Template_1.prototype, 'group'),
            value: super.bindDescriptor(this, Template_1.prototype, 'value'),
            checked: super.bindDescriptor(this, Template_1.prototype, 'checked'),
            required: super.bindDescriptor(this, Template_1.prototype, 'required'),
            readOnly: super.bindDescriptor(this, Template_1.prototype, 'readOnly'),
            disabled: super.bindDescriptor(this, Template_1.prototype, 'disabled')
        });
    }
    /**
     * Assign all element properties.
     */
    assignProperties() {
        Control.assignProperties(this, this.properties, ['name', 'group', 'value', 'checked', 'required', 'readOnly', 'disabled']);
    }
    /**
     * Get checkbox name.
     */
    get name() {
        return this.states.name;
    }
    /**
     * Set checkbox name.
     */
    set name(name) {
        this.states.name = name;
    }
    /**
     * Get checkbox group.
     */
    get group() {
        return this.input.name;
    }
    /**
     * Set checkbox group.
     */
    set group(name) {
        this.input.name = name;
    }
    /**
     * Get checkbox value.
     */
    get value() {
        return this.checked ? this.input.value : void 0;
    }
    /**
     * Set checkbox value.
     */
    set value(value) {
        this.input.value = value;
    }
    /**
     * Get checked state.
     */
    get checked() {
        return this.input.checked;
    }
    /**
     * Set checked state.
     */
    set checked(state) {
        this.setDataProperty('checked', state);
        this.input.checked = state;
        if (this.group) {
            this.toggleCheck(!state);
        }
    }
    /**
     * Get required state.
     */
    get required() {
        return this.input.required;
    }
    /**
     * Set required state.
     */
    set required(state) {
        this.setDataProperty('required', state);
        this.input.required = state;
    }
    /**
     * Get read-only state.
     */
    get readOnly() {
        return this.input.readOnly;
    }
    /**
     * Set read-only state.
     */
    set readOnly(state) {
        this.setDataProperty('readonly', state);
        this.input.readOnly = state;
    }
    /**
     * Get disabled state.
     */
    get disabled() {
        return this.input.disabled;
    }
    /**
     * Set disabled state.
     */
    set disabled(state) {
        this.setDataProperty('disabled', state);
        this.input.disabled = state;
    }
    /**
     * Checkbox element.
     */
    get element() {
        return this.skeleton;
    }
    /**
     * Notify element changes.
     */
    static notifyChanges(element) {
        if (document.body.contains(element)) {
            element.dispatchEvent(new Event('change', { bubbles: true, cancelable: false }));
        }
    }
};
/**
 * Checkbox groups.
 */
Template.groups = {};
__decorate([
    Class.Private()
], Template.prototype, "states", void 0);
__decorate([
    Class.Private()
], Template.prototype, "input", void 0);
__decorate([
    Class.Private()
], Template.prototype, "markSlot", void 0);
__decorate([
    Class.Private()
], Template.prototype, "checkbox", void 0);
__decorate([
    Class.Private()
], Template.prototype, "styles", void 0);
__decorate([
    Class.Private()
], Template.prototype, "skeleton", void 0);
__decorate([
    Class.Private()
], Template.prototype, "elements", void 0);
__decorate([
    Class.Protected()
], Template.prototype, "setDataProperty", null);
__decorate([
    Class.Private()
], Template.prototype, "toggleCheck", null);
__decorate([
    Class.Private()
], Template.prototype, "clickHandler", null);
__decorate([
    Class.Private()
], Template.prototype, "bindHandlers", null);
__decorate([
    Class.Private()
], Template.prototype, "bindProperties", null);
__decorate([
    Class.Private()
], Template.prototype, "assignProperties", null);
__decorate([
    Class.Public()
], Template.prototype, "name", null);
__decorate([
    Class.Public()
], Template.prototype, "group", null);
__decorate([
    Class.Public()
], Template.prototype, "value", null);
__decorate([
    Class.Public()
], Template.prototype, "checked", null);
__decorate([
    Class.Public()
], Template.prototype, "required", null);
__decorate([
    Class.Public()
], Template.prototype, "readOnly", null);
__decorate([
    Class.Public()
], Template.prototype, "disabled", null);
__decorate([
    Class.Public()
], Template.prototype, "element", null);
__decorate([
    Class.Private()
], Template, "groups", void 0);
__decorate([
    Class.Private()
], Template, "notifyChanges", null);
Template = Template_1 = __decorate([
    Class.Describe()
], Template);
exports.Template = Template;

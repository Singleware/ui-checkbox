import * as Control from '@singleware/ui-control';
import { Properties } from './properties';
import { Element } from './element';
/**
 * Checkbox template class.
 */
export declare class Template extends Control.Component<Properties> {
    /**
     * Checkbox states.
     */
    private states;
    /**
     * Input element.
     */
    private input;
    /**
     * Mark element.
     */
    private markSlot;
    /**
     * Checkbox element.
     */
    private checkbox;
    /**
     * Checkbox styles.
     */
    private styles;
    /**
     * Checkbox skeleton.
     */
    private skeleton;
    /**
     * Checkbox elements.
     */
    private elements;
    /**
     * Enable or disable the specified property in this elements.
     * @param property Property name.
     * @param state Determines whether the property must be enabled or disabled.
     */
    protected setDataProperty(property: string, state: boolean): void;
    /**
     * Toggles this check by the last toggled check.
     * @param force Determines whether the same check must be toggled.
     * @returns Returns the last check or undefined when there is no last check.
     */
    private toggleCheck;
    /**
     * Click event handler.
     * @param event Event information.
     */
    private clickHandler;
    /**
     * Bind event handlers to update the custom element.
     */
    private bindHandlers;
    /**
     * Bind exposed properties to the custom element.
     */
    private bindProperties;
    /**
     * Assign all element properties.
     */
    private assignProperties;
    /**
     * Default constructor.
     * @param properties Checkbox properties.
     * @param children Checkbox children.
     */
    constructor(properties?: Properties, children?: any[]);
    /**
     * Get checkbox name.
     */
    /**
    * Set checkbox name.
    */
    name: string;
    /**
     * Get checkbox group.
     */
    /**
    * Set checkbox group.
    */
    group: string;
    /**
     * Get checkbox value.
     */
    /**
    * Set checkbox value.
    */
    value: any;
    /**
     * Get checked state.
     */
    /**
    * Set checked state.
    */
    checked: boolean;
    /**
     * Get required state.
     */
    /**
    * Set required state.
    */
    required: boolean;
    /**
     * Get read-only state.
     */
    /**
    * Set read-only state.
    */
    readOnly: boolean;
    /**
     * Get disabled state.
     */
    /**
    * Set disabled state.
    */
    disabled: boolean;
    /**
     * Checkbox element.
     */
    readonly element: Element;
    /**
     * Checkbox groups.
     */
    private static groups;
    /**
     * Notify element changes.
     */
    private static notifyChanges;
}

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
     * Updates the specified property state.
     * @param property Property name.
     * @param state Property state.
     */
    private updatePropertyState;
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
     * Get default checkbox value.
     */
    readonly defaultValue: any;
    /**
     * Get default checked state.
     */
    readonly defaultChecked: boolean;
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
     * Reset the checkbox to its initial value and state.
     */
    reset(): void;
    /**
     * Checkbox groups.
     */
    private static groups;
    /**
     * Notify element changes.
     */
    private static notifyChanges;
}

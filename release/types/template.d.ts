import * as Control from '@singleware/ui-control';
import { Properties } from './properties';
import { Element } from './element';
/**
 * Checkbox template class.
 */
export declare class Template extends Control.Component<Properties> {
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
     * Enable or disable the specified property in the mark elements.
     * @param property Property name.
     * @param state Determines whether the property must be enabled or disabled.
     */
    private setMarkProperty;
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
}

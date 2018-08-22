/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the basic checkbox element.
 */
import * as Checkbox from '../source';
import * as DOM from '@singleware/jsx';

const field = (
  <Checkbox.Template>
    <span slot="prepend">Front label</span>
    <span slot="append">Back label</span>
  </Checkbox.Template>
) as Checkbox.Element;

// Change disabled property of the element.
field.disabled = true;

// Change read-only property of the element.
field.readOnly = true;

// Change required property of the element.
field.required = true;

// Change name property of the element.
field.name = 'new-name';

// Change value property of the element.
field.value = '1';

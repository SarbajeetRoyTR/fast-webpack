import { Button as FoundationButton } from '@microsoft/fast-foundation';

export class Button extends FoundationButton {}


// import { DesignSystem } from '@microsoft/fast-foundation';

export const definition = {
    baseName: 'button',
    shadowOptions: null,
};
export const buttonDefinition = Button.compose(definition);

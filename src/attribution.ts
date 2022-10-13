import { designUnit, neutralForegroundHint } from "@microsoft/fast-components";
import { css, html } from "@microsoft/fast-element";
import { display, FoundationElement } from "@microsoft/fast-foundation";

export const fastAttribution = FoundationElement.compose({
    baseName: "attribution",
    shadowOptions: null,
    template: html`
    <div class="attribution-horizontal">
        <slot name="icon"></slot>
        <slot></slot>
    </div>
    `,
    styles: css`
        ${display("flex")} ::slotted (*) {
            margin: 0 calc(${designUnit} * 1px);
        }
        .attribution-horizontal {
            background-color: blue;
        }

        :host {
            color: ${neutralForegroundHint};
        }
    `,
});

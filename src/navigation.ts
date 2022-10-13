import {
    fillColor,
    neutralLayer2,
    neutralStrokeRest,
    strokeWidth,
} from "@microsoft/fast-components";
import { css, customElement, FASTElement, html } from "@microsoft/fast-element";
import { display } from "@microsoft/fast-foundation";

const template = html`
    <slot></slot>
`;

const styles = css`
    ${display("block")} :host {
        background-color: ${fillColor};
        border-right: calc(${strokeWidth} * 1px) solid ${neutralStrokeRest};
    }
`;


@customElement({
    name: "demo-navigation",
    template,
    styles,
    shadowOptions: null,
})
export class Navigation extends FASTElement {
    connectedCallback(): void {
        super.connectedCallback();

        fillColor.setValueFor(this, neutralLayer2);
    }
}

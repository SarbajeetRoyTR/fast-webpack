import { html, ViewTemplate } from "@microsoft/fast-element";
import { Button, FoundationElementTemplate } from "@microsoft/fast-foundation";
import type { DemoCard, DemoCardDefinitionOptions } from "./card";

export const template: FoundationElementTemplate<
    ViewTemplate<DemoCard>,
    DemoCardDefinitionOptions
> = (context, definition) => {
    const buttonTag = context.tagFor(Button);

    return html`
        <div class="feature-image">
            <slot name="feature-media"></slot>
        </div>
        <div class="content">
            <slot name="attribution"></slot>
            <slot name="heading"></slot>
        </div>
        <span class="title">THis is Test</span>
        <div class="footer">
            <slot name="like-button">
                ${definition.likeButton || html`<button>Like</button>`}
            </slot>
        </div>
    `;
};

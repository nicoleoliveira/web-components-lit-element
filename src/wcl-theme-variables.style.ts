import { css } from 'lit-element';

export const themeDefault = css`
:host {
    --color-primary-default: #ffd464;
    --color-secondary-default: #8241a4;

    --button-primary-background-color: var(--color-primary, var(--color-primary-default));
    --button-default-background-color: white;
    --button-secondary-background-color: var(--color-secondary, var(--color-secondary-default));
}
`
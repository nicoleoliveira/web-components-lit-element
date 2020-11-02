import { css } from 'lit-element';

export const themeDefault = css`
:host {
    --color-primary: #ffd464;
    --color-secondary: #8241a4;

    --button-primary-background-color: var(--color-primary);
    --button-default-background-color: white;
    --button-secondary-background-color: var(--color-secondary);
}
`
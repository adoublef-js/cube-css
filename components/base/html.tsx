import { Component, html, memo } from "deps";

export type HtmlProps = {
    title?: string;
    // add more options later
    lang?: "en";
    children?: Component | Component[];
    scripts?: string[];
    styles?: string[];
};

export const Html = memo(
    ({ lang = "en", title, children, scripts, styles }: HtmlProps) => {
        const scriptHeaders = scripts?.map(
            (src) => html`<script src="${src}"></script>`
        );

        const styleHeaders = styles?.map(
            (href) => html`<link rel="stylesheet" href="${href}" />`
        );

        return html`
            <!DOCTYPE html>
            <html>
                <head lang="${lang}">
                    <meta
                        http-equiv="Content-Type"
                        content="text/html;charset=UTF-8"
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <title>${title}</title>
                    ${styleHeaders} ${scriptHeaders}
                </head>
                <body>
                    ${children}
                </body>
            </html>
        `;
    }
);

// htmx.org@1.9.4/dist/htmx.min.js

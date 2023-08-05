import { html, memo, Component } from "deps";

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
                    ${styles?.map(
                        (href) => html`<link rel="stylesheet" href="${href}" />`
                    )}
                    ${scripts?.map(
                        (src) => html`<script src="${src}"></script>`
                    )}
                </head>
                <body>
                    ${children}
                </body>
            </html>
        `;
    }
);

// htmx.org@1.9.4/dist/htmx.min.js

/* 
          <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossorigin
            />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Open+Sans:wght@300&display=swap"
            />
            <link rel="icon" href="/favicon.ico" sizes="32x32" />
            <link rel="icon" href="/icon.svg" type="image/svg+xml" />
            <link rel="stylesheet" href="/reset.css" />
            <link rel="stylesheet" href="/styles.css" />

*/

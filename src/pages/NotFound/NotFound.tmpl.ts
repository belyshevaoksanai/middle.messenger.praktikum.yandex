const tmpl = (classes: Record<string, string>) => `
    <div class="${classes.titleContainer}">
        <h1 class="${classes.title}">404</h1>
        <h1 class="${classes.subtitle}">Не туда попали</h1>
        <div class="${classes.link}">
            {{{link}}}
        </div>
    </div>
`;

export default tmpl;

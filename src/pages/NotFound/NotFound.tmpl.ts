const tmpl = (classes: Record<string, string>) => `
<div class="{{class}}">
    <div class="${classes.titleContainer}">
        <h1 class="${classes.title}">404</h1>
        <h2 class="${classes.subtitle}">Не туда попали</h1>
        <div class="${classes.link}">
            {{{link}}}
        </div>
    </div>
</div>
`;

export default tmpl;

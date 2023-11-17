const tmpl = (classes: Record<string, string>) => `
    <div class="${classes.registrationForm}">
        {{{idInput}}}
    </div>
    <div class="${classes.actionContainer}">
        {{{buttonAdd}}}
    </div>
`;

export default tmpl;

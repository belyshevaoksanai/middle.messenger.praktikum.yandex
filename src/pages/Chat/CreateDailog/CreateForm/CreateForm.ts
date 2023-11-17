const tmpl = (classes: Record<string, string>) => `
    <div class="${classes.registrationForm}">
        {{{nameInput}}}
    </div>
    <div class="${classes.actionContainer}">
        {{{buttonCreate}}}
    </div>
`;

export default tmpl;

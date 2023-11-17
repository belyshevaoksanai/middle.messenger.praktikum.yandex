const tmpl = (classes: Record<string, string>) => `
    <div class="${classes.titleContainer}">
        {{{title}}}
    </div>
    <div class="${classes.registrationForm}">
        {{{inputLogin}}}
        {{{inputName}}}
        {{{inputSecondName}}}
        {{{inputEmail}}}
        {{{inputPhone}}}
        {{{inputPassword}}}
        {{{inputConfirmPassword}}}
    </div>
    <div class="${classes.actionContainer}">
        {{{buttonRegistration}}}
        {{{buttonSignIn}}}
    </div>
`;

export default tmpl;

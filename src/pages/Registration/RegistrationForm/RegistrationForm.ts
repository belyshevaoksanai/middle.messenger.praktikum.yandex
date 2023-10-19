const tmpl = (classes: Record<string, string>) => `
    <div class="${classes.titleContainer}">
        {{{title}}}
    </div>
    <div class="${classes.registrationForm}">
        {{{inputEmail}}}
        {{{inputLogin}}}
        {{{inputName}}}
        {{{inputSecondName}}}
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

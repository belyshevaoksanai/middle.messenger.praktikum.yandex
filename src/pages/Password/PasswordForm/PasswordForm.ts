const tmpl = (classes: Record<string, string>) => `
    <div class="${classes.titleContainer}">
        {{{inputAvatar}}}
    </div>
    <div class="${classes.registrationForm}">
        {{{inputOldPassword}}}
        {{{inputNewPassword}}}
        {{{inputConfirmPassword}}}
    </div>
    <div class="${classes.actionContainer}">
        {{{buttonSave}}}
        {{{buttonCancel}}}
    </div>
`;

export default tmpl;

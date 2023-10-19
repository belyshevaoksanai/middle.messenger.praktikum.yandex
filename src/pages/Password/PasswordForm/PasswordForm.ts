const tmpl = (classes: Record<string, string>, editAvatar: string) => `
    <div class="${classes.titleContainer}">
        <img src="${editAvatar}"  class="${classes.avatarImg}"/>
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

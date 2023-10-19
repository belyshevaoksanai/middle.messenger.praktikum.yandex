const tmpl = (classes: Record<string, string>, editAvatar: string) => `
    <div class="${classes.titleContainer}">
        <img src="${editAvatar}"/>
        <span>{{{title}}}</span>
    </div>
    <div class="${classes.registrationForm}">
        {{{inputEmail}}}
        {{{inputLogin}}}
        {{{inputName}}}
        {{{inputSecondName}}}
        {{{inputNameChat}}} 
        {{{inputPhone}}}
    </div>
    <div class="${classes.actionContainer}">
        {{{buttonChangeData}}}
        {{{buttonChangePassword}}}
        {{{buttonExit}}}
    </div>
`;

export default tmpl;

const tmpl = (classes: Record<string, string>) => `
    <div class="${classes.titleContainer}">
        {{{inputAvatar}}}
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
        {{{buttonToChat}}}
        {{{buttonExit}}}
    </div>
`;

export default tmpl;

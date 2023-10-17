const tmpl = `
    <div class="{{classes.registration}}">
        <form class="{{classes.registrationContainer}}">
            <div class="{{classes.titleContainer}}">
                {{{title}}}
            </div>
            <div class="{{classes.registrationForm}}">
                {{{inputEmail}}}
                {{{inputLogin}}}
                {{{inputName}}}
                {{{inputSecondName}}}
                {{{inputPhone}}}
                {{{inputPassword}}}
                {{{inputConfirmPassword}}}
            </div>
            <div class="{{classes.actionContainer}}">
                {{{buttonRegistration}}}
                {{{buttonSignIn}}}
            </div>
        </form>
    </div>
`;

export default tmpl;

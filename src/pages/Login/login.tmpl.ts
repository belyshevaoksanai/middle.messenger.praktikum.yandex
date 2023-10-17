const tmpl = `
    <div class="{{classes.login}}">
        <form class="{{classes.loginContainer}}">
            <div class="{{classes.titleContainer}}">
                {{{title}}}
            </div>
            <div class="{{classes.loginForm}}">
                {{{inputLogin}}}
                {{{inputPassword}}}
            </div>
            <div class="{{classes.actionContainer}}">
                {{{buttonAuth}}}
                {{{buttonRegistration}}}
            </div>
        </form>
    </div>
`;

export default tmpl;

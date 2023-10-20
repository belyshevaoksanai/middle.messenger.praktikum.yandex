const tmpl = (classes: Record<string, string>) => `
            <div class="${classes.titleContainer}">
                {{{title}}}
            </div>
            <div class="${classes.loginForm}">
                {{{inputLogin}}}
                {{{inputPassword}}}
            </div>
            <div class="${classes.actionContainer}">
                {{{buttonAuth}}}
                {{{buttonRegistration}}}
            </div>
`;

export default tmpl;

const tmpl = `
    <div class="{{classes.registration}}">
        <form>
            <div class="{{classes.titleContainer}}">
                <img src="{{editAvatar}}"  class="{{classes.avatarImg}}"/>
            </div>
            <div class="{{classes.registrationForm}}">
                {{{inputOldPassword}}}
                {{{inputNewPassword}}}
                {{{inputConfirmPassword}}}
            </div>
            <div class="{{classes.actionContainer}}">
                {{{buttonSave}}}
                {{{buttonCancel}}}
            </div>
        </form>
    </div>
`;

export default tmpl;

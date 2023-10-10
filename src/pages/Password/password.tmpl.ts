export const tmpl = `
    <div class="{{classes.registration}}">
        <div>
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
        </div>
    </div>
`

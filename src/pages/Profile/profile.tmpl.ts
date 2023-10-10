export const tmpl = `
    <div class="{{classes.registration}}">
        <div>
            <div class="{{classes.titleContainer}}">
                <img src="{{editAvatar}}"/>
                <span>{{{title}}}</span>
            </div>
            <div class="{{classes.registrationForm}}">
                {{{inputEmail}}}
                {{{inputLogin}}}
                {{{inputName}}}
                {{{inputSecondName}}}
                {{{inputNameChat}}} 
                {{{inputPhone}}}
            </div>
            <div class="{{classes.actionContainer}}">
                {{{buttonChangeData}}}
                {{{buttonChangePassword}}}
                {{{buttonExit}}}
            </div>
        </div>
    </div>
`

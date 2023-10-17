const tmpl = `
    <div class="{{classes.chatPage}}">
        <div class="{{classes.dialogContainer}}">
            <div class="{{classes.linkContainer}}">
                {{{linkProfile}}}
                <img src="{{arrowUrl}}">
            </div>
            {{{inputSearch}}}

            <div class="{{classes.dialogList}}">
                {{{chatDialogs}}}
            </div>
        </div>

        <div class="{{classes.chatContainer}}">
            <div class="{{classes.emptyChat}}">
                <span>Выберите чат чтобы отправить сообщение</span>
            </div>
        </div>
    </div>
`;

export default tmpl;

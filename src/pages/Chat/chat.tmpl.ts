const tmpl = (classes: Record<string, string>, arrowUrl: string) => `
        <div class="${classes.dialogContainer}">
            <div class="${classes.linkContainer}">
                {{{linkProfile}}}
                <img src="${arrowUrl}">
            </div>
            {{{inputSearch}}}

            <div class="${classes.dialogList}">
                {{{chatDialogs}}}
            </div>
        </div>

        <div class="${classes.chatContainer}">
            <div class="${classes.emptyChat}">
                <span>Выберите чат чтобы отправить сообщение</span>
            </div>
        </div>
`;

export default tmpl;

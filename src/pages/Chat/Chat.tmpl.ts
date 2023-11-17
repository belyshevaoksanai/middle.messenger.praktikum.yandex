const tmpl = (classes: Record<string, string>, arrowUrl: string) => `
<div>
    {{{createDialog}}}
    {{{addUserDialog}}}
    {{{removeUserDialog}}}
    <div class="{{class}}">
        <div class="${classes.dialogContainer}">
            <div class="${classes.actions}">
              {{{createChatButton}}}
              <div class="${classes.linkContainer}">
                  {{{linkProfile}}}
                  <img src="${arrowUrl}">
              </div>
            </div>
            {{{inputSearch}}}

            <div class="${classes.dialogList}">
                {{{chatDialogs}}}
            </div>
        </div>

        <div class="${classes.chatContainer}">
            <div class="${classes.chatHeader}">
              {{{addUserButton}}}
              {{{removeUserButton}}}
            </div>
            {{#if messages}}
              <div class="${classes.fullChat}">
                {{{messages}}}
              </div>
            {{else}}
              <div class="${classes.emptyChat}">
                {{#unless activeDialog}}
                  <span>Выберите чат чтобы отправить сообщение</span>
                {{/unless}}
              </div>
            {{/if}}
            <div class="${classes.messageContainer}">
              {{{form}}}
            </div>
        </div>
    </div>
</div>
`;

export default tmpl;

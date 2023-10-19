const tmpl = (classes: Record<string, string>) => `
            <div class="${classes.messageForm}">
                {{{inputMessage}}}
                {{{buttonSend}}}
            </div>
`;

export default tmpl;

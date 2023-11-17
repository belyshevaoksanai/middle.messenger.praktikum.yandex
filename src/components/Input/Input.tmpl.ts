const tmpl = (classes: Record<string, string>) => `
<div class="{{class}}">
    <div class="${classes.inputContainer}">
        {{#if label}}
            <label class="${classes.label}">{{label}}</label>
        {{/if}}
        {{{input}}}
        {{{error}}}
    </div>
</div>
`;

export default tmpl;

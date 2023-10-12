export const tmpl = `
    <div class="{{classes.inputContainer}}">
        {{#if label}}
            <label class="{{classes.label}}">{{label}}</label>
        {{/if}}
        <input class="{{inputClass}}" placeholder="{{placeholder}}" name="{{name}}"/>
    </div>
`

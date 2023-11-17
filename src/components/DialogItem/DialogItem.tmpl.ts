const tmpl = (classes: Record<string, string>, emtyAvatarUrl: string) => `
    <div class="${classes.dialogContainer}" {{#if active}}style="background:#E4EDFD;"{{else}}''{{/if}}>
        <img src="${emtyAvatarUrl}" />
        <div class="${classes.dialogInfo}">
            <span class="${classes.dialogTitle}">{{title}}</span>
        </div>
    </div>
`;

export default tmpl;

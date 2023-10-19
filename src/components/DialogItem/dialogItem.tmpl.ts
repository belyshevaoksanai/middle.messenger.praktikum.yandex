const tmpl = (classes: Record<string, string>, emtyAvatarUrl: string) => `
    <div class="${classes.dialogContainer}">
        <img src="${emtyAvatarUrl}" />
        <div class="${classes.dialogInfo}">
            <span class="${classes.dialogTitle}">{{name}}</span>
            <span class="${classes.dialogMessage}">{{text}}</span>
        </div>
    </div>
`;

export default tmpl;

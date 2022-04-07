export class Model {
    user;
    items;

    constructor() {
        this.user = 'Fatih';
        this.items = [
            new TodoItem('Kahvaltı', true),
            new TodoItem('Spor', false),
            new TodoItem('Fatura', false),
            new TodoItem('Sinema', false),
        ];
    }
}

export class TodoItem {
    description;
    action;

    constructor(description: string, action: boolean) {
        this.description = description;
        this.action = action;
    }
}

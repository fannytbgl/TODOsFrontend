export class TodoDto {
    public id?: number;
    public title: string = '';
    public statusType: string = '';
    public description: string = '';
    public dateOfCreation: Date | undefined;

    constructor(todo: any) {
        this.id = todo.id;
        this.title = todo.title;
        this.statusType = todo.statusType;
        this.description = todo.description;
        this.dateOfCreation = todo.dateOfCreation;
      }
}

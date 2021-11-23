export abstract class Model {
    protected id: number;

    public setId(id: number): Model {
        this.id = id;
        return this;
    }

    public getId(): number {
        return this.id;
    }
}
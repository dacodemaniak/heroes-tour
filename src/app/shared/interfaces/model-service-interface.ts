export interface ModelServiceInterface<T> {
    findAll(): Map<number, T>;
    findOne(id: number): T | undefined;
    add(t: T): T;
    update(t: T): void;
    delete(id: number): void;
    size(): number;
}
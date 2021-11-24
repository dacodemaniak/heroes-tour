import { Observable } from "rxjs";

export interface ModelServiceInterface<T> {
    findAll(): Observable<Map<number, T>>;
    findOne(id: number): T | undefined;
    add(t: T): Observable<T>;
    update(t: T): void;
    delete(id: number): void;
    size(): number;
}
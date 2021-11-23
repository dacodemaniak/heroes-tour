import { Inject } from "@angular/core";
import { Model } from "src/app/shared/models/model";

export class Hero extends Model {
    private _name: string;
    private _isMarvel: boolean;
    private birthDate: Date;

    public constructor() {
        super();
        
        this._name = '';
        this._isMarvel = true;
        this.birthDate = null;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get isMarvel(): boolean {
        return this._isMarvel;
    }

    public set isMarvel(isMarvel: boolean) {
        this._isMarvel = isMarvel;
    }

    public getBirthDate(): Date {
        return this.birthDate;
    }

    public setBirthDate(date: Date): Hero {
        this.birthDate = date;
        return this;
    }

    public deserialize(formData: any): Hero {
        this.name = formData.name;
        this.isMarvel = formData.isMarvel;
        this.setBirthDate(formData.birthDate);
  
        return this;
    }
}

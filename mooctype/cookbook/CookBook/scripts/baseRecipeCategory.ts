class BaseRecipeCategory {
    private _name: string;
    private _foodGroups: FoodGroup[] = [];

    //TODO: Create get and set blocks for each of the variables in the declaration above.


    get foodGroups():FoodGroup[] {
        return this._foodGroups;
    }

    set foodGroups(value:FoodGroup[]) {
        this._foodGroups = value;
    }

    get name():string {
        return this._name;
    }

    set name(value:string) {
        this._name = value;
    }
}
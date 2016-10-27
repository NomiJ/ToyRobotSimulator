export class BoardService {
	

	public static get ROWS():number { return 5; }
    public static get COLS():number { return 5; } 

	public static areValidCoordinates(r:number, c:number) : boolean {
		return (r >=0 && r <= this.ROWS-1) && (c >=0 && c <= this.COLS-1);
	}


	private _row:number = 0;
    get row():number {
        return this._row;
    }
    set row(r:number) {
        this._row = r;
    }

	private _cols:number = 0;
    get col():number {
        return this._cols;
    }
    set col(c:number) {
        this._cols = c;
    }
}
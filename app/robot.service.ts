import { GLOBALS, COMMAND_DICT, DIRECTION } from './globals'
import { Command } from './command.service'

interface IMoveAble{
    move():void
    rotate(direction:number):void

}

export class Robot implements IMoveAble {
    //This is a singleton class, but its anti pattern in angular2
     x: number = -1
     y: number = -1
     nose: DIRECTION = DIRECTION.NONE;

     public static r:Robot;
     constructor(){
         if(!Robot.r){
             Robot.r = this
         }
         return Robot.r;
     }
     isPlaced = true;

     initialize() {
        this.x = this.y = -1;
        this.nose = DIRECTION.NONE;
    }

     mapCommand(command: Command): string {
        if (this.isPlaced) {
            switch (command.cmd) {
                case COMMAND_DICT.LEFT:
                    this.rotate(GLOBALS.LEFT);
                    break;
                case COMMAND_DICT.RIGHT:
                    this.rotate(GLOBALS.RIGHT);
                    break;
                case COMMAND_DICT.MOVE:
                    this.move();
                    break;
                case COMMAND_DICT.PLACE:
                    this.placeValidate(command.args);
                    break;
                case COMMAND_DICT.REPORT:
                    this.report();
                    break;
                default:
                    break;

            }
        }
        else
            return GLOBALS.SYS_MSG[GLOBALS.PLACEMENT_CONSTRAINT]

        return GLOBALS.SYS_MSG[GLOBALS.SUCCESS]
    }

    rotate(direction: number):void {//Will just move the direction
        //direction == -1 for LEFT
        //direction == 1 for RIGHT

        this.nose = (DIRECTION.COUNT + this.nose + direction) % DIRECTION.COUNT

    }

     move():void {//Will just move the position based on direction

        switch (this.nose) {

            case DIRECTION.NORTH:
                //increase y
                this.y = this.validate(this.x, this.y + 1) ? this.y + 1 : this.y
                break;

            case DIRECTION.EAST:
                //increase x
                this.x = this.validate(this.x + 1, this.y) ? this.x + 1 : this.x
                break;

            case DIRECTION.SOUTH:
                //decrease y
                this.y = this.validate(this.x, this.y - 1) ? this.y - 1 : this.y

                break;

            case DIRECTION.WEST:
                //decrease x
                this.x = this.validate(this.x - 1, this.y) ? this.x - 1 : this.x

                break;
        }

    }

    private  setDirection(f: string) {
        switch (f.toLowerCase()) {

            case 'n':
                this.nose = DIRECTION.NORTH;
                break;

            case 'e':
                this.nose = DIRECTION.EAST;
                break;

            case 's':
                this.nose = DIRECTION.SOUTH;
                break;

            case 'w':
                this.nose = DIRECTION.WEST;
                break;
        }
    }

    private  validate(x: number, y: number): boolean {
        return (x >= 0 && x < GLOBALS.MAXROWS) &&
            (y >= 0 && y < GLOBALS.MAXCOLS)
    }

     placeValidate(args: string[]) {//Will only place -- the place command needs alot of improvement structure wise

        if (args.length == 3 && this.validate(+args[0], +args[1]) && (args[2].match("[nesw]/i"))) {
            this.place(+args[0], +args[1])
            this.setDirection(args[2])
        }
    }

      place(x: number, y: number) {
        this.x = x
        this.y = y
        this.report()
    }

     report(): string {//Will report
        let r: string = `My position is ${this.x} row and ${this.y} cols and facing  ${this.nose}`
        return r;
    }

}
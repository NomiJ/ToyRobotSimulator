import { GLOBALS, COMMAND_DICT, DIRECTION } from './globals'
import { Command } from './command.service'

interface IMoveAble {
    x: number
    y: number
    nose: DIRECTION

    move(): string
    rotate(direction: number): void

}

export class Robot implements IMoveAble {//Singleton? May be look for a better way in future
    x: number = -1
    y: number = -1
    nose: DIRECTION = DIRECTION.NONE;

    public static r: Robot;
    constructor() {
        if (!Robot.r) {
            Robot.r = this
        }
        return Robot.r;
    }
    isPlaced = true;

    initialize() {
        this.x = this.y = -1;
        this.nose = DIRECTION.NONE;
    }

    public mapCommand(command: Command): string {
        if (command) {
            if (this.isPlaced) {
                switch (command.cmd) {
                    case COMMAND_DICT.LEFT:
                        this.rotate(GLOBALS.LEFT);
                        break;
                    case COMMAND_DICT.RIGHT:
                        this.rotate(GLOBALS.RIGHT);
                        break;
                    case COMMAND_DICT.REPORT:
                        this.report();
                        break;
                    case COMMAND_DICT.MOVE:
                        return this.move();
                    default:
                        break;

                }
            } 
            if (command.cmd == COMMAND_DICT.PLACE) {
                this.isPlaced = true;
                return this.placeValidate(command.args);
            }
        }
        else
            return GLOBALS.SYS_MSG[GLOBALS.PLACEMENT_CONSTRAINT]

        return GLOBALS.SYS_MSG[GLOBALS.SUCCESS]
    }

    rotate(direction: number): void {//Will just move the direction
        //direction == -1 for LEFT
        //direction == 1 for RIGHT

        this.nose = (DIRECTION.COUNT + this.nose + direction) % DIRECTION.COUNT

    }

    move(): string {//Will just move the position based on direction
        let validation: boolean = false

        switch (this.nose) {

            case DIRECTION.NORTH:
                //increase y
                validation = this.validate(this.x, this.y + 1)
                this.y = validation ? this.y + 1 : this.y
                break;

            case DIRECTION.EAST:
                //increase x
                validation = this.validate(this.x + 1, this.y)
                this.x = validation ? this.x + 1 : this.x
                break;

            case DIRECTION.SOUTH:
                //decrease y
                validation = this.validate(this.x, this.y - 1)
                this.y = validation ? this.y - 1 : this.y

                break;

            case DIRECTION.WEST:
                //decrease x
                validation = this.validate(this.x - 1, this.y)
                this.x = validation ? this.x - 1 : this.x

                break;
        }
        return GLOBALS.SYS_MSG[GLOBALS.SUCCESS]
    }

    private setDirection(f: string) {
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

    private validate(x: number, y: number): boolean {
        return (x >= 0 && x < GLOBALS.MAXROWS) &&
            (y >= 0 && y < GLOBALS.MAXCOLS)
    }

    placeValidate(args: string[]): string {//Will only place -- the place command needs alot of improvement structure wise

        if (args.length == 3 && this.validate(+args[0], +args[1]) && (args[2].toLowerCase().match("[nesw]"))) {
            this.place(+args[0], +args[1])
            this.setDirection(args[2])
            return this.report()

        }
        return GLOBALS.SYS_MSG[GLOBALS.VALIDATION_CONSTRAINT]
    }

    place(x: number, y: number) {
        this.x = x
        this.y = y
    }

    report(): string {//Will report
        let r: string = `My position is ${this.x} row and ${this.y} cols and facing  ${this.nose}`
        return r;
    }

}
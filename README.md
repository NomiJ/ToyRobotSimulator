#TOY ROBOT SIMULATOR ("2.2.5.alpha")
=================================

Implementation of Toy Robot Simulator using Angular2 with TDD (Jasmine & Karma)

##Description:
---------------
The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.
* There are no other obstructions on the table surface.
* The robot is free to roam around the surface of the table, but must be prevented from falling to
destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.
Create an application that can read in commands of the following form - PLACE X,Y,F
MOVE LEFT RIGHT REPORT
* PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.
* The origin (0,0) can be considered to be the SOUTH WEST most corner.
* The first valid command to the robot is a PLACE command, after that, any sequence of
commands may be issued, in any order, including another PLACE command. The application
should discard all commands in the sequence until a valid PLACE command has been executed.
* MOVE will move the toy robot one unit forward in the direction it is currently facing.
* LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the
position of the robot.
* REPORT will announce the X,Y and F of the robot. This can be in any form, but standard output
is sufficient.
* A robot that is not on the table can choose the ignore the MOVE, LEFT, RIGHT and REPORT
commands.
* Input can be from a file, or from standard input, as the developer chooses.
* Provide test data to exercise the application.
* ** The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot.**

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.


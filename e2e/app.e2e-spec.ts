import { RobotSimulatorPage } from './app.po';

describe('robot-simulator App', function () {
  let page: RobotSimulatorPage;

  beforeEach(() => {
    page = new RobotSimulatorPage();
    page.navigateTo();

  });

  it('should display message saying Toy Robot Simulator!', () => {
    expect(page.getParagraphText()).toEqual('Toy Robot Simulator!');
  });

  it('should have app-board Component', () => {
    expect(page.getAppBoard).toBeTruthy();
  });

  it('should have app-command Component', () => {
    expect(page.getAppCommand).toBeTruthy();
  });

  it('should have app-manual Component', () => {
    expect(page.getAppManual).toBeTruthy();
  });

  it('should have result div', () => {
    expect(page.getResult).toBeTruthy();
  });
});

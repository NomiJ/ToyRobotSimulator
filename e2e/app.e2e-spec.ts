import { RobotSimulatorPage } from './app.po';

describe('robot-simulator App', function() {
  let page: RobotSimulatorPage;

  beforeEach(() => {
    page = new RobotSimulatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

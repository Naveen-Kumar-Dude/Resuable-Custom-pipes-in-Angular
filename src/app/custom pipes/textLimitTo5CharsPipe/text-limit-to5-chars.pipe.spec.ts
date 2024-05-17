import { TextLimitTo5CharsPipe } from './text-limit-to5-chars.pipe';

describe('TextLimitTo5CharsPipe', () => {
  it('create an instance', () => {
    const pipe = new TextLimitTo5CharsPipe();
    expect(pipe).toBeTruthy();
  });
});

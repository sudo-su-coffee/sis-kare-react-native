import { MORE_IS_A_SHEET, PRIMARY_TABS, isPrimaryTab } from '../src/navigationPolicy';

describe('KARE SIS mobile navigation policy', () => {
  it('keeps persistent navigation to exactly Home, Academics, and Profile', () => {
    expect(PRIMARY_TABS).toEqual(['Home', 'Academics', 'Profile']);
    expect(PRIMARY_TABS).toHaveLength(3);
    expect(isPrimaryTab('More')).toBe(false);
    expect(MORE_IS_A_SHEET).toBe(true);
  });
});

import { MORE_IS_A_SHEET, PRIMARY_TABS } from '../src/navigationPolicy';

describe('KARE SIS app shell', () => {
  it('uses a compact native navigation model rather than a crowded tab bar', () => {
    expect(PRIMARY_TABS).toEqual(['Home', 'Academics', 'Profile']);
    expect(MORE_IS_A_SHEET).toBe(true);
  });
});

export const PRIMARY_TABS = ['Home', 'Academics', 'Profile'] as const;

export const MORE_IS_A_SHEET = true;

export function isPrimaryTab(label: string): label is (typeof PRIMARY_TABS)[number] {
  return PRIMARY_TABS.includes(label as (typeof PRIMARY_TABS)[number]);
}

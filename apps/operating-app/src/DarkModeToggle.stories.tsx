import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { DarkModeToggle } from './DarkModeToggle';
import { getSomethingFromDomain } from '@repro-app/domain-something';

export default {
  component: DarkModeToggle,
  title: 'DarkModeToggle',
} as ComponentMeta<typeof DarkModeToggle>;

// This line works fine
const truc = getSomethingFromDomain();

export const Dark: ComponentStory<typeof DarkModeToggle> = () => (
  <ColorSchemeProvider
    colorScheme={'dark' as ColorScheme}
    toggleColorScheme={function (colorScheme?: ColorScheme | undefined): void {
      throw new Error('Function not implemented.');
    }}
  >
    <DarkModeToggle />
    {truc}
  </ColorSchemeProvider>
);
export const Light: ComponentStory<typeof DarkModeToggle> = () => (
  <ColorSchemeProvider
    colorScheme={'light' as ColorScheme}
    toggleColorScheme={function (colorScheme?: ColorScheme | undefined): void {
      throw new Error('Function not implemented.');
    }}
  >
    <DarkModeToggle />
  </ColorSchemeProvider>
);

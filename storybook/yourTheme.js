import { create } from '@storybook/theming/create'
import packageJson from '../package.json'

export default create({
  base: 'dark',
  brandUrl: packageJson.repository.url,
  brandTitle: 'My custom storybook'
})

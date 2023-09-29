import PluginIcon from './components/Home';
import pluginId from './pluginId';

export default {
  register(app) {
    app.addMenuLink({
      to: `/plugins/${pluginId}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: 'Home',
      },
      Component: async () => {
        // @ts-ignore
        const component = await import('./pages/App');

        return component;
      },
      permissions: [], // array of permissions (object), allow a user to access a plugin depending on its permissions
    });
  },
};
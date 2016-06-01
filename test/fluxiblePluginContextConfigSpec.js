import configPlugin from '../src/index';
import isEqual from 'lodash.isequal';

describe('contextConfigPlugin', () => {
    const config = { big: 'mac', secret: 'password' };
    const plugin = configPlugin(config);
    const dehydratedConfig = plugin.plugContext().dehydrate().config;

    it('has a dehydrate method which returns the config', () => dehydratedConfig.big === config.big);

    it('has a dehydrate method that deletes a secret', () => !dehydratedConfig.secret);

    it('gives components access to the config via the context', () => {
        const componentContext = {};
        plugin.plugContext().plugComponentContext(componentContext);
        return (isEqual(componentContext.config, config));
    });

    it('gives actions access to the config via the context', () => {
        const actionContext = {};
        plugin.plugContext().plugActionContext(actionContext);
        return (isEqual(actionContext.config, config));
    });

    it('gives stores access to the config via the context', () => {
        const storeContext = {};
        plugin.plugContext().plugStoreContext(storeContext);
        return (isEqual(storeContext.config, config));
    });
});

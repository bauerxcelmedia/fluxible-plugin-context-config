import { expect } from 'chai';
import configPlugin from '../src/index';

describe('contextConfigPlugin', () => {
    const config = { big: 'mac', secret: 'password' };
    const plugin = configPlugin(config);

    it('has a dehydrate method which returns the config', () => {
        expect(plugin.plugContext().dehydrate().config.big === config.big);
    });

    it('has a dehydrate method that deletes a secret', () => {
        expect(plugin.plugContext().dehydrate().config).to.not.have.property('secret');
    });

    it('gives components access to the config via the context', () => {
        const componentContext = {};
        plugin.plugContext().plugComponentContext(componentContext);
        expect(componentContext.config).to.deep.equal(config);
    });

    it('gives actions access to the config via the context', () => {
        const actionContext = {};
        plugin.plugContext().plugActionContext(actionContext);
        expect(actionContext.config).to.deep.equal(config);
    });

    it('gives stores access to the config via the context', () => {
        const storeContext = {};
        plugin.plugContext().plugStoreContext(storeContext);
        expect(storeContext.config).to.deep.equal(config);
    });
});

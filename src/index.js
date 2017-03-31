export default function (init) {
    return {
        name: 'configPlugin',
        plugContext() {
            var config = init;
            return {
                plugComponentContext(componentContext) {
                    componentContext.config = config; /* eslint no-param-reassign: "off" */
                },
                plugActionContext(actionContext) {
                    actionContext.config = config; /* eslint no-param-reassign: "off" */
                },
                plugStoreContext(storeContext) {
                    storeContext.config = config; /* eslint no-param-reassign: "off" */
                },
                dehydrate() {
                    const config = { ...init };
                    if (config.secret) delete config.secret;
                    return { config };
                },
                rehydrate(state) {
                    config = state.config;
                }
            };
        }
    };
}

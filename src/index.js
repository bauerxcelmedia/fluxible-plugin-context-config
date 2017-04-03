export default function (init) {
    return {
        name: 'configPlugin',
        plugContext() {
            let config = { ...init };
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
                    const configCopy = { ...config };
                    if (configCopy.secret) delete configCopy.secret;
                    return { config: configCopy };
                },
                rehydrate(state) {
                    config = state.config;
                }
            };
        }
    };
}

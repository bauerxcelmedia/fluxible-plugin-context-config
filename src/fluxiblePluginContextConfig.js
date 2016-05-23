export default function (config) {
    return {
        name: 'configPlugin',
        plugContext() {
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
                    if (config.secret) delete config.secret;
                    return {
                        config
                    };
                }
            };
        }
    };
}

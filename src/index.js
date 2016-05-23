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
                    const dehydratedConfig = { ...config };
                    if (dehydratedConfig.secret) delete dehydratedConfig.secret;
                    return {
                        config: dehydratedConfig
                    };
                }
            };
        }
    };
}

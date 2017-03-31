# fluxible-plugin-context-config

Fluxible plugin that adds a config to component, store and action contexts.

## Usage

Create your app and register the config plugin initialised with a config object:

```javascript
import {React, Component} from 'react';
import Fluxible from 'fluxible';
import configPlugin from 'fluxible-plugin-context-config';

const app = new Fluxible();

const config = {
    greet: 'hello world',
    secret: {
        apiKey: '123'
    }
};

app.plug(configPlugin(config));
```

On the client add the plugin but do not pass in a config like the server. Client state will be automatically rehydrated.

```js
app.plug(configPlugin());
```

Access the config object on the action, store or component contexts:

```javascript
const context = app.createContext();

// action context
context.getActionContext().config.greet;
context.getActionContext().conifg.secret.apiKey; // server only

// store context
context.getStoreContext().config.greet;
context.getStoreContext().conifg.secret.apiKey; // server only

// component context
context.getComponentContext().config.greet;
context.getComponentContext().conifg.secret.apiKey; // server only
```

For component context, register the config object by providing the context type to the root application component. See [http://fluxible.io/api/plugins.html#componentcontext](http://fluxible.io/api/plugins.html#componentcontext)

## Secret

Keep config passwords and keys in secret. The dehydrate method will delete `config.secret` before returning. This keeps secrets out of the browser.

## Quality

- to contribute, fork, branch and submit pull requests for review
- use Node version specified in `.nvmrc` 
- use ES6
- `npm test` and maintain 100% coverage
- `npm run lint` and maintain 0 errors (uses AirBnB JavaScript Style Guide)

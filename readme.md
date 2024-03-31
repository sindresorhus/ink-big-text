# ink-big-text

> Awesome text component for [Ink](https://github.com/vadimdemedes/ink)

![](screenshot.png)

## Install

```sh
npm install ink-big-text
```

## Usage

```js
import React from 'react';
import {render} from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';

render(
	<Gradient name="rainbow">
		<BigText text="unicorns"/>
	</Gradient>
);
```

## API

### `<BigText/>`

Props except for `text` are passed as options to [`cfonts`](https://github.com/dominikwilkowski/cfonts). The only difference is that the `background` option is named `backgroundColor` here. See the prop types in [`index.tsx`](https://github.com/sindresorhus/ink-big-text/blob/main/source/index.tsx#L5) for more.

## Related

- [ink-gradient](https://github.com/sindresorhus/ink-gradient) - Gradient color component for Ink
- [ink-link](https://github.com/sindresorhus/ink-link) - Link component for Ink

# reamix

> RemixIcon React Bindings

[![NPM](https://img.shields.io/npm/v/reamix.svg)](https://www.npmjs.com/package/reamix) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save reamix
```

## Usage

```tsx
import React, { Component } from 'react'

import Icon from 'reamix'

class Example extends Component {
  render() {
    return (
      <Icon
        name='admin'
        size='lg'
        iconStyle='fill'
        color='red'
        useClass='my-custom-class'
        useStyle={{ margin: '20px' }}
      />
    )
  }
}
```

| 参数      | 说明                    | 类型                            | 可选值                                                                          | 默认值 | required |
| --------- | ----------------------- | ------------------------------- | ------------------------------------------------------------------------------- | ------ | -------- |
| name      | icon name               | IconName                        | tldr                                                                            | -      | True     |
| size      | icon buildin size       | IconSize                        | lg / xl / xxs / xs / sm / 1x / 2x / 3x / 4x / 5x / 6x / 7x / 8x / 9x / 10x / fw | -      | False    |
| iconStyle | icon style              | IconStyle                       | fill / line                                                                     | -      | False    |
| color     | icon color              | string                          | \<css color\>                                                                   | -      | False    |
| useClass  | custom css class        | string[] \| string \| undefined | -                                                                               | -      | False    |
| useStyle  | custom style            | Object \| undefined             | -                                                                               | -      | False    |
| ref       | Ref                     | React.Ref<any,any>              | -                                                                               | -      | Fasle    |
| component | custom render Component | React.ElementType               | -                                                                               | i      | False    |

For available `IconName ` see [https://remixicon.com/](https://remixicon.com/)

## Local development

### Required

- Nodejs >= 14
- npm

### Start Coding

1. Read the [create-react-library README](https://github.com/transitive-bullshit/create-react-library#readme)
2. Checkout the `scripts/parse.css.js`. This shoud be run with `pre-hook` of ` npm start`. Use this script to parse `remixicon.css` and generate `src/interface.ts`
3. Checkout `src/index.tsx` and make your awesome code

## License

MIT © [YoRolling](https://github.com/YoRolling)

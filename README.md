# @effector/remark-heading-id

This is fork of the original [imcuttle/remark-heading-id](https://github.com/imcuttle/remark-heading-id).

> The remark plugin cannot support [custom heading id](https://www.markdownguide.org/extended-syntax/#heading-ids) because in [mdx](https://github.com/mdx-js/mdx) syntax like `{#hello}` is parsed like JSX substitutions.
> Default Id

```bash
npm add @effector/remark-heading-id
```

### Custom Heading Input

```markdown
### My Great Heading [#custom-id]
```

### Custom Heading Output

```html
<h3 id="custom-id">My Great Heading</h3>
```

### API

```js
import { remarkHeadingId } from '@effector/remark-heading-id';

unified().use(remarkHeadingId[, options])
```

#### options

Configuration (optional).

#### options.defaults

Whether to add default ids based on the title text (boolean, default: false).

#### options.uniqueDefaults

Whether to ensure that the default ids created by options.defaults are unique (boolean, default: true).
Only relevant when `options.defaults == true`.
Example:

```markdown
## heading

### introduction

### argument

## heading

### introduction

### argument
```

Will generate this output when `options.defaults == true` and `options.uniqueDefaults == true`:

```html
<h2 id="heading">heading</h2>
<h3 id="indroduction">indroduction</h3>
<h3 id="argument">argument</h3>
<h2 id="heading-1">heading</h2>
<h3 id="introduction-1">introduction</h3>
<h3 id="argument-1">argument</h3>
```

Instead of this output, which is generated when `options.defaults == true` and `options.uniqueDefaults == false`:

```html
<h2 id="heading">heading</h2>
<h3 id="indroduction">indroduction</h3>
<h3 id="argument">argument</h3>
<h2 id="heading">heading</h2>
<h3 id="introduction">introduction</h3>
<h3 id="argument">argument</h3>
```

The difference being that the last output contains duplicate ids in the generated html, which are avoided using
`options.uniqueDefaults = true`.

##### Default Heading Input

```markdown
### My Great Heading
```

##### Default Heading Output

```html
<h3 id="my-great-heading">My Great Heading</h3>
```

## Contributing

- Fork it!
- Create your new branch:
  `git checkout -b feature-new` or `git checkout -b fix-which-bug`
- Start your magic work now
- Make sure npm test passes
- Commit your changes:
  `git commit -am 'feat: some description (close #123)'` or `git commit -am 'fix: some description (fix #123)'`
- Push to the branch: `git push`
- Submit a pull request :)

## Authors

This library is written and maintained by imcuttle, <a href="mailto:moyuyc95@gmail.com">moyuyc95@gmail.com</a>.

This library is forked and maintained by Effector Core Team and [Sergey Sova](https://github.com/sergeysova).

## License

MIT - [imcuttle](https://github.com/imcuttle) 🐟
MIT - 2024 [effector](https://github.com/effector)

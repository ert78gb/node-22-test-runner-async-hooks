This repository is for reproduce `node --test` async `before`, `beforeEach` `afterEach` and `after` hooks running order issue.

The test case starts executing befor the `before` hook is finished. In node 21 everything works as expected.

## Steps to reproduce

- clone the repository
- install node 22.0.0
- run `npm install`
- run `npm test`

## Expected behavior

The console log should be:

```
before start
before end
beforeEach start
beforeEach end
test case start
test case end
afterEach start
afterEach end
after start
after end
```

Instead, the console log is:

```
before start
beforeEach start << "beforEach" strarts before "before end"
before end
beforeEach end
test case start
test case end
afterEach start
afterEach end
after start
after end
```

In earlier node version the `await` keyword helped before the hooks but in node 22.0.0 it doesn't work.

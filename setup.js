module.exports = {
  remove: [
    { file: 'app/actions/counter.ts' },
    { file: 'app/components/Counter.scss' },
    { file: 'app/components/Counter.tsx' },
    { file: 'app/containers/CounterPage.tsx' },
    { file: 'app/reducers/counter.ts' },
    { file: 'test/actions/counter.spec.ts' },
    { file: 'test/components/Counter.spec.tsx' },
    { file: 'test/containers/CounterPage.spec.tsx' },
    { file: 'test/reducers/counter.spec.ts' }
  ],
  clean: [
    {
      file: 'app/reducers/index.ts',
      pattern: /counter/
    },
    {
      file: 'app/store/configureStore.development.ts',
      pattern: /counterActions/
    },
    {
      file: 'app/app.global.scss',
      clear: true
    },
    {
      file: 'app/routes.tsx',
      pattern: /CounterPage/
    },
    {
      file: 'test/e2e.ts',
      clear: true
    },
    {
      file: 'README.md',
      clear: true
    },
    {
      file: 'app/components/Home.tsx',
      pattern: /(h2|Link to)/
    }
  ],
  add: [
    { file: 'app/actions/.gitkeep' },
    { file: 'test/actions/.gitkeep' },
    { file: 'test/components/.gitkeep' },
    { file: 'test/containers/.gitkeep' },
    { file: 'test/reducers/.gitkeep' }
  ]
};

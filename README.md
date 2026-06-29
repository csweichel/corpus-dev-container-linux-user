# Linux User Corpus Fixture

This is a minimal Node.js project for devcontainer setup evaluation.

The project intentionally requires development commands to run as the Linux user
`node`. The build writes a generated file and the development server starts only
after checking the effective user:

```sh
npm run build
npm run dev
```

A good devcontainer setup must select the `node` user, configure the
devcontainer so post-rebuild commands run as that user, and verify the user after
the rebuild. Running the commands as `root`, `vscode`, or another user is
an invalid setup for this fixture.

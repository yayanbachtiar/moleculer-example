[![Codacy Badge](https://api.codacy.com/project/badge/Grade/654aa1c9fb104a5d8802761f0e1c6c56)](https://app.codacy.com/app/yayanbachtiar/moleculer-example?utm_source=github.com&utm_medium=referral&utm_content=yayanbachtiar/moleculer-example&utm_campaign=Badge_Grade_Dashboard)
[![Moleculer](https://badgen.net/badge/Powered%20by/Moleculer/0e83cd)](https://moleculer.services)
[![Build Status](https://travis-ci.com/yayanbachtiar/moleculer-example.svg?branch=master)](https://travis-ci.com/yayanbachtiar/moleculer-example)
[![Coverage Status](https://coveralls.io/repos/github/yayanbachtiar/moleculer-example/badge.svg?branch=master)](https://coveralls.io/github/yayanbachtiar/moleculer-example?branch=master)
# myprod

## NPM scripts

- `npm run dev`: Start development mode (load all services locally with hot-reload & REPL)
- `npm run start`: Start production mode (set `SERVICES` env variable to load certain services)
- `npm run cli`: Start a CLI and connect to production. Don't forget to set production namespace with `--ns` argument in script
- `npm run lint`: Run ESLint
- `npm run ci`: Run continuous test mode with watching
- `npm test`: Run tests & generate coverage report
- `npm run dc:up`: Start the stack with Docker Compose
- `npm run dc:down`: Stop the stack with Docker Compose

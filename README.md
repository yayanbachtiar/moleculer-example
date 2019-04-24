[![Moleculer](https://badgen.net/badge/Powered%20by/Moleculer/0e83cd)](https://moleculer.services)
[![Build Status](https://travis-ci.com/yayanbachtiar/moleculer-example.svg?branch=master)](https://travis-ci.com/yayanbachtiar/moleculer-example)
[![Coverage Status](https://coveralls.io/repos/github/yayanbachtiar/moleculer-example/badge.svg?branch=master)](https://coveralls.io/github/yayanbachtiar/moleculer-example?branch=master)
<a href="https://codeclimate.com/github/yayanbachtiar/moleculer-example/maintainability"><img src="https://api.codeclimate.com/v1/badges/157a2f901b592016eaac/maintainability" /></a>
[![dependencies Status](https://david-dm.org/yayanbachtiar/moleculer-example/status.svg)](https://david-dm.org/yayanbachtiar/moleculer-example)

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

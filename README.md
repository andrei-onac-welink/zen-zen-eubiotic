# Installation

## Requirements

You need the following packages installed:

| Name     | Link                                                              |
|----------|-------------------------------------------------------------------|
| `bash`   | https://www.gnu.org/software/bash/                                |
| `docker` | https://docs.docker.com/engine/install/                           |
| `npm`    | https://docs.npmjs.com/downloading-and-installing-node-js-and-npm |
| `git`    | https://git-scm.com/                                              |

## Setup

### Install and Build

```
cd /docker
```

### Install Dependencies

```
docker compose run -it --rm hugo npm ci
```

### Run

```
docker compose up
```

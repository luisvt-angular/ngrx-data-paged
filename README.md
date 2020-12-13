# Ngrx Data Paged

NgRx Data Paged is an extension that extends [@ngrx/data](https://ngrx.io/guide/data) adding pagination, and some other features.

## Installation

### Install Dependencies

First Install [@ngrx/store](https://ngrx.io/guide/store), [@ngrx/store-devtools](https://ngrx.io/guide/store-devtools), [@ngrx/effects](https://ngrx.io/guide/effects), [@ngrx/entity](https://ngrx.io/guide/entity), and [@ngrx/data](https://ngrx.io/guide/data):

With `npm`

```shell
npm install @ngrx/store  @ngrx/store-devtools  @ngrx/effects  @ngrx/entity  @ngrx/data --save
```

With `yarn`

```shell
yarn add @ngrx/store  @ngrx/store-devtools  @ngrx/effects  @ngrx/entity  @ngrx/data
```

With `pnpm`

```shell
pnpm install @ngrx/store  @ngrx/store-devtools  @ngrx/effects  @ngrx/entity  @ngrx/data
```

With `ng add`

```shell
ng add @ngrx/store@latest
ng add @ngrx/store-devtools@latest
ng add  @ngrx/effects@latest
ng add @ngrx/entity@latest
ng add @ngrx/data@latest
```

### Install `ngrx-data-paged`

With `npm`

```shell
npm install ngrx-data-paged --save
```

With `yarn`

```shell
yarn add ngrx-data-paged
```

With `pnpm`

```shell
pnpm install ngrx-data-paged
```

## Replace code

Replace next line in `app.module.ts`:

```ts
import { EntityDataModule } from '@ngrx/data';
```

by:
```ts
import { EntityDataModule } from 'ngrx-data-paged';
```

And next line in `entity-metadata.ts`

```ts
import { EntityDataModuleConfig, EntityMetadataMap } from '@ngrx/data';
```

by:
```ts
import { EntityDataModuleConfig } from 'ngrx-data-paged';
import { EntityMetadataMap } from '@ngrx/data';
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

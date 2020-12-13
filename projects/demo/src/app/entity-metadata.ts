import { EntityDataModuleConfig } from 'ngrx-data-paged';
import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Post: {}
};

const pluralNames = {  };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
  dataServiceConfig: {
    root: 'https://jsonplaceholder.typicode.com/'
  }
};

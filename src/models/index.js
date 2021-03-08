// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PlanTree, PlanElement } = initSchema(schema);

export {
  PlanTree,
  PlanElement
};
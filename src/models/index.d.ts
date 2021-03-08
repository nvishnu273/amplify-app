import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class PlanTree {
  readonly id: string;
  readonly name: string;
  readonly tree?: PlanElement;
  constructor(init: ModelInit<PlanTree>);
  static copyOf(source: PlanTree, mutator: (draft: MutableModel<PlanTree>) => MutableModel<PlanTree> | void): PlanTree;
}

export declare class PlanElement {
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly parentID: string;
  readonly children?: PlanElement;
  constructor(init: ModelInit<PlanElement>);
  static copyOf(source: PlanElement, mutator: (draft: MutableModel<PlanElement>) => MutableModel<PlanElement> | void): PlanElement;
}
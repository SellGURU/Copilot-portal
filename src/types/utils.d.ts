type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<C extends React.ElementType, Props = {}> = Omit<
  React.PropsWithChildren<AsProp<C>>,
  keyof Props
> &
  Props &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = {}
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : T;

type DotPrefix<T extends string> = T extends "" ? "" : `.${T}`;

type DotNestedKeys<T> = (
  T extends object
    ? {
        [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<
          DotNestedKeys<T[K]>
        >}`;
      }[Exclude<keyof T, symbol>]
    : ""
) extends infer D
  ? Extract<D, string>
  : never;

type PatientListData = {
  id:string
  patientName:string
  memberId:string
  age:string
  sex:string
  weight:string
  enrollDate:string
  lastFollowUp:string
  status:string
  heartRate:string
  bloodPressure:string
  temperature:string
  respirationRate:string
  SPO2:string
}
/* eslint-disable @typescript-eslint/no-explicit-any */
type ChatType =  {
  from: "Ai" | "user";
  text: string;
  message_key:string;
  currentconverationid: string;
  instanceid: string;
  audio_file: string;
  additinalData:Array<any>
}

type NodesType = {
    id: string,
    label: string,
    size: number
    category1:string
    category2:string
    color:string
}

type EdgeType = {
    source: string,
    target: string,
    weight: number
}

type GetEdgeAndNodesType = {
  nodes:Array<NodesType>,
  edges:Array<EdgeType>
}

interface SideMenuItem  {
    title:string
    src:string
    path:string
}

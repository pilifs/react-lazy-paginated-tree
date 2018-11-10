// @flow

export type Node = {
  id: string,
  name: string,
  description: string,
  children: Array<Node>,
  numChildren: number,
  page: number,
  expanded: boolean,
  selected: boolean,
};

export type Cache = Object;

export type Event = Object;

export type TreeProps = {
  depth: number,
  nodes: Array<Node>,
  pageLimit?: number,
  parse?: Function,
  style?: Object, // equivalent to overriding theme.treeStyle
  className?: string | Object,
  theme?: any,
  indentWidth?: number,
  List?: any,
  ListItem?: any,
  Expander?: any,
  Checkbox?: any,
  Body?: any,
  Paginator?: any,
  Loading?: any,
  DepthPadding?: any,
  toggle?: Function,
  onKeyToggle?: Function,
  select?: Function,
  onKeySelect?: Function,
  loadChildren?: Function,
  selectCallback?: Function,
  toggleCallback?: Function,
  useLocalState?: boolean,
  paginated?: boolean,
};

export type TreeNodeProps = {
  depth: number,
  node: Node,
  theme: any,
  indentWidth: number,
  List: any,
  ListItem: any,
  Expander: any,
  Checkbox: any,
  Body: any,
  Paginator: any,
  Loading: any,
  DepthPadding: any,
  loadChildren: Function,
  parse: ?Function,
  pageLimit: ?number,
  selectCallback?: Function,
  toggleCallback?: Function,
  useLocalState?: boolean,
  paginated?: boolean,
};

export type TreeNodeState = {
  expanderLoading: boolean,
  paginatorLoading: boolean,
  expanded: boolean,
  selected: boolean,
  children: Array<Node>,
  page: number,
};

export type CheckboxProps = {
  checked: boolean,
  theme: any,
  node: Node,
  onChange: Function,
  onKeyPress: Function,
  selected: boolean,
};

export type BodyProps = {
  theme: any,
  node: Node,
  onClick: Function,
  onKeyPress: Function,
};

export type ExpanderProps = {
  theme: any,
  node: Node,
  onClick: Function,
  onKeyPress: Function,
  expanded: boolean,
};

export type PaginatorProps = {
  theme: any,
  node: Node,
  onClick: Function,
  onKeyPress: Function,
  indentWidth: number,
  depth: number,
};

export type ListItemProps = {
  theme: any,
  node: Node,
  children: any,
  onClick: Function,
  onKeyPress: Function,
};

export type ListProps = {
  theme: any,
  node: Node,
  children: any,
};

export type LoadingProps = {
  theme: any,
  node: Node,
  indentWidth: number,
  depth: number,
};

export type DepthPaddingProps = {
  indentWidth: number,
  depth: number,
  children: any,
};

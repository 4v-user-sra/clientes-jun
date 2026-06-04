export type StatusType = 'stable' | 'warning' | 'action-required' | 'new';

export interface Metric {
  label: string;
  value: string;
}

export interface ClientData {
  id: string;
  name: string;
  status: StatusType;
  metrics: Metric[];
  currentSituation: string;
  attentionPoints: string[];
  actionPlan: string[];
  observations: string;
}

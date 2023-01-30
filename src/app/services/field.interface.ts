export interface IUpdateField extends IField {
  fieldId: string;
}

export interface ISuccessDashboard extends IDefaultResponse {
  data: {
    evolution: {
      data: { x: number; y: number }[];
      xLabel: string;
      yLabel: string;
    };
    rain: IRain;
    efficiency: {
      data: number;
      label: string;
    };
  };
}

export interface IGetFilder {
  data: IField;
}

export interface IField {
  grower: string;
  farm: string;
  field: string;
}

export interface IRain {
  data: { x: string; y: number }[];
  xLabel: string;
  yLabel: string;
}

export interface IDefaultResponse {
  success: {
    title: string;
  } | null;
  warning: {
    title: string;
    description: string;
  } | null;
  error: {
    title: string;
    description: string;
    status: number;
  } | null;
}

export interface IUpdateField extends IField {
  fieldId: string;
}

export interface ISuccessDashboard {
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

export interface IField {
  data: {
    grower: string;
    farm: string;
    field: string;
  };
}

export interface IRain {
  data: { x: string; y: number }[];
  xLabel: string;
  yLabel: string;
}

import { Observable, Subject } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FieldService {
  private readonly DEFAULT_URL = "https://job.datafarm.app/api/field";

  private mock = new Subject<ISuccessDashboard>();

  private setMock() {
    this.mock.next(data);
  }

  constructor(private httpClient: HttpClient) {
    this.setMock();
  }

  /**
   * Get field by id
   * @param fieldId
   * @returns
   */
  getField(fieldId?: string): Observable<ISuccessDashboard> {
    return new Observable((observer) => observer.next(data));

    // return this.httpClient
    //   .get<ISuccesField>(`${this.DEFAULT_URL}/${fieldId}`)
    //   .subscribe((data) => console.log(data));
  }
}

interface ISuccesField {
  data: {
    grower: "string";
    farm: "string";
    field: "string";
  };
  success: {
    title: "string";
  };
  warning: {
    title: "string";
    description: "string";
  };
  error: {
    title: "string";
    description: "string";
    status: 0;
  };
}

interface ISuccessDashboard {
  data: {
    evolution: {
      data: { x: number; y: number }[];
      xLabel: string;
      yLabel: string;
    };
    rain: {
      data: { x: string; y: number }[];
      xLabel: string;
      yLabel: string;
    };
    efficiency: {
      data: number;
      label: string;
    };
  };
}

const data: ISuccessDashboard = {
  data: {
    evolution: {
      data: [
        {
          x: 0,
          y: 27,
        },
        {
          x: 1,
          y: 9,
        },
        {
          x: 2,
          y: 8,
        },
        {
          x: 3,
          y: 29,
        },
        {
          x: 4,
          y: 19,
        },
        {
          x: 5,
          y: 23,
        },
        {
          x: 6,
          y: 13,
        },
        {
          x: 7,
          y: 24,
        },
        {
          x: 8,
          y: 2,
        },
        {
          x: 9,
          y: 5,
        },
        {
          x: 10,
          y: 5,
        },
        {
          x: 11,
          y: 7,
        },
        {
          x: 12,
          y: 16,
        },
        {
          x: 13,
          y: 14,
        },
        {
          x: 14,
          y: 24,
        },
        {
          x: 15,
          y: 15,
        },
        {
          x: 16,
          y: 20,
        },
        {
          x: 17,
          y: 21,
        },
        {
          x: 18,
          y: 1,
        },
        {
          x: 19,
          y: 2,
        },
        {
          x: 20,
          y: 17,
        },
        {
          x: 21,
          y: 12,
        },
        {
          x: 22,
          y: 11,
        },
        {
          x: 23,
          y: 28,
        },
        {
          x: 24,
          y: 12,
        },
        {
          x: 25,
          y: 24,
        },
        {
          x: 26,
          y: 12,
        },
        {
          x: 27,
          y: 6,
        },
        {
          x: 28,
          y: 10,
        },
        {
          x: 29,
          y: 13,
        },
        {
          x: 30,
          y: 15,
        },
        {
          x: 31,
          y: 12,
        },
        {
          x: 32,
          y: 14,
        },
        {
          x: 33,
          y: 20,
        },
        {
          x: 34,
          y: 26,
        },
        {
          x: 35,
          y: 18,
        },
        {
          x: 36,
          y: 1,
        },
        {
          x: 37,
          y: 14,
        },
        {
          x: 38,
          y: 19,
        },
        {
          x: 39,
          y: 3,
        },
        {
          x: 40,
          y: 15,
        },
        {
          x: 41,
          y: 11,
        },
        {
          x: 42,
          y: 21,
        },
        {
          x: 43,
          y: 21,
        },
        {
          x: 44,
          y: 1,
        },
        {
          x: 45,
          y: 12,
        },
        {
          x: 46,
          y: 6,
        },
        {
          x: 47,
          y: 10,
        },
        {
          x: 48,
          y: 24,
        },
        {
          x: 49,
          y: 2,
        },
        {
          x: 50,
          y: 29,
        },
        {
          x: 51,
          y: 15,
        },
        {
          x: 52,
          y: 15,
        },
        {
          x: 53,
          y: 27,
        },
        {
          x: 54,
          y: 9,
        },
        {
          x: 55,
          y: 16,
        },
        {
          x: 56,
          y: 7,
        },
        {
          x: 57,
          y: 12,
        },
        {
          x: 58,
          y: 24,
        },
        {
          x: 59,
          y: 23,
        },
      ],
      xLabel: "Days",
      yLabel: "Number of pests",
    },
    rain: {
      data: [
        {
          x: "2022-12-01",
          y: 22,
        },
        {
          x: "2022-12-02",
          y: 28,
        },
        {
          x: "2022-12-03",
          y: 14,
        },
        {
          x: "2022-12-04",
          y: 6,
        },
        {
          x: "2022-12-05",
          y: 15,
        },
        {
          x: "2022-12-06",
          y: 18,
        },
        {
          x: "2022-12-07",
          y: 13,
        },
        {
          x: "2022-12-08",
          y: 20,
        },
        {
          x: "2022-12-09",
          y: 28,
        },
        {
          x: "2022-12-10",
          y: 18,
        },
        {
          x: "2022-12-11",
          y: 2,
        },
        {
          x: "2022-12-12",
          y: 10,
        },
        {
          x: "2022-12-13",
          y: 4,
        },
        {
          x: "2022-12-14",
          y: 27,
        },
        {
          x: "2022-12-15",
          y: 8,
        },
        {
          x: "2022-12-16",
          y: 4,
        },
        {
          x: "2022-12-17",
          y: 27,
        },
        {
          x: "2022-12-18",
          y: 17,
        },
        {
          x: "2022-12-19",
          y: 23,
        },
        {
          x: "2022-12-20",
          y: 16,
        },
        {
          x: "2022-12-21",
          y: 28,
        },
        {
          x: "2022-12-22",
          y: 20,
        },
        {
          x: "2022-12-23",
          y: 1,
        },
        {
          x: "2022-12-24",
          y: 2,
        },
        {
          x: "2022-12-25",
          y: 14,
        },
        {
          x: "2022-12-26",
          y: 27,
        },
        {
          x: "2022-12-27",
          y: 23,
        },
        {
          x: "2022-12-28",
          y: 16,
        },
        {
          x: "2022-12-29",
          y: 1,
        },
      ],
      xLabel: "Date",
      yLabel: "mm",
    },
    efficiency: {
      data: 70,
      label: "%",
    },
  },
};

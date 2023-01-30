import { IGetFilder, ISuccessDashboard, IUpdateField } from "./field.interface";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FieldService {
  private readonly DEFAULT_URL = "https://job.datafarm.app/api/field";

  constructor(private httpClient: HttpClient) {}

  /**
   * Get field by id
   * @param fieldId string
   * @returns Observer
   */
  getField(fieldId: string): Observable<IGetFilder> {
    return this.httpClient.get<IGetFilder>(`${this.DEFAULT_URL}/${fieldId}`);
  }

  /**
   * Get field data to dashboard by id
   * @param fieldId
   * @returns
   */
  getFieldDashboard(fieldId: string): Observable<ISuccessDashboard> {
    return this.httpClient.get<ISuccessDashboard>(
      `${this.DEFAULT_URL}/${fieldId}/dashboard`
    );
  }

  /**
   * Update data field - (grower, farm, field)
   * @param field
   * @returns Observable
   */
  updateField({ fieldId, ...field }: IUpdateField): Observable<IGetFilder> {
    return this.httpClient.put<IGetFilder>(
      `${this.DEFAULT_URL}/${fieldId}`,
      field
    );
  }
}

import * as L from "leaflet";

import { Feature } from "geojson";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MapData } from "./map.model";
import { Observable } from "rxjs";
import { PathOptions } from "leaflet";

@Injectable({
  providedIn: "root",
})
export class MapService {
  public activeField: string | undefined;

  /* All festures registred - key fieldId */
  private mapFeature = new Map<string, any>();

  private DEFAULT_URL = `/api`;

  // @ts-ignore
  private _map: MapData;

  constructor(private httpClient: HttpClient) {}

  /**
   * Remove highlight on specific field
   * @param idFeature - string
   * @returns
   */
  resetHighlight(idFeature: string | undefined): void {
    if (!idFeature) return;

    const feature = this.mapFeature.get(idFeature);

    if (!feature) return;

    feature.setStyle({
      stroke: false,
      fillColor: "#fff",
      fillOpacity: 0.2,
    });

    this.activeField = "";
  }

  /**
   * Get all farms
   * @returns Observable - IFarmResponse[]
   */
  private getFarms(): Observable<IFarmResponse> {
    return this.httpClient.get<IFarmResponse>("/farm");
  }

  insertFields() {
    this.getFarms().subscribe((response) => {
      const fields: Feature[] = response.data.fields.map(
        ({ geometry, properties, type }) => ({
          geometry,
          properties,
          type,
        })
      );

      this.insertFeature(fields);
    });
  }

  /**
   * Add highlight on specific field
   * @param idFeature - string
   * @returns
   */
  private highlightFeature(idFeature: string | undefined) {
    if (!idFeature) return;

    const feature = this.mapFeature.get(idFeature);

    if (!feature) return;

    feature.setStyle({
      stroke: true,
      color: "#fff",
      fillColor: "#000",
      fillOpacity: 0.2,
    });
  }

  /**
   * The feature is a geometry with properties, this geometry can be polygons or points.
   */
  private insertFeature(
    feature: Feature | Feature[],
    style?: PathOptions
  ): void {
    if (!Array.isArray(feature)) {
      feature = [feature];
    }

    if (style == undefined) {
      style = {
        stroke: false,
        fillColor: "#fff",
        fillOpacity: 0.2,
      };
    }

    feature.map((f) => {
      const idField = f.properties?.["idField"];

      const geojson = L.geoJSON(f, {
        style: style,
      })
        .addTo(this._map)
        .on("click", () => {
          this.resetHighlight(this.activeField);

          this.activeField = idField;

          this.highlightFeature(idField);
        });

      this.mapFeature.set(idField, geojson);
    });
  }

  get map(): MapData {
    if (this._map == null) {
      throw "map is undefined";
    }
    return this._map;
  }

  set map(basemap: MapData) {
    this._map = basemap;
  }
}

interface IFarmResponse {
  data: {
    name: string;
    fields: Feature[];
  };
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

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

const URL = environment.url_server;
const API_KEY = environment.api_key;

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];

  resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {}

  buscarGifs(query: string = '') {
    const params = new HttpParams()
      .set('api_key', API_KEY)
      .set('limit', 20)
      .set('q', query);

    this.http
      .get<SearchGifsResponse>(`${URL}`, { params })
      .subscribe((resp) => {
        this.resultados = resp.data;

        console.log(this.resultados);
      });
  }
}

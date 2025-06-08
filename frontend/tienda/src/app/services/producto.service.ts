import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Producto } from "../models/producto";
import { Global } from "./global";
import { Observable } from "rxjs";

@Injectable()
export class ProductoService {
  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  // Ver información de todos los productos
  getProductos(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'productos', { headers: headers });
  }

  // Guardar producto
  guardarProducto(producto: Producto): Observable<any> {
    let params = JSON.stringify(producto);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'guardar-producto', params, { headers: headers });
  }

  // Obtener datos de un producto
  getProducto(id: String): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'productos/' + id, { headers: headers });
  }

  // Actualizar datos de un producto
  updateProducto(producto: Producto): Observable<any> {
    let params = JSON.stringify(producto);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url + 'productos/' + producto._id, params, { headers: headers });
  }

  // Eliminar un producto
  deleteProducto(id: String): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + 'productos/' + id, { headers: headers });
  }
}

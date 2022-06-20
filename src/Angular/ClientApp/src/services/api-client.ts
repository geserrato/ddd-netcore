/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.11.1.0 (NJsonSchema v10.4.3.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable()
export class Client {
  private http: HttpClient;
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
    this.http = http;
    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
  }

  /**
   * @return Success
   */
  getProducts(): Observable<GetProducts_Response[]> {
    let url_ = this.baseUrl + "/api/products";
    url_ = url_.replace(/[?&]$/, "");

    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    };

    return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetProducts(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetProducts(<any>response_);
        } catch (e) {
          return <Observable<GetProducts_Response[]>><any>_observableThrow(e);
        }
      } else
        return <Observable<GetProducts_Response[]>><any>_observableThrow(response_);
    }));
  }

  protected processGetProducts(response: HttpResponseBase): Observable<GetProducts_Response[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(GetProducts_Response.fromJS(item));
        }
        else {
          result200 = <any>null;
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<GetProducts_Response[]>(<any>null);
  }

  /**
   * @return Success
   */
  createProduct(body: CreateProduct_Command): Observable<void> {
    let url_ = this.baseUrl + "/api/products";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processCreateProduct(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processCreateProduct(<any>response_);
        } catch (e) {
          return <Observable<void>><any>_observableThrow(e);
        }
      } else
        return <Observable<void>><any>_observableThrow(response_);
    }));
  }

  protected processCreateProduct(response: HttpResponseBase): Observable<void> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
    if (status === 400) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result400: any = null;
        let resultData400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result400 = HttpValidationProblemDetails.fromJS(resultData400);
        return throwException("Bad Request", status, _responseText, _headers, result400);
      }));
    } else if (status === 202) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return _observableOf<void>(<any>null);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<void>(<any>null);
  }

  /**
   * @return Success
   */
  updateProduct(body: UpdateProduct_Command): Observable<void> {
    let url_ = this.baseUrl + "/api/products";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    };

    return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUpdateProduct(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUpdateProduct(<any>response_);
        } catch (e) {
          return <Observable<void>><any>_observableThrow(e);
        }
      } else
        return <Observable<void>><any>_observableThrow(response_);
    }));
  }

  protected processUpdateProduct(response: HttpResponseBase): Observable<void> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
    if (status === 400) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result400: any = null;
        let resultData400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result400 = HttpValidationProblemDetails.fromJS(resultData400);
        return throwException("Bad Request", status, _responseText, _headers, result400);
      }));
    } else if (status === 202) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return _observableOf<void>(<any>null);
      }));
    } else if (status === 404) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("Not Found", status, _responseText, _headers);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<void>(<any>null);
  }

  /**
   * @return Success
   */
  deleteProduct(productId: number): Observable<void> {
    let url_ = this.baseUrl + "/api/products/{productId}";
    if (productId === undefined || productId === null)
      throw new Error("The parameter 'productId' must be defined.");
    url_ = url_.replace("{productId}", encodeURIComponent("" + productId));
    url_ = url_.replace(/[?&]$/, "");

    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
      })
    };

    return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processDeleteProduct(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processDeleteProduct(<any>response_);
        } catch (e) {
          return <Observable<void>><any>_observableThrow(e);
        }
      } else
        return <Observable<void>><any>_observableThrow(response_);
    }));
  }

  protected processDeleteProduct(response: HttpResponseBase): Observable<void> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
    if (status === 202) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return _observableOf<void>(<any>null);
      }));
    } else if (status === 404) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result404: any = null;
        let resultData404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result404 = ProblemDetails.fromJS(resultData404);
        return throwException("Not Found", status, _responseText, _headers, result404);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<void>(<any>null);
  }
}

export class HttpValidationProblemDetails implements IHttpValidationProblemDetails {
  type?: string | undefined;
  title?: string | undefined;
  status?: number | undefined;
  detail?: string | undefined;
  instance?: string | undefined;
  errors?: { [key: string]: string[]; } | undefined;

  constructor(data?: IHttpValidationProblemDetails) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.type = _data["type"];
      this.title = _data["title"];
      this.status = _data["status"];
      this.detail = _data["detail"];
      this.instance = _data["instance"];
      if (_data["errors"]) {
        this.errors = {} as any;
        for (let key in _data["errors"]) {
          if (_data["errors"].hasOwnProperty(key))
            (<any>this.errors)![key] = _data["errors"][key] !== undefined ? _data["errors"][key] : [];
        }
      }
    }
  }

  static fromJS(data: any): HttpValidationProblemDetails {
    data = typeof data === 'object' ? data : {};
    let result = new HttpValidationProblemDetails();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["type"] = this.type;
    data["title"] = this.title;
    data["status"] = this.status;
    data["detail"] = this.detail;
    data["instance"] = this.instance;
    if (this.errors) {
      data["errors"] = {};
      for (let key in this.errors) {
        if (this.errors.hasOwnProperty(key))
          (<any>data["errors"])[key] = this.errors[key];
      }
    }
    return data;
  }
}

export interface IHttpValidationProblemDetails {
  type?: string | undefined;
  title?: string | undefined;
  status?: number | undefined;
  detail?: string | undefined;
  instance?: string | undefined;
  errors?: { [key: string]: string[]; } | undefined;
}

export class ProblemDetails implements IProblemDetails {
  type?: string | undefined;
  title?: string | undefined;
  status?: number | undefined;
  detail?: string | undefined;
  instance?: string | undefined;

  constructor(data?: IProblemDetails) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.type = _data["type"];
      this.title = _data["title"];
      this.status = _data["status"];
      this.detail = _data["detail"];
      this.instance = _data["instance"];
    }
  }

  static fromJS(data: any): ProblemDetails {
    data = typeof data === 'object' ? data : {};
    let result = new ProblemDetails();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["type"] = this.type;
    data["title"] = this.title;
    data["status"] = this.status;
    data["detail"] = this.detail;
    data["instance"] = this.instance;
    return data;
  }
}

export interface IProblemDetails {
  type?: string | undefined;
  title?: string | undefined;
  status?: number | undefined;
  detail?: string | undefined;
  instance?: string | undefined;
}

export class CreateProduct_Command implements ICreateProduct_Command {
  name?: string | undefined;
  description?: string | undefined;
  price?: number;

  constructor(data?: ICreateProduct_Command) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.name = _data["name"];
      this.description = _data["description"];
      this.price = _data["price"];
    }
  }

  static fromJS(data: any): CreateProduct_Command {
    data = typeof data === 'object' ? data : {};
    let result = new CreateProduct_Command();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["name"] = this.name;
    data["description"] = this.description;
    data["price"] = this.price;
    return data;
  }
}

export interface ICreateProduct_Command {
  name?: string | undefined;
  description?: string | undefined;
  price?: number;
}

export class UpdateProduct_Command implements IUpdateProduct_Command {
  productId?: number;
  name?: string | undefined;
  description?: string | undefined;
  price?: number;

  constructor(data?: IUpdateProduct_Command) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.productId = _data["productId"];
      this.name = _data["name"];
      this.description = _data["description"];
      this.price = _data["price"];
    }
  }

  static fromJS(data: any): UpdateProduct_Command {
    data = typeof data === 'object' ? data : {};
    let result = new UpdateProduct_Command();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["productId"] = this.productId;
    data["name"] = this.name;
    data["description"] = this.description;
    data["price"] = this.price;
    return data;
  }
}

export interface IUpdateProduct_Command {
  productId?: number;
  name?: string | undefined;
  description?: string | undefined;
  price?: number;
}

export class GetProducts_Response implements IGetProducts_Response {
  productId?: number;
  name?: string | undefined;
  description?: string | undefined;
  price?: number;

  constructor(data?: IGetProducts_Response) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.productId = _data["productId"];
      this.name = _data["name"];
      this.description = _data["description"];
      this.price = _data["price"];
    }
  }

  static fromJS(data: any): GetProducts_Response {
    data = typeof data === 'object' ? data : {};
    let result = new GetProducts_Response();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["productId"] = this.productId;
    data["name"] = this.name;
    data["description"] = this.description;
    data["price"] = this.price;
    return data;
  }
}

export interface IGetProducts_Response {
  productId?: number;
  name?: string | undefined;
  description?: string | undefined;
  price?: number;
}

export class ApiException extends Error {
  message: string;
  status: number;
  response: string;
  headers: { [key: string]: any; };
  result: any;

  constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
    super();

    this.message = message;
    this.status = status;
    this.response = response;
    this.headers = headers;
    this.result = result;
  }

  protected isApiException = true;

  static isApiException(obj: any): obj is ApiException {
    return obj.isApiException === true;
  }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
  if (result !== null && result !== undefined)
    return _observableThrow(result);
  else
    return _observableThrow(new ApiException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
  return new Observable<string>((observer: any) => {
    if (!blob) {
      observer.next("");
      observer.complete();
    } else {
      let reader = new FileReader();
      reader.onload = event => {
        observer.next((<any>event.target).result);
        observer.complete();
      };
      reader.readAsText(blob);
    }
  });
}

import { Injectable, Inject, forwardRef, Injector } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class Middleware {
	
	constructor(private http: Http, private injector: Injector) {
	}

	public getRequest(url: string, data: string, options?: Object): Promise<any> {
		return this._builtedRequest('GET', url, data, options);
	}

	private _builtedRequest(requestType: string, url: string, data: string, options?: Object): Promise<any> {
		let requestURL = url;
		requestURL = requestURL + '/' + data;
		let requestOptions = Object.assign({}, options);
		requestOptions['method'] = requestType || 'GET';
		return this.http.request(requestURL, requestOptions)
			.toPromise()
			.then(this._parseReponse.bind(this))
			.catch(this._handleError.bind(this));
	}

	private _parseReponse(response: Response) {
        let data = response ? response.json() : {};

        if (data.success) {
            return Promise.reject(data);
        }

        return data || data.error || {};
    }

    private _handleError(error: Response | any) {
    	let errorMessage: Object;
    	errorMessage = {success: false, error: "An error ocurred" }

    	return Promise.reject(errorMessage);
    }
}
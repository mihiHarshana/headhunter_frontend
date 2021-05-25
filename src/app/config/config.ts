import {HttpHeaders} from '@angular/common/http';

export const  baseUrl = 'http://localhost:9008';
export const headerJson = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT' })};

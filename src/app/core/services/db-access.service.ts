import { Injectable } from '@angular/core';
import * as mysql from 'promise-mysql';

@Injectable({
  providedIn: 'root'
})
export class DbAccessService {

  readonly connection = mysql.createConnection(
    {
    host: 'db',
    user: 'docker',
    password: 'secret',
    database: 'typescript',
    multipleStatements: true
    }
  );

  constructor()
  {
  };

  SelectFunc(table: string, where :string)
  {
    let strQuery = 'select * from ' + table;
    if (where)
    {
      let strWhere = ' ' + where;
      strQuery += strWhere;
    }
    strQuery += ' ;';
    return this.SqlExec(strQuery);
  };

  InsertFunc(table: string, column: string, value :string)
  {
    let strQuery = 'insert into ' + table + ' ( ' + column + ' ) values ( ' + value + ' ) ;';
    return this.SqlExec(strQuery);
  };

  DeleteFunc(table: string, where :string)
  {
    let strQuery = 'delete ' + table + ' where ' + where + ' ;';
    return this.SqlExec(strQuery);
  };

  Updatefunc(table: string, set: string, where :string)
  {
    let strQuery = 'update ' + table + ' set ' + set + ' where ' + where + ' ;';
    return this.SqlExec(strQuery);
  };

  SqlExec(strQuery: string)
  {
    const result = this.connection.query(strQuery);
    this.connection.end();
    return result;
  }
}

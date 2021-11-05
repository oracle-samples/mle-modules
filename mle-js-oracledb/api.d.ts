/*
** Copyright (c) 2019, 2021, Oracle and/or its affiliates.
**
** The Universal Permissive License (UPL), Version 1.0
**
** Subject to the condition set forth below, permission is hereby granted to any
** person obtaining a copy of this software, associated documentation and/or data
** (collectively the "Software"), free of charge and under any and all copyright
** rights in the Software, and any and all patent rights owned or freely
** licensable by each licensor hereunder covering either (i) the unmodified
** Software as contributed to or provided by such licensor, or (ii) the Larger
** Works (as defined below), to deal in both
**
** (a) the Software, and
** (b) any piece of software and/or hardware listed in the lrgrwrks.txt file if
** one is included with the Software (each a "Larger Work" to which the Software
** is contributed by such licensors),
**
** without restriction, including without limitation the rights to copy, create
** derivative works of, display, perform, and distribute the Software and make,
** use, sell, offer for sale, import, export, have made, and have sold the
** Software and the Larger Work(s), and to sublicense the foregoing rights on
** either these or other terms.
**
** This license is subject to the following condition:
** The above copyright notice and either this complete permission notice or at
** a minimum a reference to the UPL must be included in all copies or
** substantial portions of the Software.
**
** THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
** IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
** FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
** AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
** LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
** OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
** SOFTWARE.
*/

/**
 * Interface for errors thrown by {@link execute}() or {@link executeMany}().
 */
export interface IError {
    /**
     * The Oracle error number. This value is undefined for non-Oracle errors.
     */
    errorNum?: number;
    /**
     * The text of the error message.
     */
    message: string;
    /**
     * The character offset into the SQL text that resulted in the Oracle
     * error. The value may be 0 in non-SQL contexts. This value is undefined
     * for non-Oracle errors.
     */
    offset?: number;
}
/**
 * Interface for representing entries in {@link IFetchInfo}.  See
 * https://github.com/oracle/node-oracledb/blob/v3.1.0/doc/api.md#propexecfetchinfo
 * for further information.
*/
export interface IFetchInfoColumnSpec {
    /**
     * The JavaScript data type to be fetched. One of the
     * mle-js-oracledb JS Type Constants, see {@link javaScriptType}.
     */
    type: JsType;
}
/**
 * Interface for representing {@link fetchInfo} in {@link execute}().
 */
export interface IFetchInfo {
    [columnName: string]: IFetchInfoColumnSpec;
}
/**
 * Interface for options used in {@link execute}().
 */
export interface IExecuteOptions {
    /**
     * Overrides parameters.{@link extendedMetaData}.
     */
    extendedMetaData?: boolean;
    /**
     * Overrides parameters.{@link fetchArraySize}.
     */
    fetchArraySize?: number;
    /**
     * Object defining how query column data should be represented in
     * JavaScript. It can be used in conjunction with, or instead of, the global
     * settings parameters.{@link fetchAsString}, parameters.{@link
     * fetchAsPlsqlWrapper}, and parameters.{@link fetchAsUint8Array}.  See
     * https://github.com/oracle/node-oracledb/blob/v3.1.0/doc/api.md#--42634-fetchinfo
     * for further information.
     */
    fetchInfo?: IFetchInfo;
    /**
     * Overrides parameters.{@link maxRows}.
     */
    maxRows?: number;
    /**
     * Overrides parameters.{@link outFormat}.
     */
    outFormat?: OutFormatType;
    /**
     * Determines whether query results should be returned as a {@link
     * IResultSet} object or directly. The default is false.
     */
    resultSet?: boolean;
}
/**
 * Interface for representing an entry in {@link IObjectBindDefs} or {@link ArrayBindDefs}.
*/
export interface IBindDef {
    /**
     * The direction of the bind. One of the Execute Bind Direction Constants
     * {@link BIND_IN}, {@link BIND_INOUT}, or {@link BIND_OUT}. The default is
     * {@link BIND_IN}.
     */
    dir: number;
    /**
     * Required for Strings and Uint8Arrays. Ignored for other types. Specifies
     * the maximum number of bytes allocated when processing each value of this
     * bind variable. When data is being passed into the database, maxSize
     * must be at least the size of the longest value. When data is being
     * returned from the database, maxSize must be the size of the longest
     * value. If maxSize is too small, {@link executeMany} will throw an error.
     */
    maxSize?: number;
    /**
     * The JavaScript data type to be bound. One of the
     * mle-js-oracledb JS Type Constants, see {@link javaScriptType}.
     */
    type: JsType;
}
/**
 * Interface for Object BindDefs.
 */
export interface IObjectBindDefs {
    [bindName: string]: IBindDef;
}
/**
 * Interface for Array BindDefs.
 */
export declare type ArrayBindDefs = IBindDef[];
/**
 * Interface for BindDefs which are either Array- or Object BindDefs.
 */
export declare type BindDefs = IObjectBindDefs | ArrayBindDefs;
/**
 * Interface for the options used in {@link executeMany}().
 */
export interface IExecuteManyOptions {
    /**
     * The bindDefs object defines the bind variable types, sizes and
     * directions.  This object is optional, but makes execution more efficient
     * if set explicitly.
     *
     * It must be an array (see {@link ArrayBindDefs}) or an object (see
     * {@link IObjectBindDefs}), depending on the structure of the binds
     * parameter.
     *
     * Each value in the bindDefs array or object must be an object containing
     * the keys dir, maxSize, and type for each bind variable, similar to how
     * {@link execute} bind parameters are defined (see {@link IBindDef}).
     */
    bindDefs?: BindDefs;
}
/**
 * Interface representing meta data as used in {@link IResultSet}s and statement info.
 */
export interface IMetaData {
    /**
     * The column name follows Oracle’s standard name-casing rules. It will commonly be uppercase,
     * since most applications create tables using unquoted, case-insensitive names.
     */
    name: string;
    /**
     * One of the mle-js-oracledb JS Type Constants, see {@link javaScriptType}.
     */
    fetchType?: JsType;
    /**
     * One of the mle-js-oracledb Database Type Constants, see {@link DbType}.
     */
    dbType?: number;
    /**
     * Database byte size. This is only set for {@link DB_TYPE_VARCHAR}, {@link
     * DB_TYPE_CHAR} and {@link DB_TYPE_RAW} column types.
     */
    byteSize?: number;
    /**
     * Set only for {@link DB_TYPE_NUMBER}, {@link DB_TYPE_TIMESTAMP}, {@link
     * DB_TYPE_TIMESTAMP_TZ} and {@link DB_TYPE_TIMESTAMP_LTZ} columns.
     */
    precision?: number;
    /**
     * Set only for {@link DB_TYPE_NUMBER} columns.
     */
    scale?: number;
    /**
     * Indicates whether NULL values are permitted for this column.
     */
    nullable?: boolean;
}
/**
 * Interface for representing result sets as returned by {@link execute}().
 */
export interface IResultSet {
    /**
     * Contains an array of objects with metadata about the query.
     *
     * Each column's name is always given. If {@link extendedMetaData} is true,
     * additional information is included.
     */
    readonly metaData: IMetaData[];
    /**
     * Closes a result set.
     *
     * Applications must always call this at the end of fetch or when no more rows are needed.
     *
     * It must also be called if no rows are ever going to be fetched from the result set.
     */
    close(): any;
    /**
     * This call fetches one row of the result set as an object or an array of
     * column values, depending on the value of outFormat.
     *
     * At the end of fetching, the result set must be freed by calling {@link close}().
     *
     * Performance of getRow() can be tuned by adjusting the value of
     * {@link fetchArraySize}.
     */
    getRow(): any;
    /**
     * This call fetches numRows rows of the result set as an object or an array of
     * column values, depending on the value of outFormat.
     *
     * At the end of fetching, the result set must be freed by calling {@link close}().
     *
     * Performance of getRows() can be tuned by adjusting the value of
     * {@link fetchArraySize}.
     */
    getRows(numRows: number): any[];
    /**
     * Convenience function for getting an iterator of this IResultSet.
     *
     * This is equivalent to calling rs[Symbol.iterator]().
     *
     * @returns an iterator over the rows of this IResultSet.
     *
     * @throws {@link IError} if the result set has already been closed
     * @throws {@link IError} if the result set is already being iterated over
     */
    iterator(): IterableIterator<any>;
    /**
     * This function defines the default iterator for a result set which can be
     * used to iterate over its rows. Using the default iterator, a result set
     * can be iterated over using the for..of construct.
     *
     * @throws {@link IError} if the result set has already been closed
     * @throws {@link IError} if the result set is already being iterated over
     *
     */
    [Symbol.iterator](): IterableIterator<any>;
}
/**
 * Interface for the result of {@link execute}().
 */
export interface IExecuteReturn {
    /**
     * For SELECT statements, this contains an array of objects describing
     * details of columns for the select list. For non queries, this property is
     * undefined.
     */
    metaData?: IMetaData[];
    /**
     * This contains the output values of OUT and IN OUT binds. If bindParams is
     * passed as an array, then outBinds is returned as an array. If bindParams
     * is passed as an object, then outBinds is returned as an object. If there
     * are no OUT or IN OUT binds, the value is undefined.
     */
    outBinds?: Record<string, any> | any[];
    /**
     * For SELECT statements when the {@link resultSet} option is true, use the
     * resultSet object to fetch rows. See {@link IResultSet}.
     *
     * When using this option, resultSet.{@link close}() must be called when the
     * result set is no longer needed. This is true whether or not rows have
     * been fetched.
     */
    resultSet?: IResultSet;
    /**
     * For SELECT statements using direct fetches, rows contains an array of
     * fetched rows. It will be NULL if there is an error or the SQL statement
     * was not a SELECT statement. By default, the rows are in an array of
     * column value arrays, but this can be changed to arrays of objects by
     * setting outFormat to oracledb.{@link OBJECT}. If a single row is fetched,
     * then rows is an array that contains one single row.
     *
     * The number of rows returned is limited by parameters.{@link maxRows} or
     * the {@link maxRows} option in an {@link execute}() call. If maxRows is 0,
     * then the number of rows is limited by memory constraints.
     */
    rows?: any[];
    /**
     * For DML statements (including SELECT FOR UPDATE) this contains the number
     * of rows affected, for example the number of rows inserted. For non-DML
     * statements such as queries and PL/SQL statements, rowsAffected is
     * undefined.
     */
    rowsAffected?: number;
}
/**
 * Interface for the result of {@link executeMany}().
 */
export interface IExecuteManyReturn {
    /**
     * This contains the value of any returned IN OUT or OUT binds. It is an
     * array of arrays, or an array of objects, depending on the {@link binds}
     * parameters structure. The length of the array will correspond to the
     * length of the array passed as the binds parameter. It will be present
     * only if there is at least one OUT bind variable identified.
     */
    outBinds?: (Record<string, any> | any[])[];
    /**
     * This is an integer identifying the total number of database rows affected
     * by the processing of all records of the binds parameter. It is only
     * present if a DML statement was executed.
     */
    rowsAffected?: number;
}
/**
 * Interface for object binds in {@link execute}().
 */
export interface IBindObjectValue {
    /**
     * The direction of the bind. One of the constants {@link BIND_IN},
     * {@link BIND_INOUT}, or {@link BIND_OUT}. The default is
     * {@link BIND_IN}.
     */
    dir?: number;
    /**
     * The maximum number of bytes that an OUT or INOUT bind variable of type
     * {@link STRING} or {@link UINT8ARRAY} can use to get data. The default
     * value is 200. The maximum limit depends on the database type. When
     * binding INOUT, then maxSize refers to the size of the returned value.
     * The input value can be smaller or bigger. For IN binds, maxSize is
     * ignored.
     */
    maxSize?: number;
    /**
     * The JavaScript data type to be bound. One of the
     * mle-js-oracledb JS Constants, see {@link javaScriptType}.  With IN or
     * INOUT binds the type can be explicitly set with type or it will default
     * to the type of the input data value. With OUT binds, the type defaults to
     * {@link STRING} whenever type is not specified.
     */
    type?: number;
    /**
     * The input value or variable to be used for an IN or INOUT bind variable.
     */
    val: any;
}
/**
 * Interface for a single bind parameter as used in {@link execute}(). Can
 * either be an bind object or a scalar value.
 */
export declare type BindValue = IBindObjectValue | any;
/**
 * Interface for object binds (also called "named binds").
 */
export interface INamedBinds {
    [bindName: string]: BindValue;
}
/**
 * Interface for array binds.
 */
export declare type PosBinds = BindValue[];
/**
 * Interface for the collection of bind parameters in {@link execute}(). Can
 * either be an object ({@link INamedBinds}) or an array ({@link PosBinds}) of
 * values.
 */
export declare type BindParameters = INamedBinds | PosBinds;
/**
 * Interface for the result of {@link getStatementInfo}().
 */
export interface IStatementInfo {
    /**
     * Array of strings corresponding to the unique names of the bind variables
     * used in the SQL statement.
     */
    bindNames: string[];
    /**
     * Array containing properties equivalent to those in {@link
     * extendedMetaData} on {@link execute}(). This property exists only for
     * queries.
     */
    metaData?: IMetaData[];
    /**
     * Integer corresponding to one of the mle-js-oracledb SQL Statement Type
     * Constants, e.g.  {@link STMT_TYPE_SELECT}.
     */
    statementType: number;
}
/**
 * Interface for the connection object obtained by {@link defaultConnection}.
 */
export interface IConnection {
    /**
     * This read-only property gives a numeric representation of the Oracle
     * database version which is useful in comparisons. For version a.b.c.d.e,
     * this property gives the number:
     * (100000000 * a) + (1000000 * b) + (10000 * c) + (100 * d) + e
     */
    readonly oracleServerVersion: number;
    /**
     * This read-only property gives a string representation of the Oracle
     * database version which is useful for display.
     */
    readonly oracleServerVersionString: string;
    /**
     * This read-only property always returns 0 and exists for consistency with
     * node-oracledb.
     */
    readonly stmtCacheSize: number;
    /**
     * This call commits the current transaction in progress.
     */
    commit(): void;
    /**
     * This call executes a single SQL or PL/SQL statement.
     *
     * The statement to be executed may contain IN binds, OUT or IN OUT bind
     * values or variables, which are bound using either an object or an array.
     *
     * The function returns a result object, containing any fetched rows, the
     * values of any OUT and IN OUT bind variables, and the number of rows
     * affected by the execution of DML statements, see {@link IExecuteReturn}.
     *
     * See
     * https://github.com/oracle/node-oracledb/blob/v3.1.0/doc/api.md#-426-connectionexecute
     * for more details.
     *
     * @param sql SQL statement that is executed. The statement may contain bind
     * parameters.
     * @param bindParams needed if there are bind parameters in the SQL
     * statement, see {@link BindParameters}.
     * @param options an optional parameter to execute() that may be used to
     * control statement execution.
     */
    execute(sql: string): IExecuteReturn;
    execute(sql: string, bindParams: BindParameters, options?: IExecuteOptions): IExecuteReturn;
    /**
     * This method allows sets of data values to be bound to one DML or PL/SQL
     * statement for execution. It is like calling {@link execute}() multiple
     * times but requires fewer context switches. This is an efficient way to
     * handle batch changes, for example when inserting or updating multiple
     * rows. The method cannot be used for queries.
     *
     * The executeMany() method supports IN, IN OUT and OUT binds for most data
     * types.
     *
     * The version of this function which accepts a number of iterations must
     * be used when no bind parameters are required or when all bind parameters
     * are OUT binds.
     *
     * See
     * https://github.com/oracle/node-oracledb/blob/v3.1.0/doc/api.md#-427-connectionexecutemany
     * for more details.
     *
     * @param sql SQL or PL/SQL statement that executeMany() executes.
     * @param binds contains the values or variables to be bound to the executed
     * statement. It must be an array of arrays ({@link ArrayBindDefs}) or an
     * array of objects whose keys match the bind variable names in the SQL
     * statement ({@link IObjectBindDefs}). Each sub-array or sub-object must
     * contain values for the bind variables used in the SQL statement. At least
     * one such record must be specified.
     *
     * If a record contains fewer values than expected, NULL values will be
     * used. For bind by position, empty values can be specified using syntax
     * like [a,,c,d].
     *
     * By default, the direction of binds is {@link BIND_IN}. The first data
     * record determines the number of bind variables, each bind variable's data
     * type, and its name (when binding by name). If a variable in the first
     * record contains a null, this value is ignored and a subsequent record is
     * used to determine that variable's characteristics. If all values in all
     * records for a particular bind variable are null, the type of that bind is
     * {@link STRING} with a maximum size of 1.
     *
     * The maximum sizes of strings and Uint8Arrays are determined by scanning
     * all records in the bind data.
     *
     * If a {@link bindDefs} property is used in options, no data scanning
     * occurs. This property explicitly specifies the characteristics of each
     * bind variable.
     * @param numIterations number of times the SQL statement should be
     * executed. Can be used instead of the binds parameter.
     * @param options The options parameter is optional. It can contain the
     * properties specified in {@link IExecuteManyOptions}.
     */
    executeMany(sql: string, binds: BindParameters[], options?: IExecuteManyOptions): IExecuteManyReturn;
    executeMany(sql: string, numIterations: number, options?: IExecuteManyOptions): IExecuteManyReturn;
    /**
     * Parses a SQL statement and returns information about it. This is most
     * useful for finding column names of queries, and for finding the names of
     * bind variables used.
     *
     * This method performs a call to the SQL layer of the database, so
     * unnecessary calls should be avoided.
     *
     * The information is provided by lower level APIs that have some
     * limitations. Some uncommon statements will return the statement type as
     * {@link STMT_TYPE_UNKNOWN}. DDL statements are not parsed, so syntax
     * errors in them will not be reported. The direction and types of bind
     * variables cannot be determined.
     *
     * @param sql SQL statement to parse.
     */
    getStatementInfo(sql: string): IStatementInfo;
    /**
     * This call rolls back the current transaction in progress.
     */
    rollback(): void;
}
/**
 * Type for mle-js-oracledb Query OutFormat Constants.
 */
export declare type OutFormatType = number;
/**
 * Fetch each row as array of column values.
 */
export declare const ARRAY: OutFormatType;
/**
 * Fetch each row as an object of column values.
 */
export declare const OBJECT: OutFormatType;
/**
 * Type for mle-js-oracledb JS Type Constants.
 */
export declare type JsType = number;
/**
 * Returns the literal type name of a mle-js-oracledb JS Type Constant.
 *
 * @param typeConst JS Type Constant
 * @returns name of the JS Type Constant
 */
export declare function jsTypeNameByValue(typeConst: number): string;
/**
 * Used with fetchInfo to reset the fetch type to the database type
 */
export declare const DEFAULT: JsType;
/**
 * Bind as JavaScript String type. Can be used for most database types.
 */
export declare const STRING: JsType;
/**
 * Bind as JavaScript number type. Can also be used for fetchAsString and
 * fetchInfo.
 */
export declare const NUMBER: JsType;
/**
 * Bind as JavaScript date type. Can also be used for fetchAsString and
 * fetchInfo.
 */
export declare const DATE: JsType;
/**
 * Bind a NUMBER to a OracleNumber object.
 */
export declare const ORACLE_NUMBER: JsType;
/**
 * Bind a DATE to a OracleDate object.
 */
export declare const ORACLE_DATE: JsType;
/**
 * Bind a BLOB to a OracleBLOB object.
 */
export declare const ORACLE_BLOB: JsType;
/**
 * Bind a CLOB to a OracleCLOB object.
 */
export declare const ORACLE_CLOB: JsType;
/**
 * Bind a INTERVAL DAY TO SECOND to a OracleIntervalDayToSecond object.
 */
export declare const ORACLE_INTERVAL_DS: JsType;
/**
 * Bind a INTERVAL YEAR TO MONTH to a OracleIntervalYearToMonth object.
 */
export declare const ORACLE_INTERVAL_YM: JsType;
/**
 * Bind a JavaScript boolean to a PL/SQL BOOLEAN.
 */
export declare const BOOLEAN: JsType;
/**
 * Bind a RAW, LONG RAW or BLOB to a Uint8Array typed array.
 */
export declare const UINT8ARRAY: JsType;
/**
 * Bind a TIMESTAMP to a OracleTimestamp object.
 */
export declare const ORACLE_TIMESTAMP: JsType;
/**
 * Bind a TIMESTAMP WITH TIME ZONE or TIMESTAMP WITH LOCAL TIME ZONE to a OracleTimestampTZ object.
 */
export declare const ORACLE_TIMESTAMP_TZ: JsType;
/**
 * Type for mle-js-oracledb Database Type Constants.
 */
export declare type DbType = number;
/**
 * Returns the literal type name of a mle-js-oracledb Database Type Constant.
 *
 * @param typeConst Database Type Constant
 * @returns name of the Database Type Constant
 */
export declare function dbTypeNameByValue(typeConst: DbType): string;
/**
 * VARCHAR2
 */
export declare const DB_TYPE_VARCHAR: DbType;
/**
 * NUMBER or FLOAT
 */
export declare const DB_TYPE_NUMBER: DbType;
/**
 * LONG
 */
export declare const DB_TYPE_LONG: DbType;
/**
 * DATE
 */
export declare const DB_TYPE_DATE: DbType;
/**
 * RAW
 */
export declare const DB_TYPE_RAW: DbType;
/**
 * LONG RAW
 */
export declare const DB_TYPE_LONG_RAW: DbType;
/**
 * CHAR
 */
export declare const DB_TYPE_CHAR: DbType;
/**
 * BINARY_FLOAT
 */
export declare const DB_TYPE_BINARY_FLOAT: DbType;
/**
 * BINARY_DOUBLE
 */
export declare const DB_TYPE_BINARY_DOUBLE: DbType;
/**
 * BINARY_INTEGER
 */
export declare const DB_TYPE_BINARY_INTEGER: DbType;
/**
 * ROWID
 */
export declare const DB_TYPE_ROWID: DbType;
/**
 * CLOB
 */
export declare const DB_TYPE_CLOB: DbType;
/**
 * BLOB
 */
export declare const DB_TYPE_BLOB: DbType;
/**
 * TIMESTAMP
 */
export declare const DB_TYPE_TIMESTAMP: DbType;
/**
 * TIMESTAMP WITH TIME ZONE
 */
export declare const DB_TYPE_TIMESTAMP_TZ: DbType;
/**
 * INTERVAL YEAR TO MONTH
 */
export declare const DB_TYPE_INTERVAL_YM: DbType;
/**
 * INTERVAL DAY TO SECOND
 */
export declare const DB_TYPE_INTERVAL_DS: DbType;
/**
 * UROWID
 */
export declare const DB_TYPE_UROWID: DbType;
/**
 * BOOLEAN
 */
export declare const DB_TYPE_BOOLEAN: DbType;
/**
 * TIMESTAMP WITH LOCAL TIME ZONE
 */
export declare const DB_TYPE_TIMESTAMP_LTZ: DbType;
/**
 * NVARCHAR
 */
export declare const DB_TYPE_NVARCHAR: DbType;
/**
 * NCHAR
 */
export declare const DB_TYPE_NCHAR: DbType;
/**
 * NCLOB
 */
export declare const DB_TYPE_NCLOB: DbType;
/**
 * Direction for IN binds
 */
export declare const BIND_IN = 3001;
/**
 * Direction for INOUT binds
 */
export declare const BIND_INOUT = 3002;
/**
 * Direction for OUT binds
 */
export declare const BIND_OUT = 3003;
/**
 * Unknown statement type
 */
export declare const STMT_TYPE_UNKNOWN = 0;
/**
 * SELECT
 */
export declare const STMT_TYPE_SELECT = 1;
/**
 * UPDATE
 */
export declare const STMT_TYPE_UPDATE = 2;
/**
 * DELETE
 */
export declare const STMT_TYPE_DELETE = 3;
/**
 * INSERT
 */
export declare const STMT_TYPE_INSERT = 4;
/**
 * CREATE
 */
export declare const STMT_TYPE_CREATE = 5;
/**
 * DROP
 */
export declare const STMT_TYPE_DROP = 6;
/**
 * ALTER
 */
export declare const STMT_TYPE_ALTER = 7;
/**
 * BEGIN
 */
export declare const STMT_TYPE_BEGIN = 8;
/**
 * DECLARE
 */
export declare const STMT_TYPE_DECLARE = 9;
/**
 * CALL
 */
export declare const STMT_TYPE_CALL = 10;
/**
 * EXPLAIN PLAN
 */
export declare const STMT_TYPE_EXPLAIN_PLAN = 15;
/**
 * MERGE
 */
export declare const STMT_TYPE_MERGE = 16;
/**
 * ROLLBACK
 */
export declare const STMT_TYPE_ROLLBACK = 17;
/**
 * COMMIT
 */
export declare const STMT_TYPE_COMMIT = 21;
/**
 * Class for representing global mle-js-oracledb properties.
 */
declare class Parameters {
    /**
     * The maximum number of rows that are fetched by a query with
     * connection.{@link execute}() when not using an {@link IResultSet}. Rows
     * beyond this limit are not fetched from the database. A value of 0 means
     * there is no limit.
     *
     * The default value is 0, meaning unlimited.
     *
     * This property may be overridden in an {@link execute}() call.
     *
     * To improve database efficiency, SQL queries should use a row limiting clause
     * like OFFSET / FETCH or equivalent. The maxRows property can be used to stop
     * badly coded queries from returning unexpectedly large numbers of rows.
     *
     * When the number of query rows is relatively big, or can not be predicted, it
     * is recommended to use an {@link IResultSet}. This allows applications to
     * process rows in smaller chunks or individually, preventing the PGA limits
     * being exceeded or query results being unexpectedly truncated by a maxRows
     * limit.
     */
    private _maxRows;
    get maxRows(): number;
    set maxRows(value: number);
    /**
     * The format of query rows fetched when using connection.{@link execute}().
     * It affects both IResultSet and non-IResultSet queries. This can be either
     * of the constants {@link ARRAY} or {@link OBJECT}. The default value is
     * {@link ARRAY}.
     *
     * If specified as {@link ARRAY}, each row is fetched as an array of column
     * values.
     *
     * If specified as {@link OBJECT}, each row is fetched as a JavaScript object.
     * The object has a property for each column name, with the property value set
     * to the respective column value. The property name follows Oracle's standard
     * name-casing rules. It will commonly be uppercase, since most applications
     * create tables using unquoted, case-insensitive names.
     *
     * This property may be overridden in an {@link execute}() call.
     */
    private _outFormat;
    get outFormat(): OutFormatType;
    set outFormat(value: OutFormatType);
    /**
     * This property sets the size of an internal buffer used for fetching query
     * rows from Oracle Database. Changing it may affect query performance but
     * does not affect how many rows are returned to the application.
     *
     * The default value is 10. The maximum allowed value is 1000, any value
     * greater than that will silently be limited to 1000.
     *
     * The property is used during the default direct fetches and during
     * {@link IResultSet}.{@link getRow}() and {@link getRows}() calls.
     *
     * Increasing this value reduces the number of context switches, but increases
     * memory usage for each data fetch. For queries that return a large number of
     * rows, higher values of fetchArraySize may give better performance. For
     * queries that only return a few rows, reduce the value of fetchArraySize to
     * minimize the amount of memory management during data fetches. Note that as
     * mle-js-oracledb is co-located with the database, large values are unlikely
     * to yield significant benefit.
     *
     * For direct fetches (those using {@link resultSet}: false), the
     * internal buffer size will be based on the lesser of maxRows and
     * fetchArraySize.
     */
    private _fetchArraySize;
    get fetchArraySize(): number;
    set fetchArraySize(value: number);
    /**
     * Determines whether additional metadata is available for queries.
     *
     * The default value is false. With this value, the result.{@link metaData}
     * and result.{@link resultSet}.{@link metaData} objects only include column
     * names.
     *
     * This property may be overridden in an execute() call.
     */
    private _extendedMetaData;
    get extendedMetaData(): boolean;
    set extendedMetaData(value: boolean);
    /**
     * An array of mle-js-oracledb JS Type values. The valid types are {@link
     * DATE}, {@link NUMBER}, {@link UINT8ARRAY}, and {@link ORACLE_CLOB}. When
     * any column having one of the specified types is queried with {@link
     * execute}(), the column data is returned as a string instead of the default
     * representation.
     *
     * By default in mle-js-oracledb, all columns are returned as native types or
     * or as OracleClob/OracleBlob wrapper types, in the case of CLOB and BLOB
     * types.
     *
     * This property helps avoid situations where using JavaScript types can lead
     * to numeric precision loss, or where date conversion is unwanted. See
     * https://github.com/oracle/node-oracledb/blob/v3.1.0/doc/api.md#-1316-query-result-type-mapping
     * for more discussion.
     *
     * For raw data returned as a string, Oracle returns the data as a
     * hex-encoded string. For dates and numbers returned as a string, the
     * maximum length of a string created by this mapping is 200 bytes. Strings
     * created for CLOB columns will generally be limited by memory restrictions.
     *
     * Individual query columns in {@link execute}() calls can override the
     * fetchAsString global property by using {@link fetchInfo}.
     */
    private _fetchAsString;
    get fetchAsString(): JsType[];
    set fetchAsString(value: JsType[]);
    /**
     * An array of mle-js-oracledb JS Type values. Currently the only valid type
     * is {@link ORACLE_BLOB}. When a BLOB column is queried with {@link
     * execute}(), the column data is returned as a Uint8Array instead of the
     * default representation.
     *
     * By default in mle-js-oracledb, all columns are returned as native types or
     * or as OracleClob/OracleBlob wrapper types, in the case of CLOB and BLOB
     * types.
     *
     * Individual query columns in {@link execute}() calls can override the
     * fetchAsUint8Array global property by using {@link fetchInfo}.
     */
    private _fetchAsUint8Array;
    get fetchAsUint8Array(): JsType[];
    set fetchAsUint8Array(value: JsType[]);
    /**
     * An array of mle-js-oracledb JS Type values. The valid types are {@link
     * DATE}, {@link NUMBER}, and {@link STRING}. When any column having one of
     * the specified types is queried with {@link execute}(), the column data is
     * returned as a PL/SQL wrapper type instead of the default representation.
     *
     * By default in mle-js-oracledb, all columns are returned as native types or
     * or as OracleClob/OracleBlob wrapper types, in the case of CLOB and BLOB
     * types.
     *
     * For types that be set in both properties ({@link fetchAsString} and
     * fetchAsPlsqlWrapper), i.e. {@link DATE} and {@link NUMBER}, the {@link
     * fetchAsString} property has precedence over the fetchAsPlsqlWrapper
     * property.
     *
     * Individual query columns in {@link execute}() calls can override the
     * fetchAsPlsqlWrapper global property by using {@link fetchInfo}.
     */
    private _fetchAsPlsqlWrapper;
    get fetchAsPlsqlWrapper(): JsType[];
    set fetchAsPlsqlWrapper(value: JsType[]);
}
/**
 * Object that holds the global mle-js-oracledb properties.
 */
export declare const parameters: Parameters;
export {};

/**
Copyright (c) 2019, 2024, Oracle and/or its affiliates.

The Universal Permissive License (UPL), Version 1.0

Subject to the condition set forth below, permission is hereby granted to any
person obtaining a copy of this software, associated documentation and/or data
(collectively the "Software"), free of charge and under any and all copyright
rights in the Software, and any and all patent rights owned or freely
licensable by each licensor hereunder covering either (i) the unmodified
Software as contributed to or provided by such licensor, or (ii) the Larger
Works (as defined below), to deal in both

(a) the Software, and
(b) any piece of software and/or hardware listed in the lrgrwrks.txt file if
one is included with the Software (each a "Larger Work" to which the Software
is contributed by such licensors),

without restriction, including without limitation the rights to copy, create
derivative works of, display, perform, and distribute the Software and make,
use, sell, offer for sale, import, export, have made, and have sold the
Software and the Larger Work(s), and to sublicense the foregoing rights on
either these or other terms.

This license is subject to the following condition:
The above copyright notice and either this complete permission notice or at
a minimum a reference to the UPL must be included in all copies or
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
import { ISodaDatabase } from './soda-api';
/**
 * Custom class for errors thrown by {@link execute}() or {@link executeMany}().
 */
export interface IError extends Error {
    /**
     * The Oracle error number. This value is undefined for non-Oracle errors.
     */
    errorNum?: number;
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
     * The JavaScript data type to be fetched. One of the mle-js-oracledb JS
     * Type Constants.
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
    /**
     * When keepInStmtCache is true, and statement caching is enabled,
     * then the statement will be added to the cache if it is not already present.
     * This helps the performance of re-executed statements.
     *
     * The default value is true.
     *
     * @since Oracle 23.4
     */
    keepInStmtCache?: boolean;
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
     * The maximum number of bytes that an OUT or INOUT bind variable of type
     * {@link STRING} or {@link UINT8ARRAY} can use to get data. The default
     * value is 200. The maximum limit depends on the database type. When
     * binding INOUT, maxSize refers to the size of the returned value.
     * The input value can be smaller or bigger. For IN binds, maxSize is
     * ignored. When data is being returned from the database, maxSize must be
     * at least the size of the longest value. If maxSize is too small, an error
     * gets thrown.
     */
    maxSize?: number;
    /**
     * The JavaScript data type to be bound. One of the mle-js-oracledb JS
     * Constants; when binding ADTs, a type descriptor or the fully-qualified
     * name (FQN) of the type is also accepted.
     * With IN or INOUT binds the type can be explicitly set with
     * type or it will default to the type of the input data value. With OUT
     * binds, the type defaults to {@link STRING} whenever type is not
     * specified.
     */
    type: JsType | string | IDbObjectClass;
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
export type ArrayBindDefs = IBindDef[];
/**
 * Interface for BindDefs which are either Array- or Object BindDefs.
 */
export type ExecuteManyBindDefs = IObjectBindDefs | ArrayBindDefs;
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
    bindDefs?: ExecuteManyBindDefs;
    dmlRowCounts?: boolean;
    /**
     * When keepInStmtCache is true, and statement caching is enabled,
     * then the statement will be added to the cache if it is not already present.
     * This helps the performance of re-executed statements.
     *
     * The default value is true.
     *
     * @since Oracle 23.4
     */
    keepInStmtCache?: boolean;
}
/**
 * Interface representing metadata as used in {@link IResultSet}s and statement info.
 */
export interface IMetaData {
    /**
     * The column name follows Oracle’s standard name-casing rules. It will commonly be uppercase
     * since most applications create tables using unquoted, case-insensitive names.
     */
    name: string;
    /**
     * One of the mle-js-oracledb JS Type Constants.
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
    /**
     * Name of the database type, such as “NUMBER” or “VARCHAR2”.
     */
    dbTypeName?: string;
    /**
     * Number of Dimensions in vector.
     *
     * @since Oracle 23.4
     */
    vectorDimensions?: number;
    /**
     * Storage type of elements in vector.
     *
     * @since Oracle 23.4
     */
    vectorFormat?: number;
}
/**
 * Interface for representing result sets as returned by {@link execute}().
 */
export declare abstract class IResultSet {
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
     * It must also be called if no rows will ever be fetched from the result set.
     */
    abstract close(): any;
    /**
     * This call fetches one row of the result set as an object or an array of
     * column values, depending on the value of outFormat.
     *
     * At the end of fetching, the result set must be freed by calling {@link close}().
     *
     * Performance of getRow() can be tuned by adjusting the value of
     * {@link fetchArraySize}.
     */
    abstract getRow(): any;
    /**
     * This call fetches numRows rows of the result set as an object or an array of
     * column values, depending on the value of outFormat.
     *
     * @param numRows specifies the number of rows to be returned.
     * the default value of numRows is 0 and it returns all rows.
     *
     * At the end of fetching, the result set must be freed by calling {@link close}().
     *
     * Performance of getRows() can be tuned by adjusting the value of
     * {@link fetchArraySize}.
     */
    abstract getRows(numRows: number): any[];
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
    abstract iterator(): IterableIterator<any>;
    /**
     * This function defines the default iterator for a result set that can be
     * used to iterate over its rows. Using the default iterator, a result set
     * can be iterated over using the for..of construct.
     *
     * @throws {@link IError} if the result set has already been closed
     * @throws {@link IError} if the result set is already being iterated over
     *
     */
    abstract [Symbol.iterator](): IterableIterator<any>;
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
    outBinds?: Record<string, any> | any[] | any;
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
     * objects, but this can be changed to arrays of column value arrays by
     * setting outFormat to oracledb.{@link OUT_FORMAT_ARRAY}. If a single row
     * is fetched, then rows is an array that contains one single object.
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
    outBinds?: (Record<string, any> | any[] | any)[];
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
export interface IBindObjectValue extends IBindDef {
    /**
     * The number of array elements to be allocated for a PL/SQL Collection
     * INDEX BY associative array OUT or IN OUT array bind variable. For IN
     * binds, the value of maxArraySize is ignored.
     *
     * @since Oracle 23.4
     */
    maxArraySize?: number;
    /**
     * The input value or variable to be used for an IN or INOUT bind variable.
     */
    val: any;
}
/**
 * Interface for a single bind parameter as used in {@link execute}(). Can
 * either be a bind object or a scalar value.
 */
export type BindValue = IBindObjectValue | any;
/**
 * Interface for object binds (also called "named binds").
 */
export interface INamedBinds {
    [bindName: string]: BindValue;
}
/**
 * Interface for array binds.
 */
export type PosBinds = BindValue[];
/**
 * Interface for the collection of bind parameters in {@link execute}(). Can
 * either be an object ({@link INamedBinds}) or an array ({@link PosBinds}) of
 * values.
 */
export type BindParameters = INamedBinds | PosBinds;
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
export declare abstract class IConnection {
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
    abstract commit(): void;
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
     * https://node-oracledb.readthedocs.io/en/v6.4.0/api_manual/connection.html#connection.execute
     * for more details.
     *
     * @param sql This parameter can either be a string or an object.
     * If the parameter is a string, then it is the SQL statement to be executed.
     * The statement may contain bind parameters.
     *
     * If the parameter is an object (possible since Oracle 23.5),
     * it conforms to the {@link IExecuteArgs} interface
     * and contains the SQL statement to be executed and the bind values.
     *
     * @param bindParams needed if there are bind parameters in the SQL
     * statement, see {@link BindParameters}.
     * @param options an optional parameter to execute() that may be used to
     * control statement execution.
     */
    abstract execute(sql: string): IExecuteReturn;
    /**
     * @since Oracle 23.5
     */
    abstract execute(sql: IExecuteArgs, options?: IExecuteOptions): IExecuteReturn;
    abstract execute(sql: string, bindParams: BindParameters, options?: IExecuteOptions): IExecuteReturn;
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
     * The version of this function that accepts a number of iterations must
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
     * executed. It can be used instead of the binds parameter.
     * @param options The options parameter is optional. It can contain the
     * properties specified in {@link IExecuteManyOptions}.
     */
    abstract executeMany(sql: string, binds: BindParameters[], options?: IExecuteManyOptions): IExecuteManyReturn;
    abstract executeMany(sql: string, numIterations: number, options?: IExecuteManyOptions): IExecuteManyReturn;
    /**
     * Parses a SQL statement and returns information about it. This is most
     * useful for finding column names of queries, and for finding the names of
     * bind variables used.
     *
     * This method performs a call to the SQL layer of the database, so
     * unnecessary calls should be avoided for performance reasons.
     *
     * The information is provided by lower-level APIs that have some
     * limitations. Some uncommon statements will return the statement type as
     * {@link STMT_TYPE_UNKNOWN}. DDL statements are not parsed, so the syntax
     * errors in them will not be reported. The direction and types of bind
     * variables cannot be determined.
     *
     * @param sql SQL statement to parse.
     */
    abstract getStatementInfo(sql: string): IStatementInfo;
    /**
     * This call rolls back the current transaction in progress.
     */
    abstract rollback(): void;
    /**
     * Returns a parent SodaDatabase object.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#getsodadatabase
     * @return a new SodaDatabase object.
     */
    abstract getSodaDatabase(): ISodaDatabase;
    /**
     * Returns a DbObject prototype object representing the named Oracle Database object or collection.
     * @param className The name of the Oracle object or collection.
     *
     * @since Oracle 23.3
     */
    abstract getDbObjectClass(className: string): IDbObjectClass;
}
/**
 * Interface for representing {@link execute} 's argument.
 *
 * @since Oracle 23.5
 */
export interface IExecuteArgs {
    /**
     * The sql text of the statement to be executed.
     */
    statement: string;
    /**
     * An array that contains bind values.
     */
    values: [];
}
/**
 * Interface for representing a DbObject attribute.
 *
 * @since Oracle 23.3
 */
export interface IDbObjectAttributes {
    /**
     * the value of one of the Oracle Database Type Constants,
     * such as 2010 for oracledb.DB_TYPE_NUMBER and 2023 for oracledb.DB_TYPE_OBJECT.
     */
    type: number;
    /**
     * a string corresponding to the type, such as “VARCHAR2” or “NUMBER”.
     * When the attribute is a DbObject, it will contain the name of the object.
     */
    typeName: string;
    /**
     * set if the value of type is a DbObject. It is the DbObject class for the attribute.
     */
    typeClass?: IDbObjectClass;
}
/**
 * Interface for representing the named Oracle Database object or collection.
 *
 * @since Oracle 23.3
 */
export declare abstract class IDbObjectClass {
    /**
     * List of attributes corresponding to the Oracle Database object attributes.
     * The name of each attribute follows normal Oracle casing semantics.
     */
    attributes?: Record<string, IDbObjectAttributes>;
    /**
     * When dbObject.isCollection is true, this will have a value corresponding
     * to one of the Oracle Database Type Constants.
     */
    readonly elementType?: number;
    /**
     * When dbObject.isCollection is true and the elements in the collection
     * refer to database objects, this property provides the type class
     * information of the elements.
     *
     * @since Oracle 23.4
     */
    readonly elementTypeClass?: IDbObjectClass;
    /**
     * When dbObject.isCollection is true, this will have the name of the
     * element type, such as “VARCHAR2” or “NUMBER”.
     */
    readonly elementTypeName?: string;
    /**
     * Fully qualified name of the Oracle Database object or collection.
     */
    readonly fqn?: string;
    /**
     * True if the Oracle object is a collection, false otherwise.
     */
    readonly isCollection?: boolean;
    /**
     * Name of the Oracle Database object or collection.
     */
    readonly name?: string;
    /**
     * Schema owning the Oracle Database object or collection.
     */
    readonly schema?: string;
    /**
     * String which identifies the name of the package, if the type refers to a
     * PL/SQL type. Otherwise, it returns undefined.
     *
     * @since Oracle 23.4
     */
    readonly packageName?: string;
    /**
     * When dbObject.isCollection is true, this will have the number
     * of elements in the collection. It is undefined for non-collections.
     */
    readonly length?: number;
    /**
     * These methods can be used on Oracle Database collections, identifiable
     * when dbObject.isCollection is true. When collections are fetched from the database,
     * altered, and then passed back to the database, it may be more efficient to use these methods
     * directly on the retrieved DbObject than it is to convert that DbObject to and from a JavaScript object.
     */
    /**
     * Adds the given value to the end of the collection.
     */
    abstract append?(value: any): void;
    /**
     * Deletes the value from the collection at the given index.
     */
    abstract deleteElement?(index: number): void;
    /**
     * Returns the value associated with the given index.
     */
    abstract getElement?(index: number): any;
    /**
     * Returns the first index for later use to obtain the value.
     */
    abstract getFirstIndex?(): number;
    /**
     * Returns a JavaScript array containing the ‘index’ keys.
     */
    abstract getKeys?(): number[];
    /**
     * Obtains the last index for later use to obtain a value.
     */
    abstract getLastIndex?(): number;
    /**
     * Returns the next index value for later use to obtain a value.
     */
    abstract getNextIndex?(index: number): any;
    /**
     * Returns the previous index for later use to obtain the value.
     */
    abstract getPrevIndex?(index: number): any;
    /**
     * Returns true if an element exists in the collection at the given index.
     * Returns false otherwise.
     */
    abstract hasElement?(index: number): boolean;
    /**
     * To set the given value at the position of the given index.
     */
    abstract setElement?(index: number, value: any): void;
    /**
     * Returns an array of element values as a JavaScript array in key order.
     */
    abstract getValues?(): any[];
    /**
     * @param count : Trims the specified number of elements from the end of the collection.
     */
    abstract trim?(count: number): IDbObjectClass;
}
/**
 * Type for mle-js-oracledb Query OutFormat Constants.
 */
export type OutFormatType = number;
/**
 * Fetch each row as array of column values
 * This constant is deprecated. Use OUT_FORMAT_ARRAY instead.
 */
export declare const ARRAY: OutFormatType;
/**
 * Fetch each row as array of column values.
 */
export declare const OUT_FORMAT_ARRAY: OutFormatType;
/**
 * Fetch each row as an object
 * This constant is deprecated. Use OUT_FORMAT_OBJECT instead.
 */
export declare const OBJECT: OutFormatType;
/**
 * Fetch each row as an object of column values.
 */
export declare const OUT_FORMAT_OBJECT: OutFormatType;
/**
 * Type for mle-js-oracledb JavaScript Type Constants. Such constants can be
 * used in OUT binds as well as fetchInfo to specify what JavaScript type a
 * database value should be converted to. Some of those types can also be used
 * in {@link fetchAsString}, {@link fetchAsUint8Array}, and
 * {@link fetchAsPlsqlWrapper}.
 *
 * In addition to the standard JavaScript types that node-oracledb offers,
 * mle-js-oracledb also offers a number of so-called PL/SQL wrapper types which
 * are JavaScript types with the exact same semantics as the corresponding
 * Oracle SQL or PL/SQL types (see mle-js-plsqltypes). The JavaScript constants
 * for those types all start with ORACLE_, e.g.  ORACLE_NUMBER is the constant
 * to be used if a database value should be retrieved as OracleNumber rather
 * than a native JavaScript number.
 */
export type JsType = number;
/**
 * Used with fetchInfo to reset the fetch type to the database type
 */
export declare const DEFAULT: JsType;
/**
 * Bind as JavaScript String type.
 */
export declare const STRING: JsType;
/**
 * Bind as JavaScript number type.
 */
export declare const NUMBER: JsType;
/**
 * Bind as JavaScript date type.
 */
export declare const DATE: JsType;
/**
 * Bind a NUMBER to an OracleNumber object.
 */
export declare const ORACLE_NUMBER: JsType;
/**
 * Bind a DATE to an OracleDate object.
 */
export declare const ORACLE_DATE: JsType;
/**
 * Bind a BLOB to an OracleBLOB object.
 */
export declare const ORACLE_BLOB: JsType;
/**
 * Bind a CLOB to an OracleCLOB object.
 */
export declare const ORACLE_CLOB: JsType;
/**
 * Bind an INTERVAL DAY TO SECOND to an OracleIntervalDayToSecond object.
 */
export declare const ORACLE_INTERVAL_DS: JsType;
/**
 * Bind an INTERVAL YEAR TO MONTH to an OracleIntervalYearToMonth object.
 */
export declare const ORACLE_INTERVAL_YM: JsType;
/**
 * Bind an NCLOB to an OracleNCLOB object.
 */
export declare const ORACLE_NCLOB: JsType;
/**
 * Bind a RAW, LONG RAW or BLOB to a Uint8Array typed array.
 */
export declare const UINT8ARRAY: JsType;
/**
 * Bind a TIMESTAMP to an OracleTimestamp object.
 */
export declare const ORACLE_TIMESTAMP: JsType;
/**
 * Bind a TIMESTAMP WITH TIME ZONE or TIMESTAMP WITH LOCAL TIME ZONE to an OracleTimestampTZ object.
 */
export declare const ORACLE_TIMESTAMP_TZ: JsType;
/**
 * Bind a VECTOR(*, int8) to Int8Array
 * @since Oracle 23.4
 */
export declare const INT8ARRAY: JsType;
/**
 * Bind a VECTOR(*, float32) to Float32Array
 * @since Oracle 23.4
 */
export declare const FLOAT32ARRAY: JsType;
/**
 * Bind a VECTOR(*, float64) to Float64Array
 * @since Oracle 23.4
 */
export declare const FLOAT64ARRAY: JsType;
/**
 * Type for mle-js-oracledb Database Type Constants. Such constants can be used
 * in IN binds to specify what database type a JavaScript value should be
 * converted to and are also what is used in query metadata. In addition, some
 * of these types can also be used in OUT binds if a corresponding
 * {@link JsType} does not exist, e.g. {@link DB_TYPE_BOOLEAN},
 * {@link DB_TYPE_JSON}, {@link DB_TYPE_NCLOB}.
 */
export type DbType = number;
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
 * Bind as JSON. This constant can also be used in {@link fetchAsString} to
 * express that JSON column values should be fetched as JS string rather than JS
 * object.
 */
export declare const DB_TYPE_JSON: DbType;
/**
 * ADT
 *
 * @since Oracle 23.3
 */
export declare const DB_TYPE_OBJECT: DbType;
/**
 * VECTOR
 * @since Oracle 23.4
 */
export declare const DB_TYPE_VECTOR: DbType;
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
 * SODA_COLL_MAP_MODE
 */
export declare const SODA_COLL_MAP_MODE = 5001;
/**
 * Class for representing global mle-js-oracledb properties.
 */
export declare class Parameters {
    private _maxRows;
    get maxRows(): number;
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
     * When the number of query rows is relatively big, or cannot be predicted, it
     * is recommended to use an {@link IResultSet}. This allows applications to
     * process rows in smaller chunks or individually, preventing the PGA limits
     * from being exceeded or query results being unexpectedly truncated by a
     * maxRows limit.
     */
    set maxRows(value: number);
    private _outFormat;
    get outFormat(): OutFormatType;
    /**
     * The format of query rows fetched when using connection.{@link execute}().
     * It affects both IResultSet and non-IResultSet queries. This can be either
     * of the constants {@link OUT_FORMAT_ARRAY} or {@link OUT_FORMAT_OBJECT}. The
     * default value is {@link OUT_FORMAT_ARRAY} when requiring the module
     * "mle-js-oracledb" (in Oracle 21c). Oracle 23ai introduces and encourages the
     * use of ECMAScript imports (import oracledb from "mle-js-oracledb") and if
     * those are used, the default value is {@link OUT_FORMAT_OBJECT}.
     *
     * If specified as {@link OUT_FORMAT_ARRAY}, each row is fetched as an array of column
     * values.
     *
     * If specified as {@link OUT_FORMAT_OBJECT}, each row is fetched as a JavaScript object.
     * The object has a property for each column name, with the property value set
     * to the respective column value. The property name follows Oracle's standard
     * name-casing rules. It will commonly be uppercase since most applications
     * create tables using unquoted, case-insensitive names.
     *
     * This property may be overridden in an {@link execute}() call.
     */
    set outFormat(value: OutFormatType);
    private _fetchArraySize;
    get fetchArraySize(): number;
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
    private _fetchAsString;
    get fetchAsString(): JsType[];
    /**
     * An array of mle-js-oracledb JS Type values. The valid types are {@link
     * DATE}, {@link NUMBER}, {@link UINT8ARRAY}, {@link ORACLE_CLOB}, and
     * {@link DB_TYPE_JSON}. When any column having one of the specified types
     * is queried with {@link execute}(), the column data is returned as a
     * string instead of the default representation.
     *
     * By default in mle-js-oracledb, all columns are returned as native types
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
    set fetchAsString(value: JsType[]);
    private _fetchAsUint8Array;
    get fetchAsUint8Array(): JsType[];
    /**
     * An array of mle-js-oracledb JS Type values. Currently, the only valid type
     * is {@link ORACLE_BLOB}. When a BLOB column is queried with {@link
     * execute}(), the column data is returned as a Uint8Array instead of the
     * default representation.
     *
     * By default in mle-js-oracledb, all columns are returned as native types
     * or as OracleClob/OracleBlob wrapper types, in the case of CLOB and BLOB
     * types.
     *
     * Individual query columns in {@link execute}() calls can override the
     * fetchAsUint8Array global property by using {@link fetchInfo}.
     */
    set fetchAsUint8Array(value: JsType[]);
    private _fetchAsPlsqlWrapper;
    get fetchAsPlsqlWrapper(): JsType[];
    /**
     * An array of mle-js-oracledb JS Type values. The valid types are {@link
     * DATE}, {@link NUMBER}, and {@link STRING}. When any column having one of
     * the specified types is queried with {@link execute}(), the column data is
     * returned as a PL/SQL wrapper type instead of the default representation.
     *
     * By default in mle-js-oracledb, all columns are returned as native types
     * or as OracleClob/OracleBlob wrapper types, in the case of CLOB and BLOB
     * types.
     *
     * For types that are set in both properties ({@link fetchAsString} and
     * fetchAsPlsqlWrapper), i.e. {@link DATE} and {@link NUMBER}, the {@link
     * fetchAsString} property has precedence over the fetchAsPlsqlWrapper
     * property.
     *
     * Individual query columns in {@link execute}() calls can override the
     * fetchAsPlsqlWrapper global property by using {@link fetchInfo}.
     */
    set fetchAsPlsqlWrapper(value: JsType[]);
}

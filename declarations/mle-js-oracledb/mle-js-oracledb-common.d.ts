/**
Copyright (c) 2017, 2024, Oracle and/or its affiliates.

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
import { Parameters, IConnection, IResultSet, OutFormatType, JsType } from './api';
import { ISodaCollection, ISodaDatabase, ISodaDocument, ISodaDocumentCursor, ISodaOperation } from './soda-api';
export declare class OracleDb {
    OUT_FORMAT_ARRAY: number;
    ARRAY: number;
    OUT_FORMAT_OBJECT: number;
    OBJECT: number;
    DEFAULT: number;
    STRING: number;
    NUMBER: number;
    DATE: number;
    ORACLE_NUMBER: number;
    ORACLE_DATE: number;
    ORACLE_BLOB: number;
    ORACLE_CLOB: number;
    ORACLE_INTERVAL_DS: number;
    ORACLE_INTERVAL_YM: number;
    ORACLE_TIMESTAMP: number;
    ORACLE_TIMESTAMP_TZ: number;
    UINT8ARRAY: number;
    DB_TYPE_VARCHAR: number;
    DB_TYPE_NUMBER: number;
    DB_TYPE_LONG: number;
    DB_TYPE_DATE: number;
    DB_TYPE_RAW: number;
    DB_TYPE_LONG_RAW: number;
    DB_TYPE_CHAR: number;
    DB_TYPE_BINARY_FLOAT: number;
    DB_TYPE_BINARY_DOUBLE: number;
    DB_TYPE_BINARY_INTEGER: number;
    DB_TYPE_ROWID: number;
    DB_TYPE_UROWID: number;
    DB_TYPE_BOOLEAN: number;
    DB_TYPE_CLOB: number;
    DB_TYPE_BLOB: number;
    DB_TYPE_TIMESTAMP: number;
    DB_TYPE_TIMESTAMP_TZ: number;
    DB_TYPE_TIMESTAMP_LTZ: number;
    DB_TYPE_NVARCHAR: number;
    DB_TYPE_NCHAR: number;
    DB_TYPE_NCLOB: number;
    DB_TYPE_JSON: number;
    /**
     * @since Oracle 23.4
     */
    DB_TYPE_VECTOR: number;
    DB_TYPE_INTERVAL_YM: number;
    DB_TYPE_INTERVAL_DS: number;
    BIND_IN: number;
    BIND_INOUT: number;
    BIND_OUT: number;
    STMT_TYPE_UNKNOWN: number;
    STMT_TYPE_SELECT: number;
    STMT_TYPE_UPDATE: number;
    STMT_TYPE_DELETE: number;
    STMT_TYPE_INSERT: number;
    STMT_TYPE_CREATE: number;
    STMT_TYPE_DROP: number;
    STMT_TYPE_ALTER: number;
    STMT_TYPE_BEGIN: number;
    STMT_TYPE_DECLARE: number;
    STMT_TYPE_CALL: number;
    STMT_TYPE_EXPLAIN_PLAN: number;
    STMT_TYPE_MERGE: number;
    STMT_TYPE_ROLLBACK: number;
    STMT_TYPE_COMMIT: number;
    SODA_COLL_MAP_MODE: number;
    parameters: Parameters;
    private _connection;
    SodaCollection: typeof ISodaCollection;
    SodaDatabase: typeof ISodaDatabase;
    SodaDocument: typeof ISodaDocument;
    SodaDocumentCursor: typeof ISodaDocumentCursor;
    SodaOperation: typeof ISodaOperation;
    OracleDb: typeof OracleDb;
    Connection: typeof IConnection;
    ResultSet: typeof IResultSet;
    /**
     * Construct a new OracleDb object for connecting and querying Oracle Database.
     *
     * @param useArrayFormat if set to true, {@link OUT_FORMAT_ARRAY} will be
     * used as the default out format for SQL results, otherwise
     * {@link OUT_FORMAT_OBJECT} will be used.
     */
    constructor(useArrayFormat?: boolean);
    get outFormat(): OutFormatType;
    set outFormat(value: OutFormatType);
    get extendedMetaData(): boolean;
    set extendedMetaData(value: boolean);
    get fetchArraySize(): number;
    set fetchArraySize(value: number);
    get fetchAsPlsqlWrapper(): JsType[];
    set fetchAsPlsqlWrapper(value: JsType[]);
    get fetchAsString(): JsType[];
    set fetchAsString(value: JsType[]);
    get maxRows(): number;
    set maxRows(value: number);
    /**
     * Returns the default connection object for executing SQL queries in the Oracle
     * Database using mle-js-oracledb. Note that with MLE, because JavaScript is
     * executed directly in the database, there is no need to establish a specific
     * connection, which is why the default connection object should be used.
     *
     * @returns default connection object for executing SQL queries with mle-js-oracledb.
     */
    defaultConnection(): IConnection;
}

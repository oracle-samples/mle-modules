/**
Copyright (c) 2017, 2021, Oracle and/or its affiliates.

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
import { ARRAY, OBJECT, DEFAULT, STRING, NUMBER, DATE, ORACLE_NUMBER, ORACLE_DATE, ORACLE_BLOB, ORACLE_CLOB, ORACLE_INTERVAL_DS, ORACLE_INTERVAL_YM, ORACLE_TIMESTAMP_TZ, ORACLE_TIMESTAMP, UINT8ARRAY, BOOLEAN, DB_TYPE_VARCHAR, DB_TYPE_NUMBER, DB_TYPE_LONG, DB_TYPE_DATE, DB_TYPE_RAW, DB_TYPE_LONG_RAW, DB_TYPE_CHAR, DB_TYPE_BINARY_FLOAT, DB_TYPE_BINARY_DOUBLE, DB_TYPE_BINARY_INTEGER, DB_TYPE_ROWID, DB_TYPE_UROWID, DB_TYPE_BOOLEAN, DB_TYPE_CLOB, DB_TYPE_BLOB, DB_TYPE_TIMESTAMP, DB_TYPE_TIMESTAMP_TZ, DB_TYPE_TIMESTAMP_LTZ, DB_TYPE_NVARCHAR, DB_TYPE_NCHAR, DB_TYPE_NCLOB, BIND_IN, BIND_INOUT, BIND_OUT, STMT_TYPE_UNKNOWN, STMT_TYPE_SELECT, STMT_TYPE_UPDATE, STMT_TYPE_DELETE, STMT_TYPE_INSERT, STMT_TYPE_CREATE, STMT_TYPE_DROP, STMT_TYPE_ALTER, STMT_TYPE_BEGIN, STMT_TYPE_DECLARE, STMT_TYPE_CALL, STMT_TYPE_EXPLAIN_PLAN, STMT_TYPE_MERGE, STMT_TYPE_ROLLBACK, STMT_TYPE_COMMIT, parameters, IConnection } from './api';
export { ARRAY, OBJECT, DEFAULT, STRING, NUMBER, DATE, ORACLE_NUMBER, ORACLE_DATE, ORACLE_BLOB, ORACLE_CLOB, ORACLE_INTERVAL_DS, ORACLE_INTERVAL_YM, ORACLE_TIMESTAMP, ORACLE_TIMESTAMP_TZ, UINT8ARRAY, BOOLEAN, DB_TYPE_VARCHAR, DB_TYPE_NUMBER, DB_TYPE_LONG, DB_TYPE_DATE, DB_TYPE_RAW, DB_TYPE_LONG_RAW, DB_TYPE_CHAR, DB_TYPE_BINARY_FLOAT, DB_TYPE_BINARY_DOUBLE, DB_TYPE_BINARY_INTEGER, DB_TYPE_ROWID, DB_TYPE_UROWID, DB_TYPE_BOOLEAN, DB_TYPE_CLOB, DB_TYPE_BLOB, DB_TYPE_TIMESTAMP, DB_TYPE_TIMESTAMP_TZ, DB_TYPE_TIMESTAMP_LTZ, DB_TYPE_NVARCHAR, DB_TYPE_NCHAR, DB_TYPE_NCLOB, BIND_IN, BIND_INOUT, BIND_OUT, STMT_TYPE_UNKNOWN, STMT_TYPE_SELECT, STMT_TYPE_UPDATE, STMT_TYPE_DELETE, STMT_TYPE_INSERT, STMT_TYPE_CREATE, STMT_TYPE_DROP, STMT_TYPE_ALTER, STMT_TYPE_BEGIN, STMT_TYPE_DECLARE, STMT_TYPE_CALL, STMT_TYPE_EXPLAIN_PLAN, STMT_TYPE_MERGE, STMT_TYPE_ROLLBACK, STMT_TYPE_COMMIT, parameters };
/**
 * Returns the default connection object for executing SQL queries in the Oracle
 * Database using mle-js-oracledb. Note that since in MLE, JavaScript is
 * executed directly in the database, there is no need to establish a specific
 * connection which is why the default connection object should be used.
 *
 * @returns default connection object for executing SQL queries with mle-js-oracledb.
 */
export declare function defaultConnection(): IConnection;

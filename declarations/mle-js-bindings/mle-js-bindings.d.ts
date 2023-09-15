/**
Copyright (c) 2019, 2022, Oracle and/or its affiliates.

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
export declare enum JSTypes {
    /** Type String */
    STRING = 0,
    /** Type Number */
    NUMBER = 1,
    /** Type Date */
    DATE = 2,
    /** Type Boolean */
    BOOLEAN = 3,
    /** Type Object */
    OBJECT = 6,
    /** UINT8ARRAY */
    UINT8ARRAY = 7,
    /** Type OracleNumber */
    ORACLE_NUMBER = 8,
    /** Type OracleDate */
    ORACLE_DATE = 9,
    /** Type OracleTimeStamp */
    ORACLE_TIMESTAMP = 10,
    /** Type OracleTimeStampTZ */
    ORACLE_TIMESTAMP_TZ = 11,
    /** Type OracleIntervalYearToMonth */
    ORACLE_INTERVAL_YM = 12,
    /** Type OracleIntervalDayToSecond */
    ORACLE_INTERVAL_DS = 13,
    /** Type OracleCLOB */
    ORACLE_CLOB = 14,
    /** Type OracleBLOB */
    ORACLE_BLOB = 15,
    /** Type DbTypeJson */
    DB_TYPE_JSON = 16
}
/**
 * Import a value exported from PL/SQL into the current context
 *
 * Import the value, identified by the given name, that was previously exported
 * from PL/SQL.
 * The desired result type can be specified explicitly with the jstype parameter.
 * If no result type is specified, the default PL/SQL-to-JavaScript mapping is
 * used to determine the result type implicitly.
 *
 * @param name Name of the property to be retrieved. Cannot be null, undefined or empty.
 * @param jstype JavaScript type of the result.
 * @return a JavaScript value of the desired type. Returns undefined if the
 * property does not exist.
 * @throws an exception (Invalid property name) if name is null, undefined or empty.
 */
export declare function importValue(name: string, jstype?: JSTypes): any;
/**
 * Export a value to PL/SQL
 *
 * Export the given value to PL/SQL.
 * The exported value can be imported into PL/SQL using the given name.
 *
 * @param name Name of the property to be exported. Cannot be null, undefined or empty.
 * @param value Value of the property to be exported.
 * @throws an exception (Invalid property name) if name is null, undefined or empty.
 */
export declare function exportValue(name: string, value: any): void;

/**
Copyright (c) 2024, 2025, Oracle and/or its affiliates.

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
/**
 * Argument description.
 */
export type ArgInfo = {
    /**
     * The value of the argument.
     */
    val?: any;
    /**
     * The maximum number of bytes an argument with OUT values can take up.
     * Default: 200.
     */
    maxSize?: number;
    /**
     * The argument direction. In almost all cases this is not necessary and the
     * direction chosen by the FFI should be used.
     * Accepted values:
     *  - oracledb.BIND_IN
     *  - oracledb.BIND_OUT
     *  - oracledb.BIND_INOUT.
     */
    dir?: number;
    /**
     * If the type chosen by FFI needs to be changed this property can be used.
     * This property needs to be set to either an oracledb type constant or to
     * the name of the database type in case of a user defined named type (e.g.
     * record or object).
     * This can be useful to ensure no precision loss when e.g. retrieving
     * a number (by specifying the oracledb.ORACLE_NUMBER override).
     * It can also be useful to specify the correct overload if the FFI cannot
     * determine the correct subprogram to use in a package.
     * @remarks
     * Named types are case sensitive.
     */
    type?: number | string;
    /**
     * The number of array elements to be allocated for a PL/SQL INDEX BY associative array.
     * @remarks
     * Needed for all OUT associative array arguments.
     * INDEX BY VARCHAR2 associative arrays are **not** supported.
     */
    maxArraySize?: number;
};
/**
 * This interface represents an argument for a PL/SQL call.
 * It can act as a value holder for arguments that have an OUT value.
 * It can also act as an extra information store about the given values.
 * This could be the type, maxSize, direction or maxArraySize.
 */
export interface DBArgument {
    /**
     * The JavaScript value of the PL/SQL argument.
     */
    val: any;
}
/**
 * Create a new argument, to be used in a subsequent PL/SQL call.
 * @param info optional argument description.
 * @returns the JavaScript representation of a PL/SQL argument.
 */
export declare function arg(info?: ArgInfo): DBArgument;
/**
 * Create a new argument with the given value.
 * @param value the value of the argument.
 * @param info optional argument description.
 * @returns the JavaScript representation of a PL/SQL argument.
 * @remarks
 * If info contains a val property it will be ignored.
 */
export declare function argOf(value: any, info?: ArgInfo): DBArgument;

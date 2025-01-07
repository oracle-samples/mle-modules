/**
Copyright (c) 2024, Oracle and/or its affiliates.

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
import { DBSubprogram } from './subprogram-api';
/**
 * @categoryDescription Resolve Functions
 * These functions resolve PL/SQL objects by name.
 * The name can optionally contain the schema divided by a dot e.g. SCOTT.THING.
 * If the schema is not given the usual PL/SQL name resolution rules apply.
 * @module
 */
/**
 * Resolve a PL/SQL package by name.
 *
 * @returns a representation of the given package that can be used to interact
 *          with the PL/SQL package.
 *
 * @category Resolve Functions
 *
 * @example
 * ```ts
 * // Get the JS represenation.
 * const dbmsRandom = resolvePackage('DBMS_RANDOM');
 *
 * // Use the representation.
 * dbmsRandom.seed(42);
 * console.log(dbmsRandom.normal());
 * ```
 */
export declare function resolvePackage(name: string): any;
/**
 * Resolve a PL/SQL top-level function by name.
 *
 * @returns a JavaScript function that will execute the PL/SQL function when
 * called and returns the PL/SQL return value.
 *
 * @category Resolve Functions
 *
 * @remarks
 * Similarly to the SQL driver this package has to deal with translating types
 * between PL/SQL and JavaScript. Some PL/SQL types can be translated into
 * multiple JavaScript types, so the return type can be overridden.
 *
 * @example
 * ```ts
 * // Resolve top-level function.
 * const exampleFunc = resolveFunction('my_func');
 * // Execute the PL/SQL function simply by calling the JS function.
 * const numberResult = exampleFunc(42);
 * // Override the return type of the function.
 * const oracleNumberResult = exampleFunc.returns(oracledb.ORACLE_NUMBER)(42);
 * ```
 */
export declare function resolveFunction(name: string): DBSubprogram;
/**
 * Resolve a PL/SQL top-level procedure.
 *
 * @returns a JavaScript function that will execute the given PL/SQL procedure
 * when called.
 *
 * @category Resolve Functions
 *
 * @example
 * ```ts
 * // Resolve the procedure
 * const exampleProcedure = resolveProcedure('my_procedure');
 * exampleProcedure(42, 23);
 * ```
 */
export declare function resolveProcedure(name: string): DBSubprogram;

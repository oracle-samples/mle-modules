/**
Copyright (c) 2025, Oracle and/or its affiliates.

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
export declare class DOMException extends Error {
    constructor(message?: string, name?: string);
    /**
     * @deprecated
     */
    readonly code: number;
    readonly message: string;
    readonly name: string;
    static INDEX_SIZE_ERR: 1;
    static DOMSTRING_SIZE_ERR: 2;
    static HIERARCHY_REQUEST_ERR: 3;
    static WRONG_DOCUMENT_ERR: 4;
    static INVALID_CHARACTER_ERR: 5;
    static NO_DATA_ALLOWED_ERR: 6;
    static NO_MODIFICATION_ALLOWED_ERR: 7;
    static NOT_FOUND_ERR: 8;
    static NOT_SUPPORTED_ERR: 9;
    static INUSE_ATTRIBUTE_ERR: 10;
    static INVALID_STATE_ERR: 11;
    static SYNTAX_ERR: 12;
    static INVALID_MODIFICATION_ERR: 13;
    static NAMESPACE_ERR: 14;
    static INVALID_ACCESS_ERR: 15;
    static VALIDATION_ERR: 16;
    static TYPE_MISMATCH_ERR: 17;
    static SECURITY_ERR: 18;
    static NETWORK_ERR: 19;
    static ABORT_ERR: 20;
    static URL_MISMATCH_ERR: 21;
    static QUOTA_EXCEEDED_ERR: 22;
    static TIMEOUT_ERR: 23;
    static INVALID_NODE_TYPE_ERR: 24;
    static DATA_CLONE_ERR: 25;
}

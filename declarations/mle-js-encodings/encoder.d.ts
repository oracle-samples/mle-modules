/**
Copyright (c) 2023, 2024, Oracle and/or its affiliates.

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
interface TextEncoderCommon {
    readonly encoding: string;
}
/**
 * The object returned by encodeInto.
 * It reports on the progress of the encoder.
 */
export type TextEncoderEncodeIntoResult = {
    /** The number of UTF-16 *code points* that were read. */
    read: number;
    /** The number of bytes written to the given buffer. */
    written: number;
};
/**
 * TextEncoder takes code points and returns UTF-8 bytes.
 */
export declare class TextEncoder implements TextEncoderCommon {
    /**
     * Always returns 'utf-8'.
     */
    readonly encoding = "utf-8";
    /**
     * Create a new instance of TextEncoder.
     */
    constructor();
    /**
     * Encode the given string into a byte array.
     *
     * @param input the string to encode.
     */
    encode(input?: string): Uint8Array;
    /**
     * Encode the given string and store the results in the given buffer.
     *
     * @param input the string to encode.
     * @param destination the buffer where the encoded string should be stored.
     * @returns an object describing the progress made in this call (code points read and bytes written).
     */
    encodeInto(input: string, destination: Uint8Array): TextEncoderEncodeIntoResult;
}
export {};

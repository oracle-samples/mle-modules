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
interface TextDecoderCommon {
    readonly encoding: string;
    readonly fatal: boolean;
    readonly ignoreBOM: boolean;
}
/**
 * Options given to the constructor of TextDecoder.
 */
export type TextDecoderOptions = {
    /**
     * Controls the error mode of the decoder.
     * If set to true an exception is thrown on invalid byte sequences.
     * Otherwise, the replacement code point will be used.
     * Default: false.
     */
    fatal?: boolean;
    /**
     * Controls whether the BOM (Byte Order Mark) should be checked.
     * If set to true the BOM will not be checked/removed.
     * Default: false.
     */
    ignoreBOM?: boolean;
};
/**
 * Options given to decode.
 */
export type TextDecodeOptions = {
    /**
     * Controls whether the IO queue should be flushed between calls.
     * If set to true the corresponding TextDecoder instance may retain state from the previous call.
     * Used for decoding text in chunks.
     * Default: false.
     */
    stream?: boolean;
};
export type AllowSharedBufferSource = ArrayBuffer | SharedArrayBuffer | ArrayBufferView;
/**
 * TextDecoder represents a decoder for specific text encoding, such UTF-8, UTF-16, etc.
 * A decoder takes as input bytes and returns as output code points.
 */
export declare class TextDecoder implements TextDecoderCommon {
    #private;
    /**
     * The name of the decoder that will be used.
     */
    readonly encoding: string;
    /**
     * Error mode can be either be 'replacement' (replace code point) or 'fatal' (throw exception),
     */
    readonly fatal: boolean;
    /**
     * Whether the byte order mark will be ignored.
     */
    readonly ignoreBOM: boolean;
    /**
     * Create a new TextDecoder instance.
     * Currently, the following encodings are supported: utf-8, utf-16be,
     * utf-16le, utf-16 (alias to utf-16le).
     * @param label the name of the encoding to be used when decoding. Default: 'utf-8'.
     * @param options the decoder options (an object with properties fatal and ignoreBOM).
     */
    constructor(label?: string, options?: TextDecoderOptions);
    /**
     * Decodes the given bytes with the method given in encoding.
     * @param input the bytes to decode, given as an ArrayBuffer or ArrayBufferView.
     * @param options object with the stream property. stream specifies whether data will follow in subsequent calls.
     *                Should be set to true if processing data in chunks.
     */
    decode(input?: AllowSharedBufferSource, options?: TextDecodeOptions): string;
}
export {};

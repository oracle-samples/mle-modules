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
export declare class ReadableStream<R = any> {
    private _disturbed;
    constructor(underlyingSource: UnderlyingByteSource, strategy?: {
        highWaterMark?: number;
    });
    constructor(underlyingSource: UnderlyingDefaultSource<R>, strategy?: QueuingStrategy<R>);
    constructor(underlyingSource?: UnderlyingSource<R>, strategy?: QueuingStrategy<R>);
    readonly locked: boolean;
    cancel(reason?: any): Promise<void>;
    getReader(options: {
        mode: 'byob';
    }): ReadableStreamBYOBReader;
    getReader(): ReadableStreamDefaultReader<R>;
    getReader(options?: ReadableStreamGetReaderOptions): ReadableStreamReader<R>;
    pipeThrough<T>(transform: ReadableWritablePair<T, R>, options?: StreamPipeOptions): ReadableStream<T>;
    pipeTo(destination: WritableStream<R>, options?: StreamPipeOptions): Promise<void>;
    tee(): [ReadableStream<R>, ReadableStream<R>];
    [Symbol.asyncIterator](options?: ReadableStreamIteratorOptions): AsyncIterableIterator<R>;
    values(options?: ReadableStreamIteratorOptions): AsyncIterableIterator<R>;
}
export declare class WritableStream<W = any> {
    constructor(underlyingSink?: UnderlyingSink<W>, strategy?: QueuingStrategy<W>);
    readonly locked: boolean;
    abort(reason?: any): Promise<void>;
    close(): Promise<void>;
    getWriter(): WritableStreamDefaultWriter<W>;
}
export declare class TransformStream<I = any, O = any> {
    constructor(transformer?: Transformer<I, O>, writableStrategy?: QueuingStrategy<I>, readableStrategy?: QueuingStrategy<O>);
    readonly readable: ReadableStream<O>;
    readonly writable: WritableStream<I>;
}
export declare class ReadableStreamBYOBReader {
    constructor(stream: ReadableStream);
    closed: Promise<undefined>;
    cancel(reason?: any): Promise<void>;
    read<T extends ArrayBufferView>(view: T): Promise<ReadableStreamReadResult<T>>;
    releaseLock(): void;
}
export declare class ReadableStreamDefaultReader<R = any> {
    constructor(stream: ReadableStream<R>);
    closed: Promise<undefined>;
    cancel(reason?: any): Promise<void>;
    read(): Promise<ReadableStreamReadResult<R>>;
    releaseLock(): void;
}
export declare class WritableStreamDefaultWriter<W = any> {
    constructor(stream: WritableStream<W>);
    readonly closed: Promise<undefined>;
    readonly desiredSize: number | null;
    readonly ready: Promise<undefined>;
    abort(reason?: any): Promise<void>;
    close(): Promise<void>;
    releaseLock(): void;
    write(chunk?: W): Promise<void>;
}
export interface ReadableStreamDefaultController<R = any> {
    readonly desiredSize: number | null;
    close(): void;
    enqueue(chunk?: R): void;
    error(e?: any): void;
}
export interface ReadableByteStreamController {
    readonly byobRequest: ReadableStreamBYOBRequest | null;
    readonly desiredSize: number | null;
    close(): void;
    enqueue(chunk: ArrayBufferView): void;
    error(e?: any): void;
}
export interface ReadableStreamBYOBRequest {
    readonly view: ArrayBufferView | null;
    respond(bytesWritten: number): void;
    respondWithNewView(view: ArrayBufferView): void;
}
export interface UnderlyingByteSource {
    autoAllocateChunkSize?: number;
    cancel?: UnderlyingSourceCancelCallback;
    pull?: (controller: ReadableByteStreamController) => void | PromiseLike<void>;
    start?: (controller: ReadableByteStreamController) => any;
    type: 'bytes';
}
export interface UnderlyingDefaultSource<R = any> {
    cancel?: UnderlyingSourceCancelCallback;
    pull?: (controller: ReadableStreamDefaultController<R>) => void | PromiseLike<void>;
    start?: (controller: ReadableStreamDefaultController<R>) => any;
    type?: undefined;
}
export interface UnderlyingSource<R = any> {
    autoAllocateChunkSize?: number;
    cancel?: UnderlyingSourceCancelCallback;
    pull?: UnderlyingSourcePullCallback<R>;
    start?: UnderlyingSourceStartCallback<R>;
    type?: ReadableStreamType;
}
export interface UnderlyingSourceCancelCallback {
    (reason?: any): void | PromiseLike<void>;
}
export interface UnderlyingSourcePullCallback<R> {
    (controller: ReadableStreamController<R>): void | PromiseLike<void>;
}
export interface UnderlyingSourceStartCallback<R> {
    (controller: ReadableStreamController<R>): any;
}
export interface UnderlyingSink<W = any> {
    abort?: UnderlyingSinkAbortCallback;
    close?: UnderlyingSinkCloseCallback;
    start?: UnderlyingSinkStartCallback;
    type?: undefined;
    write?: UnderlyingSinkWriteCallback<W>;
}
export interface UnderlyingSinkAbortCallback {
    (reason?: any): void | PromiseLike<void>;
}
export interface UnderlyingSinkCloseCallback {
    (): void | PromiseLike<void>;
}
export interface UnderlyingSinkStartCallback {
    (controller: WritableStreamDefaultController): any;
}
export interface UnderlyingSinkWriteCallback<W> {
    (chunk: W, controller: WritableStreamDefaultController): void | PromiseLike<void>;
}
export interface WritableStreamDefaultController {
    readonly signal: AbortSignal;
    error(e?: any): void;
}
export interface QueuingStrategy<T = any> {
    highWaterMark?: number;
    size?: QueuingStrategySize<T>;
}
export interface QueuingStrategySize<T = any> {
    (chunk: T): number;
}
export interface ReadableStreamReadDoneResult<T> {
    done: true;
    value?: T;
}
export interface ReadableStreamReadValueResult<T> {
    done: false;
    value: T;
}
export interface ReadableStreamGetReaderOptions {
    mode?: ReadableStreamReaderMode;
}
export interface ReadableStreamIteratorOptions {
    preventCancel?: boolean;
}
export interface StreamPipeOptions {
    preventAbort?: boolean;
    preventCancel?: boolean;
    preventClose?: boolean;
    signal?: AbortSignal;
}
export interface ReadableWritablePair<R = any, W = any> {
    readable: ReadableStream<R>;
    writable: WritableStream<W>;
}
export interface GenericTransformStream {
    readonly readable: ReadableStream;
    readonly writable: WritableStream;
}
export interface TransformStreamDefaultController<O = any> {
    readonly desiredSize: number | null;
    enqueue(chunk?: O): void;
    error(reason?: any): void;
    terminate(): void;
}
export interface Transformer<I = any, O = any> {
    flush?: TransformerFlushCallback<O>;
    readableType?: undefined;
    start?: TransformerStartCallback<O>;
    transform?: TransformerTransformCallback<I, O>;
    writableType?: undefined;
}
export interface TransformerFlushCallback<O> {
    (controller: TransformStreamDefaultController<O>): void | PromiseLike<void>;
}
export interface TransformerStartCallback<O> {
    (controller: TransformStreamDefaultController<O>): any;
}
export interface TransformerTransformCallback<I, O> {
    (chunk: I, controller: TransformStreamDefaultController<O>): void | PromiseLike<void>;
}
export type ReadableStreamController<T> = ReadableStreamDefaultController<T> | ReadableByteStreamController;
export type ReadableStreamReadResult<T> = ReadableStreamReadValueResult<T> | ReadableStreamReadDoneResult<T>;
export type ReadableStreamReader<T> = ReadableStreamDefaultReader<T> | ReadableStreamBYOBReader;
export type ReadableStreamReaderMode = 'byob';
export type ReadableStreamType = 'bytes';

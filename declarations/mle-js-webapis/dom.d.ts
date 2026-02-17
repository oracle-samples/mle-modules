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
export declare class EventTarget {
    constructor();
    addEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void;
    dispatchEvent(event: Event): boolean;
    removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
}
export declare class Event {
    constructor(type: string, eventInitDict?: EventInit);
    readonly type: string;
    readonly target: EventTarget | null;
    readonly srcElement: EventTarget | null;
    readonly currentTarget: EventTarget | null;
    readonly eventPhase: number;
    readonly bubbles: boolean;
    readonly cancelable: boolean;
    readonly defaultPrevented: boolean;
    readonly composed: boolean;
    readonly isTrusted: boolean;
    /**
     * @deprecated
     */
    cancelBubble: boolean;
    /**
     * @deprecated
     */
    returnValue: boolean;
    /**
     * @deprecated
     */
    readonly timeStamp: DOMHighResTimeStamp;
    stopPropagation(): void;
    stopImmediatePropagation(): void;
    preventDefault(): void;
    /**
     * @deprecated
     */
    initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
    static NONE: 0;
    static CAPTURING_PHASE: 1;
    static AT_TARGET: 2;
    static BUBBLING_PHASE: 3;
}
export interface EventInit {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
}
export interface EventListenerOptions {
    capture?: boolean;
}
export interface AddEventListenerOptions extends EventListenerOptions {
    once?: boolean;
    passive?: boolean;
    signal?: AbortSignal;
}
export interface EventListener {
    (evt: Event): void;
}
export interface EventListenerObject {
    handleEvent(object: Event): void;
}
export declare class AbortSignal extends EventTarget {
    readonly aborted: boolean;
    onabort: ((this: AbortSignal, ev: Event) => any) | null;
    readonly reason: any;
    throwIfAborted(): void;
    addEventListener<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    static abort(reason?: any): AbortSignal;
    static any(signals: AbortSignal[]): AbortSignal;
}
export interface AbortSignalEventMap {
    "abort": Event;
}
export declare class AbortController {
    constructor();
    readonly signal: AbortSignal;
    abort(reason?: any): void;
}
export type EventListenerOrEventListenerObject = EventListener | EventListenerObject;
export type DOMHighResTimeStamp = number;

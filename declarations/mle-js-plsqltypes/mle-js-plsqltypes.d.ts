/**
Copyright (c) 2019, 2021, Oracle and/or its affiliates.

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
 * JavaScript API for Oracle type TIMESTAMP.
 */
export declare const OracleTimestamp: IOracleTimestamp;
/**
 * JavaScript API for Oracle type TIMESTAMP WITH TIMEZONE.
 */
export declare const OracleTimestampTZ: IOracleTimestampTZ;
/**
 * JavaScript API for Oracle type INTERVAL DAY TO SECOND.
 */
export declare const OracleIntervalDayToSecond: IOracleIntervalDayToSecond;
/**
 * JavaScript API for Oracle type INTERVAL YEAR TO MONTH.
 */
export declare const OracleIntervalYearToMonth: IOracleIntervalYearToMonth;
/**
 * JavaScript API for Oracle type CLOB.
 */
export declare const OracleClob: IOracleClob;
/**
 * JavaScript API for Oracle type DATE.
 */
export declare const OracleDate: IOracleDate;
/**
 * JavaScript API for Oracle type NUMBER.
 */
export declare class OracleNumber {
    private impl;
    /**
     * Construct an OracleNumber from a JavaScript number or a string.
     *
     * @param n
     */
    constructor(n: number | string);
    /**
     * Construct an OracleNumber from a JavaScript number.
     * @param from - number used to create the OracleNumber
     * @returns a new OracleNumber object
     */
    static fromNumber(n: number): OracleNumber;
    /**
     * Parse a string into an OracleNumber, with an optional number format
     * and NLS parameters. If no format string and NLS parameters are provided,
     * the default values for the session are used.
     * @param s the number string
     * @param format optional number format
     * @param nlsParam optional NLS parameters
     * @returns OracleNumber value from parsing the input string
     */
    static fromString(s: string, format?: string, nlsParam?: string): OracleNumber;
    /**
     * The pi constant.
     */
    static pi: OracleNumber;
    /**
     * The zero constant.
     */
    static zero: OracleNumber;
    /**
     * The e constant.
     */
    static e: OracleNumber;
    /**
     * The ln10 constant.
     */
    static ln10: OracleNumber;
    /**
     * Computes the absolute value of the Oracle number
     * @returns the absolute value of the Oracle number
     */
    abs(): OracleNumber;
    /**
     * Adds an Oracle number to another Oracle number
     * @param other - the other Oracle number
     * @returns returns the sum of the two Oracle NUMBERs
     */
    add(other: OracleNumber): OracleNumber;
    /**
     * Subtracts an Oracle number from the Oracle number and returns the resulting Oracle number
     * @param other - the other number to be subtracted from the OracleNumber
     * @returns the result of the subtraction as OracleNumber
     */
    sub(other: OracleNumber): OracleNumber;
    /**
     * Multiplies the Oracle number with another Oracle number
     * @param other - the other Oracle number
     * @returns the result of the multiplication as Oracle number
     */
    mul(other: OracleNumber): OracleNumber;
    /**
     * Divides two Oracle numbers
     * @param other - divisor
     * @returns the result of the division as Oracle number
     */
    div(other: OracleNumber): OracleNumber;
    /**
     * Computes the modulus of two Oracle numbers.
     * @param other - the other Oracle number
     * @returns this number modulo the other number
     */
    mod(other: OracleNumber): OracleNumber;
    /**
     * Computes the sine of the Oracle number
     * @returns the sine of the Oracle number
     */
    sin(): OracleNumber;
    /**
     * Computes the cosine of the Oracle number
     * @returns the cosine
     */
    cos(): OracleNumber;
    /**
     * Computes the tangent of the Oracle number
     * @returns the tangent of the Oracle number
     */
    tan(): OracleNumber;
    /**
     * Computes the arc sine in radians of the Oracle number
     * @returns the arc sine in radians of the Oracle number
     */
    arcSin(): OracleNumber;
    /**
     * Computes the arc cosine in radians of the Oracle number
     * @returns the arc cosine in radians of the Oracle number
     */
    arcCos(): OracleNumber;
    /**
     * Computes the arc tangent in radians of the Oracle number
     * @returns the arc tangent in radians of the Oracle number
     */
    arcTan(): OracleNumber;
    /**
     * Computes the arc tangent of two Oracle numbers
     * @param other Oracle number used for the calculation
     * @returns the arc tangent of two Oracle numbers
     */
    arcTan2(other: OracleNumber): OracleNumber;
    /**
     * Computes the hyperbolic sine of the Oracle number
     * @returns the hyperbolic sine of the Oracle number
     */
    hypSin(): OracleNumber;
    /**
     * Computes the hyperbolic cosine of the Oracle number
     * @returns the hyperbolic cosine of the Oracle number
     */
    hypCos(): OracleNumber;
    /**
     * Computes the hyperbolic tangent of the Oracle number
     * @returns the hyperbolic tangent of the Oracle number
     */
    hypTan(): OracleNumber;
    /**
     * Compares two Oracle numbers
     * @returns -1 if this < other
     *           0 if this = other
     *           1 if this > other
     */
    compare(other: OracleNumber): number;
    /**
     * Checks if the Oracle number is equal to another Oracle number
     * @param other - the other Oracle number
     * @returns true if both Oracle numbers are equal otherwise false
     */
    equals(other: OracleNumber): boolean;
    /**
     * Raises e to the power of this Oracle number
     * @returns the result of the exponentiation as Oracle number
     */
    exp(): OracleNumber;
    /**
     * Raises this Oracle number to the given exponent
     * @returns the result of the exponentiation
     */
    power(exp: OracleNumber | number): OracleNumber;
    /**
     * Computes the natural logarithm of the Oracle number
     * @returns the natural logarithm of the Oracle number
     */
    ln(): OracleNumber;
    /**
     * Computes the logarithm to an arbitrary base
     * @param base the base of the logarithm
     * @returns the logarithm to an arbitrary base
     */
    log(base: OracleNumber | number): OracleNumber;
    /**
     * Computes the square root of the Oracle number
     * @returns the square root of the Oracle number
     */
    sqrt(): OracleNumber;
    /**
     * Tests if the number is an integer
     * @returns true if the Oracle number is an integer otherwise false
     */
    isInt(): boolean;
    /**
     * Tests if the number is zero
     * @returns true if the Oracle number is zero otherwise false
     */
    isZero(): boolean;
    /**
     * Returns -1 if the sign of the number is negative, 0 if the number is 0, and > 0 if the number is positive.
     * @returns a number indicating the sign of the Oracle number
     */
    sign(): number;
    /**
     * Negates the number
     * @returns the negated Oracle number
     */
    neg(): OracleNumber;
    /**
     * Computes the ceiling of the Oracle number
     * @returns the ceiling of the Oracle number
     */
    ceil(): OracleNumber;
    /**
     * Computes the floor of the number
     * @returns the floor value of the Oracle number
     */
    floor(): OracleNumber;
    /**
     * Rounds the number to a specified number of digits
     * @param ndigs - the number of digits
     * @returns the rounded Oracle number
     */
    roundDigits(ndigs: OracleNumber | number): OracleNumber;
    /**
     * Rounds the Oracle number to a specified number of decimal places
     * @param decplace - the decimal place
     * @returns the rounded Oracle number
     */
    roundPlaces(decplace: OracleNumber | number): OracleNumber;
    /**
     * Shift the number by the specified number of decimal places
     * @param digits - number of decimal places to shift. It can be negative. Positive values shift the decimal place to the right and negative values to the left. For example, if NUMBER corresponds to 1234.5 and digits == -1, the new NUMBER object will correspond to 123.45.
     * @returns an Oracle number containing the shifted result
     */
    shift(digits: OracleNumber | number): OracleNumber;
    /**
     * Truncate the number to the specified number of decimal places.
     * @param decplace - Number of decimal digits to the right of the decimal point at which to truncate. Negative values are allowed.
     * @returns a truncated Oracle number
     */
    trunc(decplace: OracleNumber | number): OracleNumber;
    /**
     * Scale the digits to the left and right of the decimal point.
     * @param left maximum number of decimal digits to the left of the decimal point. it will not effect the number, but throw an exception if this value is exceeded.
     * @param right maximum number of decimal digits to the right of the decimal point. The number is rounded at this point. Negative values are allowed.
     * @returns a new scaled Oracle number scaled according to the arguments
     * @throws throws an exception if the number of left-hand-side digits is exceeded
     */
    scale(left: number, right: number): OracleNumber;
    /**
     * Converts an Oracle NUMBER to type number
     * @returns the converted number
     */
    toNumber(): number;
    /**
     * Converts an Oracle NUMBER to a string, with an optional number format
     * and NLS parameters. If no format string and NLS parameters are provided,
     * the default values for the session are used.
     * @param format optional number format
     * @param nlsParam optional NLS parameters
     * @returns the converted string
     */
    toString(format?: string, nlsParam?: string): string;
    isOracleNumber(): boolean;
    asPackedDecimalNumber(): any;
}
/**
 * JavaScript API for Oracle type INTERVAL DAY TO SECOND.
 */
export declare class IOracleIntervalDayToSecond {
    /**
     * Constructor for IOracleIntervalDayToSecond using day, hour, minute, and
     * second. All arguments must be integral numbers.
     *
     * @param dy - number of days
     * @param hr - number of hours
     * @param mm - number of minutes
     * @param ss - number of seconds
     * @param fs - fractional seconds
     * @returns new IOracleIntervalDayToSecond
     */
    constructor(dy: number, hr: number, mm: number, ss: number, fs: number);
    /**
     * Parse an interval string into IOracleIntervalDayToSecond. fromString
     * accepts the same input formats as the Oracle SQL function TO_DSINTERVAL:

     * - SQL interval format compatible with the SQL standard (ISO/IEC 9075)
     * - ISO duration format compatible with the ISO 8601:2004 standard
     *
     * @param interval string to parse.
     * @returns new IOracleIntervalDayToSecond
     */
    fromString(interval: string): IOracleIntervalDayToSecond;
    /**
     * Returns an IOracleIntervalDayToSecond for a given timezone offset or
     * timezone name. The input string must be of the form [+/-]TZH:TZM or
     * 'TZR'.
     *
     * @param tz - timezone offset or timezone name as string
     * @returns new IOracleIntervalDayToSecond that contains the current absolute offset
     */
    fromTimeZone(tz: string): IOracleIntervalDayToSecond;
    /**
     * Returns an IOracleIntervalDayToSecond for the given number of days. If the
     * number of days contains a fractional part, the number of hours, minutes
     * and seconds will be set accordingly.
     *
     * @param days - number of days
     * @returns new IOracleIntervalDayToSecond for the given number of days.
     */
    fromNumberOfDays(days: number | OracleNumber): IOracleIntervalDayToSecond;
    /**
     * Compares two intervals
     *
     * @param i1 - first interval to use for the comparison
     * @param i2 - second interval to use for the comparison
     * @returns -1 if i1 < i2
     *           0 if i1 = i2
     *           1 if i1 > i2
     */
    compare(i1: IOracleIntervalDayToSecond, i2: IOracleIntervalDayToSecond): any;
    /**
     * Returns the number of days from the interval
     *
     * @returns the number of days from the interval
     */
    getDays(): number;
    /**
     * Returns the number of hours from the interval
     *
     * @returns the number of hours from the interval
     */
    getHours(): number;
    /**
     * Returns the number of minutes from the interval
     *
     * @returns the number of minutes from the interval
     */
    getMinutes(): number;
    /**
     * Returns the number of seconds including fractional seconds from the
     * interval
     *
     * @returns the number of seconds including fractional seconds from the
     *          interval
     */
    getSeconds(): number;
    /**
     * Adds the interval to another interval and returns the resulting interval
     *
     * @param summand - the other interval
     * @returns the resulting interval as IOracleIntervalDayToSecond
     */
    add(summand: IOracleIntervalDayToSecond): IOracleIntervalDayToSecond;
    /**
     * Subtracts another interval from the interval and returns the resulting
     * interval
     *
     * @param subtrahend - the other interval
     * @returns the resulting interval as IOracleIntervalDayToSecond
     */
    subtract(subtrahend: IOracleIntervalDayToSecond): IOracleIntervalDayToSecond;
    /**
     * Divides the interval by an Oracle number or JavaScript number and returns
     * the resulting interval
     *
     * @param divisor - the divisor used in the division
     * @returns the resulting interval
     */
    divide(divisor: OracleNumber | number): IOracleIntervalDayToSecond;
    /**
     * Multiplies the interval with an Oracle number or a JavaScript number and
     * returns the resulting interval
     *
     * @param factor - the factor used in the multiplication
     * @returns the resulting interval
     */
    multiply(factor: OracleNumber | number): IOracleIntervalDayToSecond;
    /**
     * Produces a string representing the interval. The string is formatted with
     * 2 digits for the number of days and 6 digits for the fractional seconds
     * of the interval.
     *
     * @returns a string representing the interval
     */
    toString(): string;
    /**
     * Produces a string representing the interval. The string is formatted
     * according to the specified precision for days and fractional seconds.
     *
     * @param daysPrecision - The number of digits used to represent days in the interval string.
     * @param fractionalSecondsPrecision - Fractional second precision of the interval string (the number of digits used to represent the fractional seconds).
     * @returns a string representing the interval
     */
    toStringWithPrecision(daysPrecision: number, fractionalSecondsPrecision: number): string;
}
/**
 * JavaScript API for Oracle type INTERVAL YEAR TO MONTH.
 */
export declare class IOracleIntervalYearToMonth {
    /**
     * Constructor for IOracleIntervalYearToMonth using year and month. All
     * arguments must be integral numbers.
     *
     * @param yr year value
     * @param mnth month value
     * @returns new IOracleIntervalYearToMonth
     */
    constructor(yr: number, mnth: number);
    /**
     * Parse an interval string into IOracleIntervalYearToMonth. fromString
     * accepts the same input formats as the Oracle SQL function TO_YMINTERVAL:
     *
     * - SQL interval format compatible with the SQL standard (ISO/IEC 9075)
     * - ISO duration format compatible with the ISO 8601:2004 standard
     *
     * @param interval string to parse
     * @returns new IOracleIntervalYearToMonth
     */
    fromString(interval: string): IOracleIntervalYearToMonth;
    /**
     * Returns an IOracleIntervalYearToMonth for the given number of years. If
     * the number of years contains a fractional part, the number of months will
     * be set accordingly.
     *
     * @param days - number of months
     * @returns new IOracleIntervalYearToMonth for the given number of years.
     */
    fromNumberOfYears(years: number | OracleNumber): IOracleIntervalYearToMonth;
    /**
     * Compares two intervals
     *
     * @param i1 - first interval to use for the comparison
     * @param i2 - second interval to use for the comparison
     * @returns -1 if i1 < i2
     *           0 if i1 = i2
     *           1 if i1 > i2
     */
    compare(i1: IOracleIntervalYearToMonth, i2: IOracleIntervalYearToMonth): number;
    /**
     * Returns the number of years from the interval
     *
     * @returns the number of years from the interval
     */
    getYears(): number;
    /**
     * Returns the total number of months from the interval
     *
     * @returns the total number of months from the interval
     */
    getMonths(): number;
    /**
     * Adds the interval to another interval and returns the resulting interval
     *
     * @param other - the other interval
     * @returns the resulting interval as IOracleIntervalYearToMonth
     */
    add(other: IOracleIntervalYearToMonth): IOracleIntervalYearToMonth;
    /**
     * Subtracts another interval from the interval and returns the resulting
     * interval
     *
     * @param other - the other interval
     * @returns the resulting interval as IOracleIntervalYearToMonth
     */
    subtract(other: IOracleIntervalYearToMonth): IOracleIntervalYearToMonth;
    /**
     * Divides the interval by an OracleNumber or JavaScript number and returns
     * the resulting interval
     *
     * @param dividend - the dividend used in the division
     * @returns the resulting interval
     */
    divide(dividend: OracleNumber | number): IOracleIntervalYearToMonth;
    /**
     * Multiplies the interval with an OracleNumber or a JavaScript number and
     * returns the resulting interval
     *
     * @param nfactor - the factor used in the multiplication
     * @returns the resulting interval
     */
    multiply(nfactor: OracleNumber | number): IOracleIntervalYearToMonth;
    /**
     * Given an interval, produces a string representing the interval. The
     * string is formatted with at least 2 digits for the number of years.
     *
     * @returns a string representing the year-to-month interval
     */
    toString(): string;
    /**
     * Produces a string representing the interval. The string is formatted
     * according to the specified precision for days and fractional seconds.
     *
     * @param yearsPrecision - The number of digits used to represent years in the interval string.
     * @returns a string representing the interval
     */
    toStringWithPrecision(yearsPrecision: number): string;
}
/**
 * Optional arguments for the compare method of OracleBlob and OracleClob.
 */
export declare interface CompareOptionalArguments {
    /**
     * Number of bytes/characters to compare.
     */
    amount?: number;
    /**
      * Offset (bytes/characters) into the first LOB. Defaults to 1.
      */
    offset1?: number;
    /**
     * Offset (bytes/characters) into the second LOB. Defaults to 1.
     */
    offset2?: number;
}
/**
 * JavaScript API for Oracle type Binary Large Object (BLOB).
 */
export declare class OracleBlob {
    private delegate;
    /**
     * Constant for read-only mode.
     */
    static LOB_READONLY: number;
    /**
     * Constant for read/write mode.
     */
    static LOB_READWRITE: number;
    private static checkArgPresent;
    private static checkNoArgs;
    /**
     * This constructor creates a temporary BLOB and its corresponding index in
     * your default temporary tablespace. The temporary BLOB is created with
     * SESSION duration.
     *
     * @param cache Specified if BLOB should be read into buffer cache or not.
     */
    static createTemporary(cache: boolean): OracleBlob;
    constructor(delegate: any);
    /**
     * This method compares two entire BLOBs or parts of two BLOBs.
     *
     * @param lob1 First target for comparison.
     * @param lob2 Second target for comparison.
     * @param optArgs Optional arguments that specify amount and offsets.
     * @returns 0 if the compared portions are equal, non-zero if not
     * @throws Error if offset1 or offset2 is not a valid BLOB offset value.
     */
    static compare(lob1: OracleBlob, lob2: OracleBlob, optArgs?: CompareOptionalArguments): number;
    /**
     * When creating the table, you can specify the chunking factor, a multiple
     * of tablespace blocks in bytes. This corresponds to the chunk size used
     * by the BLOB data layer when accessing or modifying the BLOB value. Part of
     * the chunk is used to store system-related information, and the rest
     * stores the BLOB value. This method returns the amount of space used in
     * the BLOB chunk to store the BLOB value.
     */
    getChunkSize(...args: any[]): number;
    /**
     * This method gets the length of the specified BLOB. The length in bytes
     * is returned.
     */
    length(...args: any[]): number;
    /**
     * This method checks to see if the BLOB was already opened using the
     * input locator.
     */
    isOpen(...args: any[]): boolean;
    /**
     * This method determines whether a BLOB instance is temporary.
     */
    isTemporary(...args: any[]): boolean;
    /**
     * This method opens a BLOB in the indicated mode. Valid modes include
     * read-only, and read/write.
     *
     * @param mode
     */
    open(mode: number): void;
    /**
     * This method closes a previously opened BLOB.
     */
    close(...args: any[]): void;
    /**
     * This method frees the temporary BLOB in the default temporary
     * tablespace.
     */
    freeTemporary(...args: any[]): void;
    /**
     * This method reads a piece of a BLOB, and returns the specified amount
     * into the buffer parameter, starting from an absolute offset from the
     * beginning of the BLOB. If the input offset points past the End of BLOB, a
     * NO_DATA_FOUND exception is raised.
     *
     * @param amount Number of bytes to read.
     * @param offset Offset in bytes from the start of the BLOB (origin: 1).
     * @returns a Uint8Array that contains the bytes actually read.
     */
    read(amount: number, offset: number): Uint8Array;
    /**
     * This method writes data into an internal BLOB, starting from an absolute
     * offset from the beginning of the BLOB. The data is written from the buffer
     * parameter. WRITE replaces (overwrites) any data that already exists in
     * the BLOB at the offset.
     *
     * @param offset Offset in bytes from the start of the BLOB (origin: 1) for the write operation.
     * @param buffer Data to write.
     */
    write(offset: number, buffer: Uint8Array): void;
    getDelegate(): any;
    isOracleBlob(): boolean;
}
/**
 * JavaScript API for Oracle type Character Large Object (CLOB).
 */
export declare class IOracleClob {
    /**
     * Constant for read-only mode.
     */
    LOB_READONLY: number;
    /**
     * Constant for read/write mode.
     */
    LOB_READWRITE: number;
    /**
     * createTemporary creates a temporary CLOB and its corresponding index in
     * your default temporary tablespace. The temporary CLOB is created with
     * SESSION duration.
     *
     * @param cache Specifies if CLOB should be read into buffer cache or not.
     */
    createTemporary(cache: boolean): any;
    /**
     * This method compares two entire CLOBs or parts of two CLOBs.
     *
     * @param lob1 First target for comparison.
     * @param lob2 Second target for comparison.
     * @param optArgs Optional arguments that specify amount and offsets.
     * @returns 0 if the compared portions are equal, non-zero if not
     * @throws Error if offset1 or offset2 is not a valid CLOB offset value.
     */
    compare(lob1: IOracleClob, lob2: IOracleClob, optArgs?: CompareOptionalArguments): number;
    /**
     * When creating the table, you can specify the chunking factor, a multiple
     * of tablespace blocks in characters. This corresponds to the chunk size used
     * by the CLOB data layer when accessing or modifying the CLOB value. Part of
     * the chunk is used to store system-related information, and the rest
     * stores the CLOB value. This method returns the amount of space used in
     * the CLOB chunk to store the CLOB value.
     */
    getChunkSize(): number;
    /**
     * This method gets the length of the specified CLOB. The length in
     * characters is returned.
     */
    length(): number;
    /**
     * This method checks to see if the CLOB was already opened using the
     * input locator.
     */
    isOpen(): boolean;
    /**
     * This method determines whether a CLOB instance is temporary.
     */
    isTemporary(): boolean;
    /**
     * This method opens a CLOB in the indicated mode. Valid modes include
     * read-only, and read/write.
     *
     * @param mode
     */
    open(mode: number): any;
    /**
     * This method closes a previously opened CLOB.
     */
    close(): any;
    /**
     * This method frees the temporary CLOB in the default temporary
     * tablespace.
     */
    freeTemporary(): any;
    /**
     * This method reads a piece of a CLOB, and returns the specified amount
     * into the buffer parameter, starting from an absolute offset from the
     * beginning of the CLOB. If the input offset points past the End of CLOB, a
     * NO_DATA_FOUND exception is raised.
     *
     * @param amount Number of characters to read.
     * @param offset Offset in characters from the start of the CLOB (origin: 1).
     * @returns a string that contains the characters actually read.
     */
    read(amount: number, offset: number): string;
    /**
     * This method writes data into an internal CLOB, starting from an absolute
     * offset from the beginning of the CLOB. The data is written from the buffer
     * parameter. WRITE replaces (overwrites) any data that already exists in
     * the CLOB at the offset.
     *
     * @param offset Offset in characters from the start of the CLOB (origin: 1) for the write operation.
     * @param buffer Data to write.
     */
    write(offset: number, buffer: string): any;
}
/**
 * JavaScript API for Oracle type TIMESTAMP WITH TIME ZONE.
 */
export declare class IOracleTimestampTZ {
    /**
     * Parse a string into an IOracleTimestampTZ. An optional datetime format
     * model and an optional NLS parameter string can be provided. If no format
     * model is specified, the string must be in the default format for the
     * Oracle TIMESTAMP WITH TIME ZONE data type, which is determined by the
     * NLS_TIMESTAMP_TZ_FORMAT parameter.
     *
     * If an NLS parameter string is specified, it has the effect of temporarily
     * altering the session's NLS settings for the duration of the call to this
     * method. The NLS parameter string may set the NLS_DATE_LANGUAGE
     * parameter.
     *
     * If a datetime format model is specified, it overrides the datetime format
     * determined by NLS settings (i.e. the setting of the NLS_TIMESTAMP_TZ
     * parameter).

     * The function returns an error if the specified date lies in a DST
     * transition period and if the Oracle Database parameter
     * ERROR_ON_OVERLAP_TIME is true for the current session.
     *
     * @param date date represented as a string
     * @param format optional datetime format model
     * @param nlsParam optional NLS parameter string. Must have the same format
     * as the NLS argument to the TO_TIMESTAMP_TZ SQL function.
     * @returns a IOracleTimestampTZ object
     */
    fromString(date: string, format?: string, nlsParam?: string): any;
    /**
     * Convert to an OracleTimestamp that contains the local date/time of the
     * IOracleTimestampTZ.
     */
    asLocalDateTime(): IOracleTimestamp;
    /**
     * Convert this IOracleTimestampTZ to a IOracleTimestampTZ in the specified
     * time zone. The time zone string has to contain either a time zone offset
     * of the form '(+|-)HH:MM' or a time zone region name.
     *
     * The function returns an error if the date lies in a DST transition period
     * in the specified time zone and if the Oracle Database parameter
     * ERROR_ON_OVERLAP_TIME is true for the current session.
     *
     * @param timezone The time zone string.
     */
    atTimeZone(timezone: string): IOracleTimestampTZ;
    /**
     * Compares two datetime values.
     *
     * @param other - second timestamp to be compared
     * @returns -1 if date1 < date2
     *           0 if date1 = date2
     *           1 if date1 > date2
     */
    compare(date1: IOracleTimestampTZ, date2: IOracleTimestampTZ): number;
    /**
     * Gets the year component in the Gregorian calendar.
     *
     * @returns year component as number
     */
    getYear(): number;
    /**
     * Gets the month component in the Gregorian calendar.
     *
     * @returns month component as number
     */
    getMonth(): number;
    /**
     * Gets the day component in the Gregorian calendar.
     *
     * @returns day component as number
     */
    getDay(): number;
    /**
     * Gets the hour component.
     *
     * @returns hour component as number
     */
    getHour(): number;
    /**
     * Gets the minute component.
     *
     * @returns minute component as number
     */
    getMinute(): number;
    /**
     * Gets the second component.
     *
     * @returns second component as number
     */
    getSecond(): number;
    /**
     * Gets the fractional second component.
     *
     * @returns fractional second component as number
     */
    getFractionalSecond(): number;
    /**
     * Gets the time zone of a IOracleTimestampTZ.
     *
     * @returns the time zone name as string
     */
    getTimeZone(): string;
    /**
     * Adds an interval to the timestamp to obtain a new timestamp
     * @param interval - the interval used to obtain the new timestamp
     * @returns resulting timestamp
     */
    addInterval(interval: IOracleIntervalDayToSecond | IOracleIntervalYearToMonth): IOracleTimestampTZ;
    /**
     * Subtracts an interval from the timestamp to obtain a new timestamp
     * @param interval - the interval used to obtain the new timestamp
     * @returns resulting timestamp
     */
    subtractInterval(interval: IOracleIntervalDayToSecond | IOracleIntervalYearToMonth): IOracleTimestampTZ;
    /**
     * Subtracts another timestamp from the timestamp to obtain a year-to-month interval
     * @param other - the other timestamp used as subtrahend
     * @returns year-to-month interval defined by the two timestamps
     */
    subtractIntoYearToMonth(other: IOracleTimestampTZ): IOracleIntervalYearToMonth;
    /**
     * Subtracts another timestamp from the timestamp to obtain a day-to-second
     * interval.
     *
     * @param other - the other timestamp used as subtrahend
     * @returns year-to-month interval defined by the two timestamps
     */
    subtractIntoDayToSecond(other: IOracleTimestampTZ): IOracleIntervalDayToSecond;
    /**
     * Converts the given datetime to a string in a given format. An optional
     * datetime format model and an optional NLS parameter string can be
     * provided. If no format model and/or no NLS parameter string is provided,
     * the respective default values for the session are used.
     *
     * If an NLS parameter string is specified, it has the effect of temporarily
     * altering the session's NLS settings for the duration of the call to this
     * method. The NLS parameter string may set the NLS_DATE_LANGUAGE
     * parameter.
     *
     * If a datetime format model is specified, it overrides the datetime format
     * determined by NLS settings.
     *
     * @param format datetime format model
     * @param nlsParam optional NLS parameter string
     * @returns a string of the timestamp
     */
    toString(format?: string, nlsParam?: string): string;
}
/**
 * JavaScript API for Oracle type TIMESTAMP.
 */
export declare class IOracleTimestamp {
    /**
     * Parse a string into an IOracleTimestamp. An optional datetime format model
     * and an optional NLS parameter string can be provided. If no format model
     * is specified, the string must be in the default format for the Oracle
     * TIMESTAMP data type, which is determined by the NLS_TIMESTAMP_FORMAT
     * parameter.
     *
     * If an NLS parameter string is specified, it has the effect of temporarily
     * altering the session's NLS settings for the duration of the call to this
     * method. The NLS parameter string may set the NLS_DATE_LANGUAGE
     * parameter.
     *
     * If a datetime format model is specified, it overrides the datetime format
     * determined by NLS settings (i.e. the setting of the NLS_TIMESTAMP FORMAT
     * parameter).
     *
     * @param date date represented as a string
     * @param format optional datetime format model
     * @param nlsParam optional NLS parameter string. Must have the same format
     * as the NLS argument to the TO_TIMESTAMP SQL function.
     * @returns a IOracleTimestamp object
     */
    fromString(date: string, format?: string, nlsParam?: string): any;
    /**
     * Convert to a IOracleTimestampTZ using the session time zone.
     */
    atSessionTimeZone(): IOracleTimestampTZ;
    /**
     * Convert to a IOracleTimestampTZ in the specified time zone. The time zone
     * string has to contain either a time zone offset of the form '(+|-)HH:MM'
     * or a time zone region name.
     *
     * @param timezone The time zone string.
     */
    atTimeZone(timezone: string): IOracleTimestampTZ;
    /**
     * Compares two IOracleTimestamp values.
     *
     * @param other - second timestamp to be compared
     * @returns -1 if date1 < date2
     *           0 if date1 = date2
     *           1 if date1 > date2
     */
    compare(date1: IOracleTimestamp, date2: IOracleTimestamp): number;
    /**
     * Gets the year component in the Gregorian calendar.
     *
     * @returns year component as number
     */
    getYear(): number;
    /**
     * Gets the month component in the Gregorian calendar.
     *
     * @returns month component as number
     */
    getMonth(): number;
    /**
     * Gets the day component in the Gregorian calendar.
     *
     * @returns day component as number
     */
    getDay(): number;
    /**
     * Gets the hour component.
     *
     * @returns hour component as number
     */
    getHour(): number;
    /**
     * Gets the minute component.
     *
     * @returns minute component as number
     */
    getMinute(): number;
    /**
     * Gets the second component, including the fractional part.
     *
     * @returns second component as number
     */
    getSecond(): number;
    /**
     * Adds an interval to the timestamp to obtain a new timestamp
     * @param interval - the interval used to obtain the new timestamp
     * @returns resulting timestamp
     */
    addInterval(interval: IOracleIntervalDayToSecond | IOracleIntervalYearToMonth): IOracleTimestamp;
    /**
     * Subtracts an interval from the timestamp to obtain a new timestamp
     * @param interval - the interval used to obtain the new timestamp
     * @returns resulting timestamp
     */
    subtractInterval(interval: IOracleIntervalDayToSecond | IOracleIntervalYearToMonth): IOracleTimestamp;
    /**
     * Subtracts another timestamp from the timestamp to obtain a year-to-month interval
     * @param other - the other timestamp used as subtrahend
     * @returns year-to-month interval defined by the two timestamps
     */
    subtractIntoYearToMonth(other: IOracleTimestamp): IOracleIntervalYearToMonth;
    /**
     * Subtracts another timestamp from the timestamp to obtain a day-to-second
     * interval.
     *
     * @param other - the other timestamp used as subtrahend
     * @returns year-to-month interval defined by the two timestamps
     */
    subtractIntoDayToSecond(other: IOracleTimestamp): IOracleIntervalDayToSecond;
    /**
     * Converts the given datetime to a string in a certain format. An optional
     * datetime format model and an optional NLS parameter string can be
     * provided. If no format model and/or no NLS parameter string is provided,
     * the respective default values for the session are used.
     *
     * If an NLS parameter string is specified, it has the effect of temporarily
     * altering the session's NLS settings for the duration of the call to this
     * method. The NLS parameter string may set the NLS_DATE_LANGUAGE
     * parameter.
     *
     * If a datetime format model is specified, it overrides the datetime format
     * determined by NLS settings.
     *
     * @param format datetime format model
     * @param nlsParam optional NLS parameter string
     * @returns a string of the timestamp
     */
    toString(format?: string, nlsParam?: string): string;
}
/**
 * JavaScript API for Oracle type DATE.
 */
export declare class IOracleDate {
    /**
     * Construct a new IOracleDate object from date and time components
     * (Gregorian calendar).
     *
     * @param year year component (-4712 <= y <= 9999)
     * @param month month component (1 <= m <= 12)
     * @param day day component (1 <= d <= 31)
     * @param hour hour component (0 <= h <= 23)
     * @param minute minute component (0 <= m <= 59)
     * @param second second component (0 <= s <= 59)
     */
    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number);
    /**
     * Construct a new IOracleDate object from date components (Gregorian
     * calendar).
     *
     * @param year year component (-4712 <= y <= 9999)
     * @param month month component (1 <= m <= 12)
     * @param day day component (1 <= d <= 31)
     */
    constructor(year: number, month: number, day: number);
    /**
     * Parse a date string into an IOracleDate. An optional datetime format
     * model and an optional NLS parameter string can be provided. If no format
     * model and/or no NLS parameter string is provided, the respective default
     * values for the session are used.
     *
     * If an NLS parameter string is specified, it has the effect of temporarily
     * altering the session's NLS settings for the duration of the call to this
     * method. The NLS parameter string may only set the NLS_DATE_LANGUAGE
     * parameter.
     *
     * If a datetime format model is specified, it overrides the date format
     * determined by NLS settings.
     *
     * @param date date represented as a string
     * @param fmt optional datetime format model
     * @param nlsParam optional NLS parameter string. Must have the same format
     * as the NLS argument to the TO_DATE SQL function.
     * @returns the new date as IOracleDate object
     */
    fromString(date: string, fmt?: string, nlsParam?: string): IOracleDate;
    /**
     * Gets the current system date and time as an IOracleDate.
     * @returns the system date and time as IOracleDate
     */
    sysDate(): IOracleDate;
    /**
     * Converts an IOracleDate to a string and returns it. An optional datetime
     * format model and an optional NLS parameter string can be provided. If no
     * format model and/or no NLS parameter string is provided, the respective
     * default values for the session are used.
     *
     * If an NLS parameter string is specified, it has the effect of temporarily
     * altering the session's NLS settings for the duration of the call to this
     * method. The NLS parameter string may only set the NLS_DATE_LANGUAGE
     * parameter.
     *
     * If a datetime format model is specified, it overrides the date format
     * determined by NLS settings.
     *
     * @param fmt optional datetime format model
     * @param nlsParam optional NLS parameter string. Must have the same format
     * as the NLS argument to the TO_DATE SQL function.
     * @returns the date as string
     */
    toString(fmt?: string, nlsParam?: string): string;
    /**
     * Construct a new IOracleDate object by adding number of months to this
     * date. The result of this function is sensitive to the setting for the
     * NLS_CALENDAR parameter in the current session.
     *
     * @param numberOfMonths number of months to add
     * @returns the new date as IOracleDate object
     */
    addMonths(numberOfMonths: number): IOracleDate;
    /**
     * Construct a new IOracleDate object by adding number of days to this date.
     * The result of this function is sensitive to the setting for the
     * NLS_CALENDAR parameter in the current session.
     *
     * @param numberOfDays - number of days to add
     * @returns the new date as IOracleDate object
     */
    addDays(numberOfDays: number): IOracleDate;
    /**
     * Compares two dates.
     *
     * @param d1 - first date value
     * @param d2 - second date value
     * @returns -1 if d1 < d2
     *           0 if d1 = d2
     *           1 if d1 > d2
     */
    compare(d1: IOracleDate, d2: IOracleDate): number;
    /**
     * Gets the number of days between two dates. The result of this function
     * is sensitive to the setting for the NLS_CALENDAR parameter in the
     * current session.
     *
     * @param d1 - first date value
     * @param d2 - date value to compare with
     * @returns number of days between d1 and d2
     */
    daysBetween(d1: IOracleDate, d2: IOracleDate): number;
    /**
     * Gets the date of the last day of the month specified by this date. The
     * result of this function is sensitive to the setting for the NLS_CALENDAR
     * parameter of the current session.
     *
     * @returns a new date set set to the last day of the month
     */
    lastDayOfMonth(): IOracleDate;
    /**
     * Gets the date of the first weekday named by dayOfTheWeek that is later
     * than this date. The result of this method is sensitive to the
     * NLS_DATE_LANGUAGE parameter of the current session.
     *
     * @returns a new date set to the first weekday name by dayOfTheWeek that
     * is later than this date.
     */
    nextDay(dayOfTheWeek: string): IOracleDate;
    /**
     * Gets the year component according to the Gregorian calendar.
     *
     * @returns year component (-4712 <= y <= 9999)
     */
    getYear(): number;
    /**
     * Gets the month component according to the Gregorian calendar.
     * @returns month component (1 <= m <= 12)
     */
    getMonth(): number;
    /**
     * Gets the day component according to the Gregorian calendar.
     * @returns day component (1 <= d <= 31)
     */
    getDay(): number;
    /**
     * Gets the hour component.
     * @returns our component (0 <= h <= 23)
     */
    getHour(): number;
    /**
     * Gets the minute component.
     * @returns minute component (0 <= m <= 59)
     */
    getMinute(): number;
    /**
     * Gets the second component.
     * @returns second component (0 <= s <= 59)
     */
    getSecond(): number;
    /**
     * Checks if this has a valid date.
     * @returns true iff the date is valid
     */
    isValid(): boolean;
}

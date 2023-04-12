/**
Copyright (c) 2021, 2023, Oracle and/or its affiliates.

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
 * SODA API for MLE. This is compatible with node-oracledb 5.0.0.
 */
/**
 * SodaDatabase.createCollection() options. The metadata must conform to the
 * JSON object layout specified in the Oracle Database
 * "SODA Collection Metadata Components (Reference)" documentation.
 * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadbcreatecollectionoptions
 * @see https://docs.oracle.com/en/database/oracle/simple-oracle-document-access/adsdi/soda-collection-metadata-components-reference.html
 */
export interface ICreateCollectionOptions {
    metaData?: Record<string, any>;
    mode?: number;
}
/**
 * SodaDatabase.createDocument() options.
 * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadbcreatedocumentoptions
 */
export interface ICreateDocumentOptions {
    key?: string;
    mediaType?: string;
}
/**
 * SodaDatabase.getCollectionNames() options.
 * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadbgetcollectionnamesoptions
 */
export interface IGetCollectionNameOptions {
    limit?: number;
    startsWith?: string;
}
/**
 * SodaCollection.dropIndex() options.
 * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacolldropindexoptions
 */
export interface IDropIndexOptions {
    force?: boolean;
}
/**
 * SodaCollection.drop() return value.
 * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacolldropcallback
 */
export interface IDropResult {
    dropped: boolean;
}
/**
 * SodaCollection.dropIndex() result.
 * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacolldropindexcb
 */
export interface IDropIndexResult {
    dropped: boolean;
}
/**
 * SodaOperation.count() result.
 * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclasscount
 */
export interface ICountResult {
    count: number;
}
/**
 * SodaOperation.remove() result.
 * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclassremove
 */
export interface IRemoveResult {
    count: number;
}
/**
 * SodaOperation.replace() result.
 * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclassreplaceone
 */
export interface IReplaceResult {
    replaced: boolean;
}
/**
 * SODA database access class. SodaDatabase is the top level object for
 * SODA operations. A 'SODA database' is an abstraction, allowing access to SODA
 * collections in that 'SODA database', which then allow access to documents in
 * those collections.
 * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadatabaseclass
 */
export declare abstract class ISodaDatabase {
    /**
     * Creates a SODA collection of the given name.
     * If a collection with the same name already exists,
     * then that existing collection is opened without error.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadbcreatecollection
     * @param collectionName name of the collection to be created.
     * @param options the options that specify the collection, see
     *        CreateCollectionOptions.
     * @return a new SodaCollection object.
     */
    abstract createCollection(collectionName: string, options?: ICreateCollectionOptions): ISodaCollection;
    /**
     * Constructs a proto SodaDocument object usable for SODA insert and replace
     * methods. SodaDocument attributes like createdOn will not be defined, and
     * neither will attributes valid in options but not specified. The document
     * will not be stored in the database until an insert or replace method is
     * called.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadbcreatedocument
     * @param content the document content.
     * @param options the options that specify the document, see
     *                CreateDocumentOptions.
     * @return a new SodaDocument object.
     */
    abstract createDocument(content: string | Uint8Array | Record<string, any>, options?: ICreateDocumentOptions): ISodaDocument;
    /**
     * Gets an array of collection names in alphabetical order.
     * Returns names that start with the given string, and all subsequent names,
     * in alphabetic order.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadbgetcollectionnames
     * @param options see GetCollectionNameOptions.
     * @return an array of matching collection names.
     */
    abstract getCollectionNames(options?: IGetCollectionNameOptions): Array<string>;
    /**
     * Opens an existing SodaCollection of the given name.
     * The collection can then be used to access documents.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadbopencollection
     * @param collectionName the name of the collection to open.
     * @return a new SodaCollection object if the collection exists.
     *         If the requested collection does not exist undefined will be
     *         returned.
     */
    abstract openCollection(collectionName: string): ISodaCollection;
}
/**
 * SODA collection class. A SODA collection is a set of SodaDocuments.
 * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacollectionclass
 */
export declare abstract class ISodaCollection {
    /**
     * Name of the collection.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacollectionproperties
     */
    abstract get name(): string;
    /**
     * Metadata for the collection. The metadata will conform to the JSON object
     * layout specified in the Oracle Database
     * "SODA Collection Metadata Components (Reference)" documentation.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacollectionproperties
     * @see https://docs.oracle.com/en/database/oracle/simple-oracle-document-access/adsdi/soda-collection-metadata-components-reference.html
     */
    abstract get metaData(): Record<string, any>;
    /**
     * Creates an index on a SODA collection, to improve the performance of SODA
     * query-by-examples (QBE) or enable text searches. Different index types can
     * be created, the indexSpec parameter must conform to the JSON object layout
     * specified in the Oracle Database "SODA Index Specifications (Reference)"
     * documentation.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacollcreateindex
     * @see https://docs.oracle.com/en/database/oracle/simple-oracle-document-access/adsdi/soda-index-specifications-reference.html
     * @param indexSpec index specification,
     *        see "SODA Index Specifications (Reference)"
     * @throws an exception if the index creation fails.
     */
    abstract createIndex(indexSpec: Record<string, any>): void;
    /**
     * Drops the current collection.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacolldrop
     * @return a DropResult containing a dropped value of true if the drop
     * operation succeeded or false if the collection does not exist.
     * @throws an exception if the collection drop fails.
     */
    abstract drop(): IDropResult;
    /**
     * Drops the specified index.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacolldropindex
     * @param indexName the name of the index to drop
     * @param options an optional force flag may be specified
     * @return a DropIndexResult containing a dropped value of true if the
     * drop index operation succeeded or false if the index doesn't exist.
     * @throws an exception if the index drop fails.
     */
    abstract dropIndex(indexName: string, options?: IDropIndexOptions): IDropIndexResult;
    /**
     * Locate and order a set of SODA documents for retrieval, replacement,
     * or removal.
     * with non-terminal and terminal methods, see SodaOperation for details.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacollfind
     * @return a SodaOperation object which is used via method chaining
     */
    abstract find(): ISodaOperation;
    /**
     * Infers the schema of a collection of JSON documents.
     * The data guide is represented as JSON content in a SodaDocument.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacollgetdataguide
     * @return a new SodaDocument containing the inferred schema.
     * @throws an exception if the schema inference fails.
     */
    abstract getDataGuide(): ISodaDocument;
    /**
     * Inserts an array of Objects or SodaDocuments into the collection.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacollinsertmany
     * @param docs an array of Objects or SodaDocuments to be inserted into the
     *             collection.
     * @throws an exception if a document insertion fails. The offset attribute on
     * the Error object will contain the number of documents that were
     * successfully inserted. Subsequent documents in the input array will not be
     * inserted.
     */
    abstract insertMany(docs: Array<Record<string, any> | ISodaDocument>): void;
    /**
     * Inserts an array of Objects or SodaDocuuments into the collection and
     * returns the documents which contain all SodaDocument components except for
     * content, for performance reasons.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacollinsertmanyandget
     * @param docs an array of Objects or SodaDocuments to be inserted into the
     *             collection.
     * @return an array of inserted SodaDocuments.
     * @throws an exception if a document insertion fails. The offset attribute on
     * the Error object will contain the number of documents that were
     * successfully inserted. Subsequent documents in the input array will not be
     * inserted.
     */
    abstract insertManyAndGet(docs: Array<Record<string, any> | ISodaDocument>): Array<ISodaDocument>;
    /**
     * Inserts a given document to the collection. The input document can be
     * either a JavaScript object representing the data content, or it can be an
     * existing SodaDocument.,
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacollinsertone
     * @param doc an Object or SodaDocument to insert into the collection.
     * @throws an exception if insertion fails.
     */
    abstract insertOne(doc: Record<string, any> | ISodaDocument): void;
    /**
     * Inserts a document in a collection and returns the result document which
     * contains all SodaDocument components except for content, for performance
     * reasons.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacollinsertoneandget
     * @param doc the Object or SodaDoc to insert into the collection.
     * @return the inserted SodaDocument.
     * @throws an exception if insertion fails.
     */
    abstract insertOneAndGet(doc: Record<string, any> | ISodaDocument): ISodaDocument;
    /**
     * This method behaves like sodaCollection.insertOne() with the exception that
     * if a document with the same key already exists, then it is updated instead.
     * The collection must use client-assigned keys, which is why save()
     * accepts only a SodaDocument, unlike insertOne(). If the collection is not
     * configured with client-assigned keys, then the behaviour is exactly the
     * same as sodaCollection.insertOne().
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#user-content-sodacollsave
     * @param doc the document to save.
     */
    abstract save(doc: ISodaDocument): void;
    /**
     * This method behaves like sodaCollection.insertOneAndGet() with the
     * exception that if a document with the same key already exists, then it is
     * updated instead. The collection must use client-assigned keys keys, which
     * is why saveAndGet() accepts only a SodaDocument, unlike insertOneAndGet().
     * If the collection is not configured with client-assigned keys, then the
     * behaviour is exactly the same as sodaCollection.insertOneAndGet().
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#user-content-sodacollsaveandget
     * @param doc the document to save.
     * @return the saved document.
     */
    abstract saveAndGet(doc: ISodaDocument): ISodaDocument;
    /**
     * This method truncates a collection, removing all documents. The collection
     * will not be deleted.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#user-content-sodacolltruncate
     * @throws an exception if truncation fails.
     */
    abstract truncate(): any;
}
/**
 * SODA find operation class. This class is used to search and retrieve SODA
 * documents from a SodaCollection. It provides non-terminal search condition
 * operations and terminal SodaDocument retrieval operations.
 * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclass
 */
export declare abstract class ISodaOperation {
    /**
     * Non-terminals.
     */
    /**
     * Sets the size of an internal buffer used for fetching documents from a
     * collection with the terminal SodaOperation methods getCursor() and
     * getDocuments().
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclassfetcharraysize
     * @param size the buffer size to use.
     * @return the SodaOperation object.
     */
    abstract fetchArraySize(size: number): ISodaOperation;
    /**
     * Sets a filter specification for the operation, allowing for complex
     * document queries and ordering of JSON documents. Refer to
     * @see https://docs.oracle.com/en/database/oracle/simple-oracle-document-access/adsdi/overview-soda-filter-specifications-qbes.html
     * and
     * @see https://docs.oracle.com/en/database/oracle/simple-oracle-document-access/adsdi/soda-filter-specifications-reference.html
     * for details of filter specifications.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclassfilter
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaqbesearches
     * @param filter the filter specification to use.
     * @return the SodaOperation object.
     */
    abstract filter(filter: Record<string, any>): ISodaOperation;
    /**
     * Sets the key value to be used to match a document for the operation.
     * Any previous calls made to this method or keys() will be ignored.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclasskey
     * @param key the search key to use.
     * @return the SodaOperation object.
     */
    abstract key(key: string): ISodaOperation;
    /**
     * Sets the keys to be used to match multiple documents for the operation.
     * Any previous calls made to this method or key() will be ignored.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclasskeys
     * @param keys the search keys to use.
     * @return the SodaOperation object.
     */
    abstract keys(keys: Array<string>): ISodaOperation;
    /**
     * Sets the maximum number of documents that a terminal method will apply to.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclasslimit
     * @param n the maximum number of documents to return. Must be greater than 0.
     * @return the SodaOperation object.
     */
    abstract limit(n: number): ISodaOperation;
    /**
     * Sets the number of documents that will be skipped before the terminal
     * method is applied. n must be greater than or equal to 0.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationskip
     * @param n the number of documents to skip.
     * @return the SodaOperation object.
     */
    abstract skip(n: number): ISodaOperation;
    /**
     * Sets the document version that retrieved documents must have.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclassversion
     * @param value the version of retrieved documents.
     * @return the SodaOperation object.
     */
    abstract version(value: string): ISodaOperation;
    /**
     * Terminals.
     */
    /**
     * Returns the number of documents matching the given SodaOperation query
     * criteria. If skip() or limit() are set, then an exception will be thrown.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclasscount
     * @return a result object with a count field containing the number of
     * matching documents.
     * @throws an exception id skip() or limit() are set.
     */
    abstract count(): ICountResult;
    /**
     * Returns a SodaDocumentCursor for documents that match the SodaOperation
     * query criteria.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclassgetcursor
     * @return a cursor that can be used to iterate over the matched documents.
     */
    abstract getCursor(): ISodaDocumentCursor;
    /**
     * Gets an array of SodaDocuments matching the SodaOperation query criteria.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#-824123-sodaoperationgetdocuments
     * @return an array of documents, empty if none match.
     */
    abstract getDocuments(): Array<ISodaDocument>;
    /**
     * Obtains one document matching the SodaOperation query criteria.
     * If more than one document is matched, then only the first is returned.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclassgetone
     * @return the first matching document, or undefined if none match.
     */
    abstract getOne(): ISodaDocument;
    /**
     * Removes a set of documents matching the SodaOperation query criteria.
     * If skip() or limit(0 are set they are ignored.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclassremove
     * @return a result object with a count field containing the number of
     * removed documents.
     */
    abstract remove(): IRemoveResult;
    /**
     * Replaces a document in a collection. The input document can be either a
     * JavaScript object representing the data content, or it can be an existing
     * SodaDocument. The key() non-terminal must be used when using replaceOne().
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclassreplaceone
     * @param newDoc the new content or SodaDocument.
     * @return a result object with a boolean replaced field which will be
     * true if the document was replaced successfully and false otherwise.
     */
    abstract replaceOne(newDoc: Record<string, any> | ISodaDocument): IReplaceResult;
    /**
     * Replaces a document in a collection and return the result document which
     * contains all SodaDocument components except for the content.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclassreplaceoneandget
     * @param newDoc the new content or SodaDocument.
     * @return The updated SodaDocument if replacement was successful, otherwise
     *         undefined.
     */
    abstract replaceOneAndGet(newDoc: Record<string, any> | ISodaDocument): ISodaDocument;
}
/**
 * SODA document cursor class.
 * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadocumentcursorclass
 * A SodaDocumentCursor is used to walk through a set of SODA documents returned
 * from a find() getCursor() method.
 */
export declare abstract class ISodaDocumentCursor {
    /**
     * Close the cursor.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadoccursorclose
     */
    abstract close(): void;
    /**
     * Returns the next SodaDocument in the cursor returned by a find().
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadoccursorgetnext
     * @return the next document, or undefined when there are no further
     * documents.
     */
    abstract getNext(): ISodaDocument;
}
/**
 * SODA document class. SodaDocuments represents the document for SODA read and
 * write operations.
 * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadocumentclass
 */
export declare abstract class ISodaDocument {
    /**
     * SODA document properties.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadocumentproperties
     */
    /**
     * The creation time of the document as a string in the UTC time zone using an
     * ISO8601 format. By default, SODA sets this automatically.
     */
    readonly createdOn: string;
    /**
     * A unique key value for this document. By default, SODA automatically
     * generates the key.
     */
    readonly key: string;
    /**
     * Last modified time of the document as a string in the UTC time zone using
     * an ISO8601 format. By default, SODA sets this automatically.
     */
    readonly lastModified: string;
    /**
     * An arbitrary string value designating the content media type. The
     * recommendation when creating documents is to use a MIME type for the media
     * type. By default this property will be 'application/json'.
     */
    readonly mediaType: string;
    /**
     * Version of the document. By default, SODA automatically updates the version
     * each time the document is changed.
     */
    readonly version: string;
    /**
     * Return the document content as an object.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadocgetcontent
     * @return the document content as an object.
     * @throws an exception if the document content is not JSON and cannot be
     * converted to an object.
     */
    abstract getContent(): Record<string, any>;
    /**
     * Return the document content as a Uint8Array. If the collection storage is
     * BLOB (default) and the mediaType is 'application/json', then the returned
     * Uint8Array is identical to the one that was stored. If the storage is not
     * BLOB, it is UTF-8 encoded.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadocgetcontentasbuffer
     * @return the document content as a Uint8Array.
     */
    abstract getContentAsUint8Array(): Uint8Array;
    /**
     * Return JSON document content as a string. If the document encoding is
     * unknown, UTF-8 will be used.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadocgetcontentasstring
     * @return the document content as a string.
     */
    abstract getContentAsString(): string;
}

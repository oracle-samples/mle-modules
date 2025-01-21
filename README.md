# MLE Modules

Oracle's Multilingual Engine (MLE), powered by GraalVM, enables [JavaScript execution in Oracle Database][1]. Oracle's JavaScript implementation ships with a number of essential JavaScript modules.

This repository contains documentation and interface definitions (in the form of TypeScript declarations) for those predefined modules. While the documentation consists of human-readable, linked pages, the TypeScript declaration files are typically consumed by an IDE. Developers using Oracle's SQL Developer Extension for Visual Studio Code for example benefit from a better developer experience thanks to code-completion, and Typescript checks.

The following JavaScript modules are currently available with Oracle's latest database release:

- MLE SQL Driver: [mle-js-oracledb][mle-js-oracledb]
- MLE Bindings: [mle-js-bindings][mle-js-bindings]
- MLE PL/SQL Types: [mle-js-plsqltypes][mle-js-plsqltypes]
- MLE Fetch API polyfill: [mle-js-fetch][mle-js-fetch]
- MLE Base64 Encoding: [mle-encode-base64][mle-encode-base64]
- MLE Encodings: [mle-js-encodings][mle-js-encodings]
- MLE Foreign Function Interface (FFI): [mle-js-plsql-ffi][mle-js-plsql-ffi]

Apart from the modules shipping with the database listed above, you can optionally install modules from community repositories into the database after carefully vetting them with the relevant teams in your organisation.

## Installation

This section details the both the installing and how to use the supplied typescript declarations in your Project.

You need access to an Oracle Database 23ai system running either on Linux x86-64 or aarch64 to make use of the JavaScript modules provided in Oracle Database Multilingual Engine (MLE). Developers wishing to experiment with MLE can choose from cloud solutions such as Oracle's Always-Free Autonomous Database (Serverless) [see this blog article][2] or use the container images available from [container-registry.oracle.com](https://container-registry.oracle.com/ords/ocr/ba/database/free). You can find more details [described in this blog post][5].

The following sections describe how to use the Typescript declarations with your project.

### All-In-One Installation (recommended)

You can install all relevant module declarations including the declarations of all global symbols (`Polyglot`, `console`, `session`, `soda`, `oracledb`, `OracleNumber`, etc.) in one bundle. You can conveniently install `mle-js` using Node Package Manager (NPM) or a comparable tool.

Once the declarations have been downloaded and configured you can use them in your Typescript project using the `<reference>` tag as shown:

```typescript
/// <reference types="mle-js" />

/* more Typescript code ... */
```

Provided your project's `tsconfig.json` has been configured correctly you should immediately see a benefit when writing server-side JavaScript code.

### Installing Individual Modules

If you only need declarations of a particular module, you may also install declarations individually:

```sh
npm install mle-js-oracledb
npm install mle-js-bindings
npm install mle-js-plsqltypes
npm install mle-js-fetch
npm install mle-encode-base64
npm install mle-js-encodings
npm install mle-js-plsql-ffi
```

## Documentation

The following sections cover each declaration file's content, the module it documents, and what you can expect when referencing them in your code.

### All-In-One bundle for MLE modules (mle-js)

This bundle contains all relevant declarations of predefined JavaScript modules that ship with the database plus the declarations of all global symbols. Most users should start with this file

[Continue reading...][mle-js]

### MLE SQL Driver (mle-js-oracledb)

You use the SQL Driver to interact with the database. You can perform any operation with the MLE SQL Driver that you would SQL and PL/SQL for. If you prefer a more JavaScript-like experience working with the Database API [see PL/SQL Packages and Types Reference][6] you should also have a look at the Foreign Function Interface (FFI) below.

[Continue reading...][mle-js-oracledb]

### MLE Bindings for Oracle Database `DBMS_MLE` (mle-js-bindings)

The MLE Bindings module can be used to exchange values between PL/SQL and JavaScript and is mostly used for Dynamic MLE Execution based on `DBMS_MLE`.
The module also takes care of converting values from PL/SQL types to JavaScript types and vice-versa automatically as required.

[Continue reading...][mle-js-bindings]

### MLE PL/SQL Types (mle-js-plsqltypes)

MLE allows importing SQL values from PL/SQL as well as fetching them from a SQL statement.

By default, SQL values are converted to JavaScript values during that process, e.g. an Oracle `NUMBER` is implicitly converted to a JavaScript `number`.
Sometimes it is required to have JavaScript values that behave exactly as if they were SQL values.
The `mle-js-plsqltypes` module contains JavaScript APIs for such JavaScript objects that wrap PL/SQL objects.

[Continue reading...][mle-js-plsqltypes]

### MLE Fetch API polyfill (mle-js-fetch)

MLE offers the following functionality to fetch and upload resources asynchronously across the network: fetch, Headers, Request, Response.
In order to make the Fetch API available, it needs to be imported first.

[Continue reading...][mle-js-fetch]

### MLE functions to work with base64 encoded data (mle-encode-base64)

This module contains code to work with base64-encoded data.

[Continue reading...][mle-encode-base64]

### MLE text encoding API (mle-js-encodings)

This module is a partial implementation of the Encoding API.
By default, TextDecoder and TextEncoder are available in the global namespace and can be used directly.

[Continue reading...][mle-js-encodings]

### MLE Foreign Function Interface (FFI): API for calling PL/SQL functionality directly (mle-js-plsql-ffi)

This module offers a simple, straight-forward way for interacting with PL/SQL code from within JavaScript.

[Continue reading...][mle-js-plsql-ffi]

### Version Mapping

The following table shows which version of module documentation and declarations work with which version of Oracle Database:

| Oracle Database  | Declarations | Documentation |
| ---------------- | ------------ | ------------- |
| 23ai | [mle-js@23.7.0][mle-js-types-237] for Oracle 23.7 <br/> [mle-js@23.6.0][mle-js-types-236] for Oracle 23.6 <br/> [mle-js@23.5.0][mle-js-types-235] for Oracle 23.5 <br/> [mle-js@23.4.0][mle-js-types-234] for Oracle 23.4 <br/> [mle-js@23.3.0][mle-js-types-233] for Oracle 23.3 <br/> [mle-js@23.2.0][mle-js-types-232] for Oracle 23.2 - Free | **[mle-js (23ai)][mle-js]** <br/> [mle-js-oracledb (23ai)][mle-js-oracledb] <br/> [mle-js-bindings (23ai)][mle-js-bindings] <br/> [mle-js-plsqltypes (23ai)][mle-js-plsqltypes] <br/> [mle-js-fetch (23ai)][mle-js-fetch] <br/> [mle-encode-base64 (23ai)][mle-encode-base64]|
| 21c | [mle-js@21.3.1][mle-js-types-213] | [mle-js-oracledb (21c)][mle-js-oracledb-21c] <br/> [mle-js-bindings (21c)][mle-js-bindings-21c] <br/> [mle-js-plsqltypes (21c)][mle-js-plsqltypes-21c] |

## Examples

This section describes how to use the Typescript declarations with MLE/JavaScript as well as some interactive, ad-hoc JavaScript execution.

### Typescript

Using the Typescript declarations you can create an MLE module as follows.

```typescript
/// <reference types="mle-js" />

interface ISessionMetaData {
    username: string;
    oracleVersion: string;
}

/**
 * A simple JavaScript function fetches the username and database
 * release using the MLE JavaScript SQL driver.
 * 
 * @returns an instance of ISessionMetaData
 */
export function sessionAndDBInfo(): ISessionMetaData {
    // instantiate the session meta data
    const mySession: ISessionMetaData = {
        username: "unknown",
        oracleVersion: "unknown",
    };

    let sql = `select
            user`;

    let result = session.execute(sql, [], { outFormat: oracledb.OUT_FORMAT_OBJECT });

    if (result.rows?.length === 1) {
        mySession.username = result.rows[0].USER;
    }

    sql = `select
            version_full
        from
            product_component_version`;

    result = session.execute(sql, [], { outFormat: oracledb.OUT_FORMAT_OBJECT });

    if (result.rows?.length === 1) {
        mySession.oracleVersion = result.rows[0].VERSION_FULL;
    }

    return mySession;
}
```

In the next step you need to transpile the Typescript code to JavaScript. The resulting file can be imported to the Oracle database. [SQL Command Line](https://www.oracle.com/database/sqldeveloper/technologies/sqlcl/) provides a nice way to do that

```
$ sql /nolog

SQLcl: Release 24.3 Production on Wed Jan 15 14:16:01 2025

Copyright (c) 1982, 2025, Oracle.  All rights reserved.

SQL> connect app_user@localhost:5432/freepdb1
Password? (**********?) ***********

Connected.

SQL> mle create-module -filename ./dist/demo.js -module-name demo_module
MLE Module demo_module created
```

### Ad-hoc execution

The following snippet can be run in SQLcl, SQL*Plus, and Oracle SQL Developer Extension for Visual Studio Code. The invocation of the SQL code differs from the Typescript example by using the objects stored in the global scope.

```sql
set serveroutput on;
declare
    l_ctx           dbms_mle.context_handle_t;
    l_source_code   clob;
begin
    -- Create execution context for MLE execution and provide an environment_
    l_ctx    := dbms_mle.create_context();

    -- using q-quotes to avoid problems with unwanted string termination
    l_source_code := 
q'~
    const result = session.execute(
        `select 'hello, world'`,
        [],
        {
            outFormat: oracledb.OUT_FORMAT_ARRAY
        }
    );

    const message = result.rows[0][0];
    console.log(message);
~';
    dbms_mle.eval(
        context_handle => l_ctx,
        language_id => 'JAVASCRIPT',
        source => l_source_code
    );

    dbms_mle.drop_context(l_ctx);
exception
    when others then
        dbms_mle.drop_context(l_ctx);
        raise;
end;
/
```

## Building and deploying larger JavaScript projects

If you plan to use database-side JavaScript at a larger scale, we highly recommend to read our blog post on [Linting MLE JavaScript Modules in Continuous Integration Pipelines][4].

## Changelog

- **Oracle 23.7**
    - MLE Foreign Function Interface (FFI) for calling PL/SQL functionality directly from JavaScript:
    [mle-js-plsql-ffi](https://oracle-samples.github.io/mle-modules/docs/mle-js-plsql-ffi/23ai/)
    - support for setting the [fetchTypeHandler](https://oracle-samples.github.io/mle-modules/docs/mle-js-oracledb/23ai/classes/api.Parameters.html#fetchTypeHandler)
    in `mle-js-oracledb` / `session.execute` for custom handler functions during result fetching
- **Oracle 23.6**
    - improved documentation for OracleNumber
    [infix operators](https://oracle-samples.github.io/mle-modules/docs/mle-js-plsqltypes/23ai/classes/OracleNumber.html).
- **Oracle 23.5**
    - support for
    [sql-template-tag](https://www.npmjs.com/package/sql-template-tag#oracledb)
    in SQL execution in `mle-js-oracledb` / `session.execute` by allowing the
    first argument to be of new type
    [IExecuteArgs](https://oracle-samples.github.io/mle-modules/docs/mle-js-oracledb/23ai/interfaces/api.IExecuteArgs.html)
- **Oracle 23.4 (first release of Oracle 23ai)**
    - support for VECTOR type (INT8ARRAY, FLOAT32ARRAY, FLOAT64, DB_TYPE_VECTOR) in
    [mle-js-oracledb](https://oracle-samples.github.io/mle-modules/docs/mle-js-oracledb/23ai/modules/api.html)
    and
    [mle-js-bindings](https://oracle-samples.github.io/mle-modules/docs/mle-js-bindings/23ai/enums/JSTypes.html)
    including new
    [vectorDimensions](https://oracle-samples.github.io/mle-modules/docs/mle-js-oracledb/23ai/interfaces/api.IMetaData.html#vectorDimensions)
    and
    [vectorFormat](https://oracle-samples.github.io/mle-modules/docs/mle-js-oracledb/23ai/interfaces/api.IMetaData.html#vectorFormat)
    meta data properties
    - support for binding collection types, including new properties
    [elementTypeClass](https://oracle-samples.github.io/mle-modules/docs/mle-js-oracledb/23ai/classes/api.IDbObjectClass.html#elementTypeClass)
    and
    [packageName](https://oracle-samples.github.io/mle-modules/docs/mle-js-oracledb/23ai/classes/api.IDbObjectClass.html#packageName)
    of `DBObjectClass` and
    [maxArraySize](https://oracle-samples.github.io/mle-modules/docs/mle-js-oracledb/23ai/interfaces/api.IBindObjectValue.html#maxArraySize)
    of bind definitions in `mle-js-oracledb`.
    - support for
    [keepInStmtCache](https://oracle-samples.github.io/mle-modules/docs/mle-js-oracledb/23ai/interfaces/api.IExecuteOptions.html#keepInStmtCache)
    option in SQL execution in `mle-js-oracledb` / `session.execute`

## Help

If you have questions or change requests about MLE, please [create a ticket](./CONTRIBUTING.md) or contact [Oracle Support](https://support.oracle.com). Users of [Oracle Database 23ai Free](https://www.oracle.com/database/free/) can refer to the [Database Free forum](https://forums.oracle.com/ords/apexds/domain/dev-community/category/oracle-database-free).

## Contributing

This project welcomes contributions from the community.
Before submitting a pull request, please [review our contribution guide](./CONTRIBUTING.md).

## Security

Please consult the [security guide](./SECURITY.md) for our responsible security vulnerability disclosure process.

## License

Copyright (c) 2022, 2025, Oracle and/or its affiliates.

Released under the Universal Permissive License v1.0 as shown at <https://oss.oracle.com/licenses/upl/>.

[mle-js]: https://oracle-samples.github.io/mle-modules/docs/mle-js/23ai "mle-js 23ai"
[mle-js-oracledb]: https://oracle-samples.github.io/mle-modules/docs/mle-js-oracledb/23ai "mle-js-oracledb 23ai"
[mle-js-bindings]: https://oracle-samples.github.io/mle-modules/docs/mle-js-bindings/23ai "mle-js-bindings 23ai"
[mle-js-plsqltypes]: https://oracle-samples.github.io/mle-modules/docs/mle-js-plsqltypes/23ai "mle-js-plsqltypes 23ai"
[mle-js-fetch]: https://oracle-samples.github.io/mle-modules/docs/mle-js-fetch/23ai "mle-js-fetch 23ai"
[mle-encode-base64]: https://oracle-samples.github.io/mle-modules/docs/mle-encode-base64/23ai "mle-encode-base64 23ai"
[mle-js-encodings]: https://oracle-samples.github.io/mle-modules/docs/mle-js-encodings/23ai "mle-js-encodings 23ai"
[mle-js-plsql-ffi]: https://oracle-samples.github.io/mle-modules/docs/mle-js-plsql-ffi/23ai "mle-js-plsql-ffi 23ai"
[mle-js-oracledb-21c]: https://oracle-samples.github.io/mle-modules/docs/mle-js-oracledb/21c "mle-js-oracledb 21c"
[mle-js-bindings-21c]: https://oracle-samples.github.io/mle-modules/docs/mle-js-bindings/21c "mle-js-bindings 21c"
[mle-js-plsqltypes-21c]: https://oracle-samples.github.io/mle-modules/docs/mle-js-plsqltypes/21c "mle-js-plsqltypes 21c"
[mle-js-types-237]: https://www.npmjs.com/package/mle-js/v/23.7.0 "mle-js@23.7.0"
[mle-js-types-236]: https://www.npmjs.com/package/mle-js/v/23.6.0 "mle-js@23.6.0"
[mle-js-types-235]: https://www.npmjs.com/package/mle-js/v/23.5.0 "mle-js@23.5.0"
[mle-js-types-234]: https://www.npmjs.com/package/mle-js/v/23.4.0 "mle-js@23.4.0"
[mle-js-types-233]: https://www.npmjs.com/package/mle-js/v/23.3.0 "mle-js@23.3.0"
[mle-js-types-232]: https://www.npmjs.com/package/mle-js/v/23.2.0 "mle-js@23.2.0"
[mle-js-types-213]: https://www.npmjs.com/package/mle-js/v/21.3.1 "mle-js@21.3.1"
[1]: https://docs.oracle.com/en/database/oracle/oracle-database/23/mlejs/index.html#Oracle%C2%AE-Database "Oracle Database JavaScript Developer's Guide"
[2]: https://blogs.oracle.com/apex/post/mle-and-the-future-of-server-side-programming-in-oracle-apex "MLE and the Future of Server-Side Programming in Oracle APEX"
[3]: https://docs.oracle.com/en/database/oracle/oracle-database "Oracle Database"
[4]: https://blogs.oracle.com/developers/post/linting-mle-javascript-modules-in-continuous-integration-pipelines "JavaScript CI/CD blog"
[5]: https://blogs.oracle.com/developers/post/fastpath-to-developing-with-oracle-application-express-and-multilingual-engine "Fast-path to developing with Oracle Application Express and Multilingual Engine"
[6]: https://docs.oracle.com/en/database/oracle/oracle-database/23/arpls/index.html "Oracle Database PL/SQL Packages and Types Reference"

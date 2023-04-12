# MLE Modules
The Oracle Database Multilingual Engine (MLE) enables [JavaScript execution in Oracle Database as of version 21c][1].
In this database JavaScript environment, there exist some JavaScript modules that are available out of the box.
This repository contains documentation and interface definitions (in the form of TypeScript declarations) for those pre-defined modules.
While the documentation contains set of human-readable, linked pages, the TypeScript declaration files are typically consumed by an IDE for improving auto-completion.
This is particularly useful in a scenario where JavaScript code gets developed locally in an IDE and then deployed to the database.

The following JavaScript modules are currently available:
- MLE SQL Driver: [mle-js-oracledb][mle-js-oracledb]
- MLE Bindings: [mle-js-bindings][mle-js-bindings]
- MLE PL/SQL Types [mle-js-plsqltypes][mle-js-plsqltypes]
- MLE Fetch API polyfill [mle-js-fetch][mle-js-fetch]

## Installation
You need an Oracle Database to make use of the JavaScript modules provided in the Oracle Database Multilingual Engine (MLE).
A very convenient way of getting an Oracle Database instance is to create an always-free Oracle Cloud account and set up a free autonomous database instance there as our [blog article][2] explains in great detail.

You can install all relevant declarations of these modules plus the declrations of all global sybmols (`Polyglot, `console`, `session`, `soda`, `oracledb`, `OracleNumber`, etc.) in one bundle.
You can conveniently install `mle-js` from NPM and then reference it in the beginning of your JavaScript code using the `<reference>` tag:

```
npm install mle-js
/// <reference types="mle-js" />
```

If you only need declarations of a particular module, you can also just install them individually:

```
npm install mle-js-oracledb
npm install mle-js-bindings
npm install mle-js-plsqltypes
npm install mle-js-fetch
```

## Documentation

### MLE SQL Driver (mle-js-oracledb)
If JavaScript is executed inside the database, SQL statements can be executed using an easy to use SQL driver.
This driver is built-in into the JavaScript engine in the database.

[Continue reading...][mle-js-oracledb]

### MLE Bindings for Oracle Database `DBMS_MLE` (mle-js-bindings)
The MLE Bindings module can be used to exchange values between PL/SQL and JavaScript.
The module also takes care of converting values from PL/SQL types to JavaScript types and vice-versa automatically as required.

[Continue reading...][mle-js-bindings]

### MLE PL/SQL Types (mle-js-plsqltypes)
MLE allows importing SQL values from PL/SQL as well as fetching them from a SQL statement.
By default, SQL values get converted to JavaScript values during that process, e.g. an Oracle `NUMBER` gets converted to a JavaScript `number`.
Sometimes it is required to have JavaScript values that behave exactly as if they were SQL values.
The mle-js-plsqltypes module contains JavaScript APIs for such JavaScript objects that wrap PL/SQL objects.

[Continue reading...][mle-js-plsqltypes]

### MLE Fetch API polyfill (mle-js-fetch)
MLE offers the following functionality to fetch and upload resources asynchronously across the network: fetch, Headers, Request, Response.
In order to make the Fetch API available, it needs to be imported first.

[Continue reading...][mle-js-fetch]

### Oracle Database
Oracle Database is the world's most popular database.
Available on cloud and on-premises platforms, Oracle Database 19c is the most recent long term release, with an extended support window.
Oracle Database 21c is the latest innovation release, initially available on Oracle cloud through Autonomous Database Free Tier and Database Cloud Service.

[Continue reading...][3]

### Version Mapping
The following table shows which version of module documentation and declarations work with which version of Oracle Database:

| Oracle Database  | Modules |
| ---------------- | --------|
| 23c | [mle-js-oracledb@23.2.0][mle-js-oracledb] <br/> [mle-js-bindings@23.2.0][mle-js-bindings] <br/> [mle-js-plsqltypes@23.2.0][mle-js-plsqltypes] <br/> [mle-js-fetch@23.2.0][mle-js-fetch] |
| 21c | [mle-js-oracledb@21.3.0][mle-js-oracledb-21c] <br/> [mle-js-bindings@21.3.0][mle-js-bindings-21c] <br/> [mle-js-plsqltypes@21.3.0][mle-js-plsqltypes-21c] |

## Examples
The following code snippet exemplifies the usage of all MLE modules combined.
For additional examples, please check the module documentation pages or have a look at our [blog article][2].

```JavaScript
// imports
const oracledb = require('mle-js-oracledb');
const bindings = require('mle-js-bindings');
const plsqltypes = require("mle-js-plsqltypes");

// Read a large number as an Oracle NUMBER from SQL and add another ORACLE NUMBER to it.
// mle-js-oracledb is used for reading from SQL and mle-js-plsqltypes is used to construct the second Oracle NUMBER.
const conn = oracledb.defaultConnection();
const query = "SELECT 9007199254740992 AS n FROM dual";
const options = { fetchInfo: { N: { type: oracledb.ORACLE_NUMBER } } };
const queryResult = conn.execute(query, [], options);
const OracleNumber = plsqltypes.OracleNumber;
const result = queryResult.rows[0][0].add(new OracleNumber(7));

// Use mle-js-bindings to export the result of the computation.
// On the database side, this result could be retrieved using something like `dbms_mle.import_from_mle(ctx, 'result', result);`.
bindings.exportValue("result", result);
```

## Help
If you have questions or change requests about MLE, please [create a ticket](./CONTRIBUTING.md) or contact [Oracle Support](https://support.oracle.com).

## Contributing
This project welcomes contributions from the community.
Before submitting a pull request, please [review our contribution guide](./CONTRIBUTING.md).

## Security

Please consult the [security guide](./SECURITY.md) for our responsible security vulnerability disclosure process.

## License
Copyright (c) 2022 Oracle and/or its affiliates.

Released under the Universal Permissive License v1.0 as shown at <https://oss.oracle.com/licenses/upl/>.

[mle-js-oracledb]: http://oracle-samples.github.io/mle-modules/docs/mle-js-oracledb/23c "mle-js-oracledb@23.2.0"
[mle-js-bindings]: http://oracle-samples.github.io/mle-modules/docs/mle-js-bindings/23c "mle-js-bindings@23.2.0"
[mle-js-plsqltypes]: http://oracle-samples.github.io/mle-modules/docs/mle-js-plsqltypes/23c "mle-js-plsqltypes@23.2.0"
[mle-js-fetch]: http://oracle-samples.github.io/mle-modules/docs/mle-js-fetch/23c "mle-js-fetch@23.2.0"
[mle-js-oracledb-21c]: http://oracle-samples.github.io/mle-modules/docs/mle-js-oracledb/21c "mle-js-oracledb@21.3.1"
[mle-js-bindings-21c]: http://oracle-samples.github.io/mle-modules/docs/mle-js-bindings/21c "mle-js-bindings@21.3.1"
[mle-js-plsqltypes-21c]: http://oracle-samples.github.io/mle-modules/docs/mle-js-plsqltypes/21c "mle-js-plsqltypes@21.3.1"
[1]: https://medium.com/graalvm/mle-executing-javascript-in-oracle-database-c545feb1a010 "Multilingual Engine: Executing JavaScript in Oracle Database"
[2]: https://blogs.oracle.com/apex/post/mle-and-the-future-of-server-side-programming-in-oracle-apex "MLE and the Future of Server-Side Programming in Oracle APEX"
[3]: https://docs.oracle.com/en/database/oracle/oracle-database/21/index.html "Oracle Database 21c"

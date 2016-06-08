///<reference path="../../import.d.ts"/>

import * as ICollectionTests from "./ICollection";
import List from "../../../../dist/commonjs/System/Collections/List";
import assert = require('assert');

const CLASS_NAME = 'List';

ICollectionTests.StringCollection(CLASS_NAME, new List<string>());
ICollectionTests.NumberCollection(CLASS_NAME, new List<number>());
ICollectionTests.InstanceCollection(CLASS_NAME, new List<Object>());

// Check Linq support...
var list = new List([1,2,3,4]);
assert.equal(list.linq.where(i=>i>2).count(),2);
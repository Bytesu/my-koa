/**
 * Created by byte_ on 2015/7/8.
 */
function MyCustomError() {}
MyCustomError.prototype = Object.create(Error.prototype);
Error.captureStackTrace(this,MyCustomError);
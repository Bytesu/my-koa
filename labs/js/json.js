/**
 * Created by byte on 2015/7/8.
 */
var data = {
    name: "aaa",
    getName: function() {
        return this.name;
    },
    setName: function(value) {
        this.name = value;
    }
}
console.log(data.name)
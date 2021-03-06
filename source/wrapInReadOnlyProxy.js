function wrapInReadOnlyProxy(orig, throwOnSet = false) {
    if (typeof orig === "object") {
        return new Proxy(orig, {
            get: function(target, property) {
                if (property in target) {
                    return wrapInReadOnlyProxy(target[property]);
                }
                return undefined;
            },
            set: function() {
                if (throwOnSet) {
                    throw new Error("Can't set values on a readonly proxy");
                }
            }
        });
	}
	return orig;
}

module.exports = wrapInReadOnlyProxy;


import stateDoc from '../utils/stateDoc';

module.exports = function(source) {
	/* istanbul ignore if */
	if (this.cacheable) {
		this.cacheable();
	}
	const file = this.request.split('!').pop();
	stateDoc.saveMixin(source, file);
	return source;
}

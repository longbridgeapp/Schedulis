/*! Select2 4.0.6-rc.1 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function () { if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; return e.define("select2/i18n/zh-CN", [], function () { return { errorLoading: function () { return wtssI18n.select2.unableLoad }, inputTooLong: function (e) { var t = e.input.length - e.maximum, n = "请删除" + t + "个字符"; if (langType === "en_US") { n = "Please delete " + t + " characters" } return n }, inputTooShort: function (e) { var t = e.minimum - e.input.length, n = "请再输入至少" + t + "个字符"; if (langType === "en_US") { n = "Please enter at least " + t + " characters" } return n }, loadingMore: function () { return wtssI18n.select2.loadResults }, maximumSelected: function (e) { var t = "最多只能选择" + e.maximum + "个项目"; if (langType === "en_US") { t = "Only " + e.maximum + " projects can be selected at most" } return t }, noResults: function () { return wtssI18n.select2.noResultFound }, searching: function () { return wtssI18n.select2.searching } } }), { define: e.define, require: e.require } })
const { DateTime } = require("luxon")

module.exports = function(eleventyConfig) {
    //add css to watch list
    // eleventyConfig.addWatchTarget("./css/")

    // copy images to _site
    eleventyConfig.addPassthroughCopy("assets");
    // copy css to _site
    eleventyConfig.addPassthroughCopy("css");

    eleventyConfig.setDataDeepMerge(true);

    // CUSTOM FILTERS
    eleventyConfig.addFilter("head", function(array, n) {
        if(!Array.isArray(array) || array.length === 0) {
            return [];
        }
        if(n < 0) {
            return array.slice(n);
        }
        return array.slice(0, n);
    })

    eleventyConfig.addFilter("min", function(...numbers) {
        return Math.min.apply(null, numbers);
    })

    eleventyConfig.addFilter("readableDate", function(dateObj) {
        return DateTime.fromJSDate(dateObj, {zone: "utc"}).toFormat("dd LLL yyyy");
    })

    // filter out generic tags from tag collection
    function filterTagList(tags) {
        return (tags || []).filter(tag => ["post", "posts", "publication", "publications"].indexOf(tag) == -1);
    }

    eleventyConfig.addFilter("filterTagList", filterTagList);

    eleventyConfig.addCollection("years", function(collection) {
        const yearSet = new Set();
        collection.getFilteredByTag("publications").forEach(element => {
            if (element.data.year) yearSet.add(element.data.year)
        })

        return yearSet;
    })

    eleventyConfig.addCollection("tagList", function(collection) {
        const tagSet = new Set();
        collection.getAll().forEach(element => {
            (element.data.tags || []).forEach(tag => tagSet.add(tag));
        });

        return filterTagList([...tagSet]);
    })

    eleventyConfig.addCollection("navList", function(collection) {
        return collection.getAll()
            .filter(item => item.data.nav)
            .sort((a, b) => a.data.nav.order - b.data.nav.order);
    })
}

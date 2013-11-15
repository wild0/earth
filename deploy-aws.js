/**
 * aws - deploys "earth" files to AWS S3
 */

"use strict";

var util = require("util");
var tool = require("./tool");
var aws = require("./aws");

console.log("============================================================");
console.log(new Date().toISOString() + " - Starting");

// UNDONE: delete objects in S3 but not in the list below
// UNDONE: super awesome logic that defines and iterates file sets, to eliminate this list
[

    "about.html",
    "index.html",
    "natural-earth.png",
    "css/styles.css",
    "css/mplus-2p-thin-056.ttf",
    "data/earth-topo.json",
    "data/weather/current/current-wind-isobaric-1000hPa-gfs-1.0.json",
    "js/d3.v3.js",
    "js/d3.geo.polyhedron.v0.js",
    "js/d3.geo.projection.v0.js",
    "js/earth.js",
    "js/mvi.js",
    "js/topojson.v1.js",
    "js/util.js",
    "js/when.js"

].forEach(function(key) {
    aws.uploadFile("public/" + key, aws.S3_BUCKET, key).then(function(result) {
        console.log(key + ": " + util.inspect(result));
    }, tool.report);
});

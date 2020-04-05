import LazyLoad from "../../dist/lazyload.esm.min.js";

var toAnimate = [];

function addToAnimate(element) {
    toAnimate.push(element);
    console.log("Pushing", element, toAnimate);
}

var interval = setInterval(() => {
    var element = toAnimate.shift();
    if (!element) return;
    console.log("Shifting", element, toAnimate);
    element.classList.add("visible");
}, 50);

new LazyLoad({
    callback_loaded: addToAnimate,
    callback_error: addToAnimate,
    callback_finish: function() {
        clearInterval(interval);
    }
});

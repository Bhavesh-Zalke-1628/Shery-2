const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
})

gsap.from(".nLink", {
    stagger: .2,
    y: 20,
    duration: 1,
    opacity: 0,
    ease: Power4
})


Shery.textAnimate("#headings h1", {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.2,
});

gsap.from(".anim2", {
    y: 50,
    opacity: 0,
    ease: Expo,
    duration: 1,
    stagger: .2,
})

Shery.imageEffect("#imgnText img", {
    style: 3,
    config: { "uFrequencyX": { "value": 11.57, "range": [0, 100] }, "uFrequencyY": { "value": 13.22, "range": [0, 100] }, "uFrequencyZ": { "value": 47.11, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 14.02 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7499999743635942 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.56, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
})

Shery.imageEffect("#sustImgWrapper img", {
    style: 5,
    // debug: true,
    config: { "a": { "value": 4.46, "range": [0, 30] }, "b": { "value": -0.26, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.6666666894545837 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.56, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
})
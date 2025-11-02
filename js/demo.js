!function() {
    'use strict';

    var canvas = document.querySelector('#webgl');

    // Scroll variables
    var scroll = 0.0, velocity = 0.0, lastScroll = 0.0;

    // Initialize REGL from a canvas element
    var regl = createREGL({
        canvas: canvas,
        onDone: function(error, regl) {
            if (error) { alert(error); }
        }
    });

    // Load two background images for crossfade
    var imgA = new Image();
    var imgB = new Image();
    var loaded = 0;

    function tryStart() {
        if (loaded < 2) return;
        // Slight delay so the CSS fallback isn't jarring
        setTimeout(function() { document.body.classList.remove('loading'); }, 300);

        var texA = regl.texture(imgA);
        var texB = regl.texture(imgB);

        // Cache target section top for mix computation
        var worksSection = document.getElementById('works');
        var worksTop = worksSection ? worksSection.offsetTop : (document.documentElement.scrollHeight * 0.5);

        // Update on resize/orientation change
        function recalcWorksTop() {
            worksTop = worksSection ? worksSection.offsetTop : (document.documentElement.scrollHeight * 0.5);
        }
        window.addEventListener('resize', recalcWorksTop);

        // Create a REGL draw command
        var draw = regl({
            frag: document.querySelector('#fragmentShader').textContent,
            vert: 'attribute vec2 position; void main() { gl_Position = vec4(3.0 * position, 0.0, 1.0); }',
            attributes: { position: [-1, 0, 0, -1, 1, 1] },
            count: 3,
            uniforms: {
                globaltime: regl.prop('globaltime'),
                resolution: regl.prop('resolution'),
                aspect: regl.prop('aspect'),
                scroll: regl.prop('scroll'),
                velocity: regl.prop('velocity'),
                texture1: texA,
                texture2: texB,
                mixFactor: regl.prop('mixFactor'),
                invert: 0.0
            }
        });

        // Hook a callback to execute each frame
        regl.frame(function(ctx) {

            // Resize a canvas element with the aspect ratio (100vw, 100vh)
            var aspect = canvas.scrollWidth / canvas.scrollHeight;
            canvas.width = 1024 * Math.max(aspect, 0.5);
            canvas.height = 1024;

            // Scroll amount (0.0 to 1.0)
            scroll = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);

            // Linear crossfade progress from top to the top of the "works" section
            var mixFactor = 0.0;
            if (worksTop > 0) {
                var linear = Math.min(1, Math.max(0, window.pageYOffset / worksTop));
                // Smooth easing for silkiness
                mixFactor = 0.5 - 0.5 * Math.cos(Math.PI * linear);
            }

            // Scroll Velocity (disabled to keep background calm)
            velocity = 0;
            lastScroll = scroll;

            // Clear the draw buffer
            regl.clear({ color: [0, 0, 0, 0] });

            // Execute a REGL draw command
            draw({
                globaltime: ctx.time,
                resolution: [ctx.viewportWidth, ctx.viewportHeight],
                aspect: aspect,
                scroll: scroll,
                velocity: velocity,
                mixFactor: mixFactor,
                // invert: (window.__bgInvert ? 1.0 : 0.0)
            });
        });
    }

    imgA.onload = function(){ loaded++; tryStart(); };
    imgB.onload = function(){ loaded++; tryStart(); };

    imgA.src = 'img/img2-bg.jpg';
    imgB.src = 'img/image-pattern2.jpg';

}();

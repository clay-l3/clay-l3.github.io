$(document).ready(function() {
    function createSparkle() {
        // Create a sparkle element
        var sparkle = $('<div class="sparkle"></div>');
        
        // Set random starting position
        var startPosX = Math.random() * $(window).width();
        var startPosY = -10;  // Start above the screen

        // Set random size and opacity
        var size = (Math.random() * 10) + 2;  // Sparkles will vary between 2px and 7px
        var opacity = Math.random() * 0.5 + 0.5;  // Random opacity between 0.5 and 1

        // Apply styles to the sparkle
        sparkle.css({
            left: startPosX + 'px',
            top: startPosY + 'px',
            width: size + 'px',
            height: size + 'px',
            opacity: opacity,
            animationDelay: (Math.random() * 2) + 's'  // Random delay for different timing
        });

        // Append sparkle to the container
        $('#sparkles-container').append(sparkle);

        // Remove sparkle after the animation ends (to prevent memory leaks)
        setTimeout(function() {
            sparkle.remove();
        }, 2000);  // Same duration as the animation
    }

    // Continuously create sparkles at a random interval
    setInterval(createSparkle, 50);  // Adjust this to control how frequently sparkles appear
});

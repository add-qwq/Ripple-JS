document.addEventListener('DOMContentLoaded', function() {
    function injectRippleStyles() {
        if (document.getElementById('ripple-style-sheet')) return;
        
        const style = document.createElement('style');
        style.id = 'ripple-style-sheet';
        style.textContent = `
            .ripple {
                position: relative;
                overflow: hidden;
            }

            .ripple__container {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                pointer-events: none;
            }

            .ripple__dot {
                transform: scale(0);
                border-radius: 50%;
                position: absolute;
                opacity: 0.7;
                background-color:rgba(255, 255, 255, 0.40);
                animation: ripple-animation 0.7s ease-out forwards;
            }

            @keyframes ripple-animation {
                to {
                    opacity: 0;
                    transform: scale(2.5);
                }
            }
        `;
        document.head.appendChild(style);
    }

    function addRippleToButton(button) {

        if (button.classList.contains('ripple')) return;

        button.classList.add('ripple');

        const rippleContainer = document.createElement('div');
        rippleContainer.className = 'ripple__container';
        button.appendChild(rippleContainer);

        button.addEventListener('mousedown', (e) => {

            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            const rippleDot = document.createElement('span');
            rippleDot.className = 'ripple__dot';
            rippleDot.style.width = `${size}px`;
            rippleDot.style.height = `${size}px`;
            rippleDot.style.left = `${x}px`;
            rippleDot.style.top = `${y}px`;

            rippleContainer.appendChild(rippleDot);

            rippleDot.addEventListener('animationend', () => {
                rippleDot.remove();
            });
        });
    }

    function initRippleEffects() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => addRippleToButton(button));
    }

    function observeDOMChanges() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {

                    if (node.nodeType === 1) {
                        if (node.tagName === 'BUTTON') {
                            addRippleToButton(node);
                        }

                        const newButtons = node.querySelectorAll('button:not(.ripple)');
                        newButtons.forEach(button => addRippleToButton(button));
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    injectRippleStyles();
    initRippleEffects();
    observeDOMChanges();
});
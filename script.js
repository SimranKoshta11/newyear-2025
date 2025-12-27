// ========== CUSTOM CURSOR TRAIL ==========
let cursorTrail = document.getElementById('cursorTrail');
let mouseX = 0, mouseY = 0;
let trailX = 0, trailY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    trailX += (mouseX - trailX) * 0.1;
    trailY += (mouseY - trailY) * 0.1;

    if (cursorTrail) {
        cursorTrail.style.left = trailX + 'px';
        cursorTrail.style.top = trailY + 'px';
    }

    requestAnimationFrame(animateCursor);
}
animateCursor();

// ========== SCROLL PROGRESS BAR ==========
function updateScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;

    if (scrollProgress) {
        scrollProgress.style.width = scrolled + '%';
    }
}

window.addEventListener('scroll', updateScrollProgress);

// ========== FALLING SNOWFLAKES (LIKE IMAGE) ==========
function createSnowflakes() {
    const particlesContainer = document.getElementById('particles');
    const snowflakeCount = 80; // Lots of snowflakes like in image
    const snowflakeTypes = ['❄', '❅', '❆', '✻', '✼', '❉', '✺', '✹', '⁕'];

    for (let i = 0; i < snowflakeCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = snowflakeTypes[Math.floor(Math.random() * snowflakeTypes.length)];

        // Random horizontal position
        particle.style.left = Math.random() * 100 + '%';

        // Random size (small to large)
        const size = Math.random() * 20 + 10; // 10-30px
        particle.style.fontSize = size + 'px';

        // Random animation delay
        particle.style.animationDelay = Math.random() * 15 + 's';

        // Random animation duration (speed)
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';

        // Random opacity
        particle.style.opacity = Math.random() * 0.6 + 0.4; // 0.4-1.0

        particlesContainer.appendChild(particle);
    }
}

// ========== FIREWORKS ANIMATION ==========
function createFirework(x, y) {
    const fireworksContainer = document.getElementById('fireworksContainer');
    const colors = ['#ffffff', '#a0c4e8', '#d4e6f7', '#8fb8e0', '#ffffff'];
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.color = colors[Math.floor(Math.random() * colors.length)];

        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 50 + Math.random() * 50;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        particle.style.animation = 'explode 1s ease-out forwards';

        fireworksContainer.appendChild(particle);

        setTimeout(() => particle.remove(), 1000);
    }
}

// Auto-generate fireworks
function autoFireworks() {
    const heroHeight = document.querySelector('.hero').offsetHeight;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * heroHeight * 0.6 + heroHeight * 0.1;

    createFirework(x, y);
}

// Start fireworks every 3 seconds
setInterval(autoFireworks, 3000);

// ========== SPARKLES ANIMATION ==========
function createSparkle(x, y) {
    const sparklesContainer = document.getElementById('sparklesContainer');
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';

    sparklesContainer.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 2000);
}

// Auto-generate sparkles
function autoSparkles() {
    const heroHeight = document.querySelector('.hero').offsetHeight;
    const count = 8;

    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * heroHeight;
            createSparkle(x, y);
        }, i * 100);
    }
}

// Start sparkles every 4 seconds
setInterval(autoSparkles, 4000);

// ========== SMOOTH SCROLL ==========
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ========== COUNTDOWN TIMER ==========
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let nextNewYear = new Date(currentYear + 1, 0, 1);

    if (now > nextNewYear) {
        nextNewYear = new Date(currentYear + 2, 0, 1);
    }

    const diff = nextNewYear - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// ========== SCROLL ANIMATIONS ==========
function handleScrollAnimations() {
    const elements = document.querySelectorAll('[data-aos]');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('aos-animate');
        }
    });
}

// ========== CELEBRATE WITH CONFETTI ==========
function triggerCelebration() {
    const confettiContainer = document.getElementById('confettiContainer');
    const colors = ['#ffffff', '#a0c4e8', '#d4e6f7', '#8fb8e0', '#c8dff0'];

    // Create 150 confetti pieces
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = (Math.random() * 0.5) + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';

        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }

        confettiContainer.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3500);
    }

    // Create multiple fireworks
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight * 0.5;
            createFirework(x, y);
        }, i * 150);
    }

    // Create extra sparkles
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight * 0.6;
            createSparkle(x, y);
        }, i * 100);
    }

    // Play celebration sound
    playSound();

    // Show success message
    showCelebrationMessage();
}

function playSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

function showCelebrationMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        background: linear-gradient(135deg, #ffffff 0%, #a0c4e8 100%);
        color: #0a1f3d;
        padding: 30px 60px;
        border-radius: 16px;
        font-size: 2rem;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 20px 60px rgba(255, 255, 255, 0.5);
        animation: popIn 0.5s ease forwards;
    `;
    message.textContent = '🎉 Happy New Year 2026! 🎉';

    document.body.appendChild(message);

    setTimeout(() => {
        message.style.animation = 'popOut 0.5s ease forwards';
        setTimeout(() => message.remove(), 500);
    }, 2500);
}

// Add pop-in/out animations
const style = document.createElement('style');
style.textContent = `
    @keyframes popIn {
        to {
            transform: translate(-50%, -50%) scale(1);
        }
    }
    @keyframes popOut {
        to {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========== PARALLAX EFFECT FOR HERO ==========
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero');

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// ========== INITIALIZE EVERYTHING ==========
window.addEventListener('DOMContentLoaded', () => {
    createSnowflakes(); // Create falling snowflakes
    updateCountdown();
    setInterval(updateCountdown, 1000);
    handleScrollAnimations();

    // Start initial fireworks after 2 seconds
    setTimeout(() => {
        autoFireworks();
    }, 2000);

    // Start initial sparkles
    setTimeout(() => {
        autoSparkles();
    }, 2500);
});

window.addEventListener('scroll', () => {
    handleScrollAnimations();
    updateScrollProgress();
});

// ========== CLICK ANYWHERE ON HERO FOR FIREWORK ==========
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('click', (e) => {
            createFirework(e.clientX, e.clientY);

            // Create sparkles around click
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const offsetX = (Math.random() - 0.5) * 100;
                    const offsetY = (Math.random() - 0.5) * 100;
                    createSparkle(e.clientX + offsetX, e.clientY + offsetY);
                }, i * 50);
            }
        });
    }
});

// Smooth entrance
setTimeout(() => {
    document.body.style.opacity = '1';
}, 100);
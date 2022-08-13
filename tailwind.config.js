/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './public/index.html',
        './public/**/*.{html,js}',
        './src/**/*.{html,js}',
    ],
    theme: {
        extend: {
            colors: {
                red: {
                    primary: 'var(--clr-red-primary)'
                },
                blue: {
                    primary: {
                        300: 'var(--clr-blue-primary-300)'
                    },
                    neutral: {
                        600: 'var(--clr-blue-neutral-600)',
                        800: 'var(--clr-blue-neutral-800)',
                        900: 'var(--clr-blue-neutral-900)'
                    }
                }
            },
            fontFamily: {
                body: 'var(--ff-primary)'
            },
            backgroundImage: {
                'hero-pattern': 'url(img/bg-stars.svg)',
                'footer-pattern': 'url(img/pattern-hills.svg)'
            },
            letterSpacing: {
                widest: '0.4em'
            },
            keyframes: {
                'flip-card': {
                    '0%': {
                        transform: 'rotateX(0deg)',
                        'transform-origin': 'bottom',
                        'transform-style': 'preserve-3d',
                        'perspective': '100px'
                    },
                    '100%': {
                        'transform': 'rotateX(180deg)',
                        'transform-origin': 'bottom',
                        'transform-style': 'preserve-3d',
                        'perspective': '100px'
                    }
                }
            }
        },
    },
    plugins: [],
}
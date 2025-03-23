import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig(
    module.exports = {
        theme: {
            extend: {
                colors: {
                    customBlue: '#6881FE', // Define custom color
                },
            },
        },
        plugins: [
            tailwindcss(),
        ],
    })
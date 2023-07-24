/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/buscador',
                destination: '/buscador/alimento',
                permanent: false,
            },
        ]
    },
}
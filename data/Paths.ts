export type Route = {
    path: string;
    name: string;
}

export const Paths: Route[] = [
    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
    { path: '/portfolio', name: 'portfolio' },
    { path: '/showcase', name: 'showcase' },
    { path: '/contact', name: 'contact' },
];


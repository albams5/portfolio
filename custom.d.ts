declare namespace JSX {
    interface IntrinsicElements {
        a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & { download?: string };
    }
}
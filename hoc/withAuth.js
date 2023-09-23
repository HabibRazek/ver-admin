const withAuth = (WrappedComponent) => {
    const WithAuthComponent = (props) => {
        const Router = useRouter();
        const token = localStorage.getItem('auth-token');

        useEffect(() => {
            if (!token) {
                Router.replace('/login');
            }
        }, [token]);

        return <WrappedComponent {...props} />;
    };

    // This sets the display name
    WithAuthComponent.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;

    return WithAuthComponent;
};

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withAuth;

import Header from "../Header";

function Layout({children}: {children: JSX.Element}) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}

export default Layout;
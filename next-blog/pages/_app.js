import Navbar from "../components/navbar";
function App({ Component, pageProps }) {
    console.log("[App]:render");
    return (
        <>
            <header>
                <Navbar />
            </header>
            <Component {...pageProps} />;
        </>
    );
}
export default App;

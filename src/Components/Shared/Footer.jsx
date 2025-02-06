
const Footer = () => {
    return (
        <footer className="text-white text-center bg-red-300">
            <div className="my-20">
                <h2 className="text-4xl font-bold pt-10">Mahdi Hassan</h2>
                <h5 className="text-2xl font-semibold mt-2">Web Developer</h5>
                <div>

                </div>
            </div>

            <section className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>© {new Date().getFullYear()} Mahdi Hassan - All right reserved!</p>
                </aside>
            </section>
        </footer>
    );
};

export default Footer;
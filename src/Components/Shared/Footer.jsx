
const Footer = () => {
    return (
        <footer className="text-white text-center bg-red-300">

            <section className="footer footer-center bg-[#101736] text-white p-4">
                <aside>
                    <p>© {new Date().getFullYear()} Mahdi Hassan - All right reserved!</p>
                </aside>
            </section>
        </footer>
    );
};

export default Footer;
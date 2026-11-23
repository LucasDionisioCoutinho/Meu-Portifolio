import "./Footer.css";
import { FiCode } from "react-icons/fi";
import { useIdioma } from "../../i18n/IdiomaContext";

function Footer() {
    const { t } = useIdioma();
    const ano = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer-desenvolvido">
                {t.footer.desenvolvido} <span className="destaque">Lucas Dionisio</span> <FiCode />
            </p>
            <p className="footer-copyright">
                © {ano} Lucas Dionisio Coutinho. {t.footer.direitos}
            </p>
        </footer>
    );
}

export default Footer;

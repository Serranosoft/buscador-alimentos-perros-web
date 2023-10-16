import styles from '@/styles/footer/footer.module.scss'
import Link from "next/link";
import Text from '../content/text';
import Logo from '../logo/logo';
import CustomLink from '../content/customLink';

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.columns}>
                <div className={styles.info}>
                    <Text xxl>Mejora la salud de tu perro</Text>
                    <Text xl>Léenos para recibir consejos sobre el cuidado de perros, análisis de productos y descuentos</Text>
                    <CustomLink href="/"><Logo /></CustomLink>
                    <div className={styles.policies}>
                        <CustomLink href="/politica-de-privacidad">Política de privacidad</CustomLink>
                        <CustomLink href="/politica-de-cookies">Política de cookies</CustomLink>
                        <CustomLink href="/aviso-legal">Aviso legal</CustomLink>
                    </div>
                </div>
                <div className={styles.menu}>
                    <Text xxl>Categoría de alimentos</Text>
                    <CustomLink href="/fruta">¿Qué frutas puede comer un perro?</CustomLink>
                    <CustomLink href="/fruto-seco">¿Qué frutos secos puede comer un perro?</CustomLink>
                    <CustomLink href="/bebida">¿Qué bebidas puede comer un perro?</CustomLink>
                    <CustomLink href="/carne">¿Qué carnes puede comer un perro?</CustomLink>
                    <CustomLink href="/verdura">¿Qué verduras puede comer un perro?</CustomLink>
                    <CustomLink href="/cereal">¿Qué cereales puede comer un perro?</CustomLink>
                    <CustomLink href="/dulce">¿Qué dulces puede comer un perro?</CustomLink>
                    <CustomLink href="/especias">¿Qué especias puede comer un perro?</CustomLink>
                    <CustomLink href="/lacteo">¿Qué lacteos puede comer un perro?</CustomLink>
                    <CustomLink href="/legumbre">¿Qué legumbres puede comer un perro?</CustomLink>
                    <CustomLink href="/marisco">¿Qué mariscos puede comer un perro?</CustomLink>
                    <CustomLink href="/pan">¿Qué panes puede comer un perro?</CustomLink>
                    <CustomLink href="/pasta">¿Qué pastas puede comer un perro?</CustomLink>
                    <CustomLink href="/pescado">¿Qué pescados puede comer un perro?</CustomLink>
                    <CustomLink href="/salsa">¿Qué salsas puede comer un perro?</CustomLink>
                    <CustomLink href="/grasa">¿Qué grasas puede comer un perro?</CustomLink>
                </div>
            </div>
        </footer>
    )
}
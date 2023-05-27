import H2 from "@/components/content/h2";
import Text from "@/components/content/text";
import styles from "@/styles/home/popular.module.scss";
import Anchor from "@/components/content/anchor";

export default function Popular() {

    return (
        <div className={styles.root}>
            <H2>Los alimentos mas buscados</H2>
            <div className={styles.grid}>
                <div>
                    <div className={styles.title}>
                        <Text xl>Frutas</Text>
                    </div>
                    <div className={styles.items}>
                        <Anchor href="/buscador/alimento/manzana" target="_blank">Manzanas</Anchor>
                        <Anchor href="/buscador/alimento/peras" target="_blank">Peras</Anchor>
                        <Anchor href="/buscador/alimento/albaricoques" target="_blank">Albaricoques</Anchor>
                        <Anchor href="/buscador/alimento/bananas" target="_blank">Banana</Anchor>
                        <Anchor href="/buscador/alimento/fresas" target="_blank">Fresas</Anchor>
                        <Anchor href="/buscador/alimento/granada" target="_blank">Granadas</Anchor>
                        <Anchor href="/buscador/alimento/ciruelas" target="_blank">Ciruelas</Anchor>
                        <Anchor href="/buscador/alimento/caqui" target="_blank">Caquis</Anchor>
                    </div>
                </div>
                <div>
                    <div className={styles.title}>
                        <Text xl>Material Inorgánico</Text>
                    </div>
                    <div className={styles.items}>
                        <Anchor href="/">Papel</Anchor>
                        <Anchor href="/"></Anchor>
                        <Anchor href="/"></Anchor>
                        <Anchor href="/"></Anchor>
                        <Anchor href="/"></Anchor>
                        <Anchor href="/"></Anchor>
                        <Anchor href="/"></Anchor>
                        <Anchor href="/"></Anchor>
                    </div>
                </div>
                <div>
                    <div className={styles.title}>
                        <Text xl>Verduras</Text>
                    </div>
                    <div className={styles.items}>
                        <Anchor href="/">Col</Anchor>
                        <Anchor href="/">Ensalada</Anchor>
                        <Anchor href="/">Eneldo</Anchor>
                        <Anchor href="/">Espárragos blancos</Anchor>
                        <Anchor href="/">Champiñones</Anchor>
                        <Anchor href="/">Escarola</Anchor>
                        <Anchor href="/">Espárragos verdes</Anchor>
                        <Anchor href="/">Coliflor</Anchor>
                    </div>
                </div>
                <div>
                    <div className={styles.title}>
                        <Text xl>Carnes</Text>
                    </div>
                    <div className={styles.items}>
                        <Anchor href="/" target="_blank">Pollo</Anchor>
                        <Anchor href="/" target="_blank">Ternera</Anchor>
                        <Anchor href="/" target="_blank">Higado</Anchor>
                        <Anchor href="/" target="_blank">Carne cruda</Anchor>
                        <Anchor href="/" target="_blank">Croquetas</Anchor>
                        <Anchor href="/" target="_blank">Bocadillo</Anchor>
                        <Anchor href="/" target="_blank"></Anchor>
                        <Anchor href="/" target="_blank"></Anchor>
                    </div>
                </div>
                <div>
                    <div className={styles.title}>
                        <Text xl>Legumbres</Text>
                    </div>
                    <div className={styles.items}>
                        <Anchor href="/" target="_blank">Guisantes</Anchor>
                        <Anchor href="/" target="_blank">Garbanzos</Anchor>
                        <Anchor href="/" target="_blank">Alubias</Anchor>
                        <Anchor href="/" target="_blank"></Anchor>
                        <Anchor href="/" target="_blank"></Anchor>
                        <Anchor href="/" target="_blank"></Anchor>
                        <Anchor href="/" target="_blank"></Anchor>
                        <Anchor href="/" target="_blank"></Anchor>
                    </div>
                </div>
                <div>
                    <div className={styles.title}>
                        <Text xl>Dulces</Text>
                    </div>
                    <div className={styles.items}>
                        <Anchor href="/" target="_blank">Croissant</Anchor>
                        <Anchor href="/" target="_blank">Copos de avena</Anchor>
                        <Anchor href="/" target="_blank">Chocolate</Anchor>
                        <Anchor href="/" target="_blank">Dulce de leche</Anchor>
                        <Anchor href="/" target="_blank">Galletas saladas</Anchor>
                        <Anchor href="/" target="_blank">Ensaimadas</Anchor>
                        <Anchor href="/" target="_blank">Flan</Anchor>
                        <Anchor href="/" target="_blank">Bombones</Anchor>
                    </div>
                </div>
                <div>
                    <div className={styles.title}>
                        <Text xl>Bebidas</Text>
                    </div>
                    <div className={styles.items}>
                        <Anchor href="/" target="_blank">Cerveza</Anchor>
                        <Anchor href="/" target="_blank">Coca Cola</Anchor>
                        <Anchor href="/" target="_blank">Hielo</Anchor>
                        <Anchor href="/" target="_blank"></Anchor>
                        <Anchor href="/" target="_blank"></Anchor>
                        <Anchor href="/" target="_blank"></Anchor>
                        <Anchor href="/" target="_blank"></Anchor>
                        <Anchor href="/" target="_blank"></Anchor>
                    </div>
                </div>
            </div>
        </div>
    )
}
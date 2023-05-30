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
                    </div>
                </div>
                {/* <div>
                    <div className={styles.title}>
                        <Text xl>Material Inorgánico</Text>
                    </div>
                    <div className={styles.items}>
                        <Anchor href="/buscador/alimento/papel">Papel</Anchor>
                        <Anchor href="/"></Anchor>
                        <Anchor href="/"></Anchor>
                        <Anchor href="/"></Anchor>
                        <Anchor href="/"></Anchor>
                        <Anchor href="/"></Anchor>
                        <Anchor href="/"></Anchor>
                        <Anchor href="/"></Anchor>
                    </div>
                </div> */}
                <div>
                    <div className={styles.title}>
                        <Text xl>Verduras</Text>
                    </div>
                    <div className={styles.items}>
                        <Anchor href="/buscador/alimento/col">Col</Anchor>
                        <Anchor href="/buscador/alimento/rucula">Rúcula</Anchor>
                        <Anchor href="/buscador/alimento/eneldo">Eneldo</Anchor>
                        <Anchor href="/buscador/alimento/esparragos-blancos">Espárragos blancos</Anchor>
                        <Anchor href="/buscador/alimento/champinones">Champiñones</Anchor>
                    </div>
                </div>
                {/* <div>
                    <div className={styles.title}>
                        <Text xl>Carnes</Text>
                    </div>
                    <div className={styles.items}>
                        <Anchor href="/buscador/alimento/pollo" target="_blank">Pollo</Anchor>
                        <Anchor href="/buscador/alimento/ternera" target="_blank">Ternera</Anchor>
                        <Anchor href="/buscador/alimento/higado" target="_blank">Higado</Anchor>
                        <Anchor href="/buscador/alimento/pescado" target="_blank">Pescado</Anchor>
                        <Anchor href="/buscador/alimento/pollo" target="_blank">Croquetas</Anchor>
                        <Anchor href="/buscador/alimento/pollo" target="_blank">Bocadillo</Anchor>
                        <Anchor href="/buscador/alimento/pollo" target="_blank"></Anchor>
                        <Anchor href="/buscador/alimento/pollo" target="_blank"></Anchor>
                    </div>
                </div> */}
                <div>
                    <div className={styles.title}>
                        <Text xl>Legumbres</Text>
                    </div>
                    <div className={styles.items}>
                        <Anchor href="/buscador/alimento/guisantes" target="_blank">Guisantes</Anchor>
                        <Anchor href="/buscador/alimento/garbanzos" target="_blank">Garbanzos</Anchor>
                        <Anchor href="/buscador/alimento/alubias" target="_blank">Alubias</Anchor>
                    </div>
                </div>
                <div>
                    <div className={styles.title}>
                        <Text xl>Dulces</Text>
                    </div>
                    <div className={styles.items}>
                        <Anchor href="/buscador/alimento/croissant" target="_blank">Croissant</Anchor>
                        <Anchor href="/buscador/alimento/copos-de-avena" target="_blank">Copos de avena</Anchor>
                        <Anchor href="/buscador/alimento/chocolate" target="_blank">Chocolate</Anchor>
                        <Anchor href="/buscador/alimento/dulce-de-leche" target="_blank">Dulce de leche</Anchor>
                        <Anchor href="/buscador/alimento/galletas-saladas" target="_blank">Galletas saladas</Anchor>
                    </div>
                </div>
                {/* <div>
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
                </div> */}
            </div>
        </div>
    )
}
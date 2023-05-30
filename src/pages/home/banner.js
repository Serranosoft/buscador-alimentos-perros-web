import Button from "@/components/content/button";
import Text from "@/components/content/text";
import styles from "@/styles/home/banner.module.scss";

export default function Banner() {


    return (
        <div className={styles.root}>
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width={1235}
                height={370}
                fill="none"
            >
                <rect width={96.289} height={370} fill="#A7E8C8" rx={47.644} />
                <rect width={95.286} height={370} x={95.289} fill="#A7E8C8" rx={47.143} />
                <rect width={96.289} height={370} x={189.574} fill="#A7E8C8" rx={47.644} />
                <rect width={94.283} height={370} x={284.863} fill="#A7E8C8" rx={46.641} />
                <rect width={95.286} height={370} x={378.145} fill="#A7E8C8" rx={47.143} />
                <rect width={95.286} height={370} x={472.43} fill="#A7E8C8" rx={47.143} />
                <rect width={95.286} height={370} x={566.719} fill="#A7E8C8" rx={47.143} />
                <rect width={95.286} height={370} x={661.004} fill="#A7E8C8" rx={47.143} />
                <rect width={95.286} height={370} x={755.289} fill="#A7E8C8" rx={47.143} />
                <rect width={94.283} height={370} x={849.574} fill="#A7E8C8" rx={46.641} />
                <rect width={95.286} height={370} x={942.855} fill="#A7E8C8" rx={47.143} />
                <rect width={95.286} height={370} x={1037.14} fill="#A7E8C8" rx={47.143} />
                <rect width={95.286} height={370} x={1131.43} fill="#A7E8C8" rx={47.143} />
            </svg> */}
            <div className={styles.content}>
                <div className={styles.text}>
                    <Text xxl>¡Mi perro ha comido ── !</Text>
                    <Text>¿Tu perro se ha comido algo y no sabes si es malo?</Text>
                    <Button dark to="/buscador/alimento">Descúbrelo aquí</Button>
                </div>
                <div className={styles.images}>
                    <img src="/img/dog-worried.jpg" />
                </div>
            </div>
        </div>
    )
}
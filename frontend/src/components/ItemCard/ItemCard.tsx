import IJsonObj from "@/const/cardInterface/cardInterface";
import styles from "./ItemCard.module.scss"
import Button from '@mui/material/Button';
import { useRouter } from "next/router";
import * as React from "react";

const ItemCard: React.FC<IJsonObj> = (props) => {
    const { id,title, } = props;
    const titleInUI = title.length > 20 ? `${title.slice(0,20)}...` : title
    const router = useRouter();
    
    const goToItemPage = () => {
        router.push(`/posts/${id}`)
    }
    return (
        <>
        <div className={styles.cardBody}>
        <h1>
            Alias image pf energy drink <br/>
            But now: {id}
        </h1>
        <h2>Title: {titleInUI}</h2>
        <Button variant="contained"
        classes={{root:styles.buttonGoTo}}
        onClick={goToItemPage}
        >Look details</Button>
        </div>
        </>
    )
}

export default React.memo(ItemCard);

import { useDispatch, useSelector } from "react-redux";
import { previousPage, nextPage } from "../../redux/action";
import styles from "./Paging.module.css"

export default function Paging() {
    const dispatch = useDispatch();
    const page = useSelector((state) => state.breeds.paging.page);
    const moreElements = useSelector((state) => state.breeds.paging.moreElements);
    const disabled = useSelector((state) => state.breeds.paging.disabled);
    const totalPages = useSelector((state) => state.breeds.paging.totalPages);

    function nextPagePressed() {
        dispatch(nextPage());
    }

    function previousPagePressed() {
        dispatch(previousPage());
    }

    return (
        <div className={styles.paging}>
            {page > 0 ? <button className={styles.pagingButton} onClick={previousPagePressed} disabled={disabled}>&lt;</button> : null}
            <span>{page+1} of {totalPages}</span>
            {moreElements ? <button className={styles.pagingButton} onClick={nextPagePressed} disabled={disabled}>&gt;</button> : null}
        </div>
    );
}
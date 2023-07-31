import { useDispatch, useSelector } from "react-redux";
import { previousPage, nextPage } from "../../redux/action";

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
        <div>
            {page > 0 ? <button onClick={previousPagePressed} disabled={disabled}>Previous</button> : null}
            <span>{page+1} of {totalPages}</span>
            {moreElements ? <button onClick={nextPagePressed} disabled={disabled}>Next</button> : null}
        </div>
    );
}
import { useDispatch, useSelector } from "react-redux";
import { previousPage, nextPage } from "../../redux/action";

export default function Paging() {
    const dispatch = useDispatch();
    const page = useSelector((state) => state.breeds.paging.page);
    const moreElements = useSelector((state) => state.breeds.paging.moreElements);

    function nextPagePressed() {
        dispatch(nextPage());
    }

    function previousPagePressed() {
        dispatch(previousPage());
    }

    return (
        <div>
            <button onClick={previousPagePressed}>Previous</button>
            <span>{page+1}</span>
            {moreElements ? <button onClick={nextPagePressed}>Next</button> : null}
        </div>
    );
}
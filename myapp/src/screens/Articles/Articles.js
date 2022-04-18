import {useDispatch, useSelector} from "react-redux";
import {FETCH_STATUSES} from "../../utils/constants";
import {useEffect} from "react";
import {selectArticles, selectArticlesError, selectArticlesStatus} from "../../store/articles/selector";
import CircularProgress from "@material-ui/core/CircularProgress";
import {getArticles} from "../../store/articles/actions";
import Button from "@mui/material/Button"

export const Articles = () => {
    const dispatch = useDispatch();
    const articles = useSelector(selectArticles);
    const error = useSelector(selectArticlesError);
    const status = useSelector(selectArticlesStatus);


    const sendRequest = () => {
        dispatch(getArticles());
    };

    useEffect(() => {
        sendRequest();
    }, []);

    return (
        <>
            <h3>Курсы криптовалют</h3>
            <Button onClick={sendRequest}>Обновить</Button>
            {status === FETCH_STATUSES.REQUEST && <CircularProgress/>}
            {error && <h4>{error}</h4>}

                {articles.map((article) => (

                    <div key={article.symbol}>{article.symbol}:  {article.lastPrice}
                    <div>---</div>

                    </div>


                ))}

        </>
    );
};
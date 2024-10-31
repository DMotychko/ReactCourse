import React, {useEffect} from 'react';
import {useStore} from "../../context/context";
import {getData} from "../../services/api.service";

const CommentsPage = () => {
    const store = useStore();

    useEffect(() => {
        getData.getAllComments().then(value => store.commentsSlice.loadComments(value))
    }, []);
    return (
        <div>
            {
                store.commentsSlice.allComments.map((cooment, index) => <div key={cooment.id}>{cooment.name}</div>)
            }
        </div>
    );
};

export default CommentsPage;
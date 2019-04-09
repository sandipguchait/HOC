

export default function (state = [], action ) {
    switch(action.type) {
        case 'SAVE_COMMENT':
            return [...state, action.payload ];
        case 'FETCH_COMMENTS':
            const fetchedcomments = action.payload.data.map(comment => comment.name);
            return [...state, ...fetchedcomments]
        default: 
            return state
    }
}
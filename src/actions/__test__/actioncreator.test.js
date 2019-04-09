import { saveComment } from '../../actions/index';

describe('save comment', () => {
    it('has the correct type', () => {
        const action = saveComment();
        expect(action.type).toEqual('SAVE_COMMENT')
    });

    it('has the correct payload', () => {
        const action = saveComment('New Comment');
        expect(action.payload).toEqual('New Comment')
    });
});
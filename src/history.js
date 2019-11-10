import {createHashHistory as createHistory} from 'history'

const history = createHistory({
  queryKey: false
});


export default history;
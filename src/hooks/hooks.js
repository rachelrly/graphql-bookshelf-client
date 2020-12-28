import { Fragment } from 'react';


export const useAuthorDataAsList = (arr) => arr.map(a => <Fragment><span>{a.firstName}</span><span>{a.lastName}</span></Fragment>)
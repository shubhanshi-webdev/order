import {useRouteError} from 'react-router-dom';
// useRouteError is advance error hook
const Error = () => {
    const err = useRouteError();
    // console.log(err);
    // console.log(err.error.message);
    return (
        <>
        <h1>hi something wrong</h1>
        <h2>{err.error.message}</h2>
        <h3>{err.statusText}</h3>
        </>
    );
}
export default Error;
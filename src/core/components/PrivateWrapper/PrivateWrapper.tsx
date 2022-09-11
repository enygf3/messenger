import {Navigate, Outlet} from "react-router-dom";
import {memo, ReactElement, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from "../Loader/Loader";
import {doAuthAction} from "../../actions/auth";

const PrivateWrapper = (): ReactElement => {
    const dispatch = useDispatch();
    const [user, loading] = useAuthState(getAuth());

    useEffect(() => {
        if (user && !loading) {
            dispatch(doAuthAction.success({ payload: user }, null));
        }
    }, [loading]);

    if (loading) {
        return <Loader />;
    }

    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default memo(PrivateWrapper);
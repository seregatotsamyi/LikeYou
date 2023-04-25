import {useParams} from "react-router-dom";
import React from "react";
import { useLocation, useNavigate} from "react-router-dom";


export const withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                match={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}
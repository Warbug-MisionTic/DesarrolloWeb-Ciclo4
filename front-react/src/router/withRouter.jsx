import { useLocation, useNavigate, useParams, redirect } from 'react-router-dom';

export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();

        return (
            <Component
                location={location}
                navigate={navigate}
                goBack={() => navigate(-1)}
                params={params}
                redirect={redirect}
                {...props}
            />
        );
    };

    return Wrapper;
};
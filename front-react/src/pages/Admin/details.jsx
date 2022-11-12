import { useParams } from "react-router-dom";

const Details = () => {
    let { details } = useParams();
    return (
        <p>{details}</p>
    );
}

export default Details;
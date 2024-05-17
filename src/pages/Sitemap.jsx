import styled from "styled-components";
import BlockButton from "../components/BlockButton";
import { useNavigate } from 'react-router-dom';
import routes from "../routes.jsx";

const Container = styled.div`
    padding: 0 31px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px 24px;
    /* margin-top: 20px; */
`;

const Sitemap = ({}) => {
    const navigate = useNavigate();

    const elements = routes
        .filter((route) => route.name)
        .map((route) => (
            <BlockButton
                key={route.path}
                text={route.name}
                onClick={() => {
                    navigate(route.samplePath || route.path);
                }}
            />
        ));

    return <Container>{elements}</Container>;
};

export default Sitemap;

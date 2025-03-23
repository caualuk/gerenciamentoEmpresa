import styled from "styled-components";
import ActionsCard from "../ActionsCards/ActionsCards";

const HeaderComponents = styled.header`
    background-color: rgb(122, 39, 255);
    color: black;
    display: flex; 
    justify-content: space-evenly;
    padding: 20px;
    width: 100%;
`;

function Header() {
    return (
        <HeaderComponents>
            <ActionsCard />
        </HeaderComponents>
    );
}

export default Header;
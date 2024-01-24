import { styled } from 'styled-components'



const Homepage = () => {
    return(
        <>
        <HomepageDiv>
            <h1>Paul Szavay</h1>
            <h2>Web Developer and Magic the Gathering Enthusiast</h2>
        </HomepageDiv>    
        </>
    )
}

export default Homepage


const HomepageDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
padding: 10rem;

h1{
    margin: 0;
}

h2{
    margin: 0;
    z-index: 4;
}
`

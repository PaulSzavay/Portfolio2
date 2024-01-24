import { styled } from "styled-components"


const Work = () => {
    return(
        <>
        <WorkDiv>
            <WorkProject>
                <WorkTitle>Title</WorkTitle>
                <LinkButton>Link</LinkButton>
                <CodeButton>Code</CodeButton>
            </WorkProject>
            <WorkProject>World</WorkProject>
            <WorkProject>Something</WorkProject>
            <WorkProject>Else</WorkProject>
        </WorkDiv>
        </>
    )
}

export default Work


const WorkDiv = styled.div`
padding-top: 10rem;
display:grid;
grid-template-columns: repeat(2, 1fr);
gap: 1rem;
`

const WorkProject = styled.div`
text-align: center;
background-color: green;
border: 1px solid black;
padding: 1rem;
margin: 1rem 7rem;
display: flex;
flex-direction: column;
/* height: 10rem; */
`

const WorkTitle = styled.h3`
`

const LinkButton = styled.button`
`

const CodeButton = styled.button`
`
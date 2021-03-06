import styled from "styled-components";

export function Pick({ artist }) {
   
    return <Box>
        <img src={artist[0]?.images[0]?.url} alt="aritst" />
        <Div>
            <div><img src="http://localhost:3000/artistpick.svg" alt="pickicon" /><p>Posted By {artist[0]?.name}</p></div>
            <div>{artist[0]?.name} - The Hits</div>
            <div>Playlist</div>
        </Div>
    </Box>
}

const Box = styled.div`
    min-width:276px;
    height:118px;
    display:flex;
    &>img{
        height:76px;
    }
    
`;

const Div = styled.div`
    padding-left:16px;
    padding-top:5px;
    &>div:nth-child(1){
        display:flex;
        align-items:center;
    }
    &>div:nth-child(1)>img{
        width:24px;
        border-radius:12px;
    }
    & p{
        margin-left:10px;
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
        color: #B2B2B2;
        margin-bottom:8px;
    }
    &>div:nth-child(2){
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        margin-bottom:8px;
        text-transform: capitalize;

        color: #FFFFFF;
    }
    &>div:nth-child(2):hover{
        text-decoration:underline;
    }
    &>div:nth-child(3){
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
        display: flex;
        align-items: center;
        letter-spacing: -0.03em;
        color: #B2B2B2;
    }
`;
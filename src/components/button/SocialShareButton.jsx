import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from "react-share";
import styled from "styled-components";

const CopyBtn = styled.button`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: none;
    box-sizing: border-box;
    background-color: purple;
    color: white;
    font-weight: bold;
`

const ShareContainer = styled.div`
    display: flex;
    justify-content: center;
`

const ShareText = styled.p`
    color: white;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
`

export default function SocialShareButton() {
    const url = window.location.href;
    return (
        <>
            <ShareText>친구에게 테스트 공유하기</ShareText>
            <ShareContainer>
                <FacebookShareButton url={url} style={{ marginRight: '10px'}}>
                    <FacebookIcon size={50} round={true} />
                </FacebookShareButton>
                <TwitterShareButton url={url} style={{ marginRight: '10px' }}>
                    <TwitterIcon size={50} round={true} />
                </TwitterShareButton>
                <CopyToClipboard text={url} onCopy={() => alert("클립보드에 복사되었습니다")}>
                    <CopyBtn>URL</CopyBtn>
                </CopyToClipboard>
            </ShareContainer>
        </>
    )
}
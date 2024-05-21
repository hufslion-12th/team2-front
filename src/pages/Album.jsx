import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import AlbumImg from '../images/AlbumImg.png'
import AddImg from '../images/AddImg.png'
import Modal from "../components/InternalModal"

const Background = styled.div`
  background: linear-gradient(
    to bottom,
    #FCE6F1 0%,
    #FCE6F1 45%,
    #FF9CAF 100%
  );
  height: 530px;  // 변경된 부분
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const Text = styled.div`
  color: #D62C4D;
  font-size: 20px;
  font-weight: 600;
  margin-top: 30px;

`;
const SubText = styled.div`
  text-align: center;
  color: #4D3338;
  font-size: 14px;
  font-weight: 600;
  margin-top: 5px;
`;


const WhiteContainer = styled.div`
  background-color: #ffffff;
  width:326px;
  height:460px;
  margin-top: 25px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;


const HorizontalImageContainer = styled.div`
  display: flex;
  justify-content: center;
  

`;

const AlbumImage = styled.img`
  width: 69px;
  height: 69px;
  margin-top :20px;
  margin-right: 20px;
  margin-left: 20px; 
`;



const AlbumContainer = styled.div`
  background-color: #F48B9F;
  width:326px;
  height:32px;
  border-radius: 10px 10px 0px 0px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 700;
  margin-top: 0;
  border: none;
`
const DataCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 96px;
  padding-bottom: 10px;
  grid-column: span 1;
  cursor: pointer;
`
const AddButton = styled.img`
  margin-top: 0px;
  margin-bottom: 10px;
  margin-left: 17px;
  margin-right: 18px;
`

  

function Album() {
  const [showModal, setShowModal] = useState(false);
  //추가부분
  const [nickname, setNickname] = useState(''); 
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setNickname(currentUser.nickname);
    }
  }, []);

  const openModal = () => setShowModal(true);
  const closeModal = ()=> setShowModal(false);

    return (
      
    <Background>
       
      <WhiteContainer>
        <AlbumContainer>
            공주 앨범
          </AlbumContainer>

        <HorizontalImageContainer>
          <div> 
          <AlbumImage src={AlbumImg}
          style={{width:'69px', height:'69px'}}>
          </AlbumImage>
          <br />
          <SubText>공주 1</SubText>
          </div>
          <div> 
          <AlbumImage src={AlbumImg}
          style={{width:'69px', height:'69px'}}>
          </AlbumImage>
          <br />
          <SubText>공주 2</SubText>
          </div>
          <div> 
          <AlbumImage src={AlbumImg}
          style={{width:'69px', height:'69px'}}>
          </AlbumImage>
          <br />
          <SubText>공주 3</SubText>
          </div>
        </HorizontalImageContainer>
        <br />

        <HorizontalImageContainer>
        <div> 
          <AlbumImage src={AlbumImg}
          style={{width:'69px', height:'69px'}}>
          </AlbumImage>
          <br />
          <SubText>공주 1</SubText>
          </div>
          <div> 
          <AlbumImage src={AlbumImg}
          style={{width:'69px', height:'69px'}}>
          </AlbumImage>
          <br />
          <SubText>공주 2</SubText>
          </div>
          <div> 
          <AlbumImage src={AlbumImg}
          style={{width:'69px', height:'69px'}}>
          </AlbumImage>
          <br />
          <SubText>공주 3</SubText>
          </div>
        </HorizontalImageContainer>
        <br />

        <HorizontalImageContainer>
         <div> 
          <AlbumImage src={AlbumImg}
          style={{width:'69px', height:'69px'}}>
          </AlbumImage>
          <br />
          <SubText>곱등이와 <br />인생네컷</SubText>
          </div>
          <div> 
          <AlbumImage src={AlbumImg}
          style={{width:'69px', height:'69px'}}>
          </AlbumImage>
          <br />
          <SubText>디자인 너무<br />힘드러</SubText>
          </div>
          <div>
          <br />
          <DataCell>
          <AddButton src={AddImg} style={{width:'69px', height:'69px'}} onClick={openModal} />
          <SubText>추가하기</SubText>
          <Modal isOpen={showModal} closeModal={closeModal} />
          </DataCell>
          </div>
        </HorizontalImageContainer>
      </WhiteContainer>
    </Background>
   
  )
}


export default Album
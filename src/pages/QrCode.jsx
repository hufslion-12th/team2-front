// import React, { useState } from 'react';
// import { QrReader } from 'react-qr-reader'; // 명명된 import 사용
// import styled from 'styled-components';

// const Header = styled.div`
//   height: 120px;
//   background-color: #3B3B3B;
// `;

// const Subtext = styled.div`
//   color: #ffffff;
//   font-size: 14px;
//   font-weight: 600;
//   padding-top: 24px;
//   margin-left: 30px;
// `;

// const Title = styled.div`
//   color: #ffffff;
//   font-size: 40px;
//   font-weight: 600;
//   margin-left: 30px;
// `;

// function Scan() {
//   const [result, setResult] = useState('No result');

//   let handleScan = (data) => {
//     if (data) {
//       setResult(data);
//     }
//   };

//   let handleError = (err) => {
//     console.error(err);
//   };

//   return (
//     <div>
//       <Header>
//         <Subtext>네컷일기</Subtext>
//         <Title>QR 스캔중...</Title>
//       </Header>

//       <QrReader
//         delay={300}
//         onError={handleError}
//         onResult={(result, error) => {
//           if (!!result) {
//             handleScan(result.text);
//           }

//           if (!!error) {
//             handleError(error);
//           }
//         }}
//         style={{ width: '100%' }}
//         constraints={{ facingMode: 'environment' }}
//       />
//       <p>{result}</p>
//     </div>
//   );
// }

// export default Scan;

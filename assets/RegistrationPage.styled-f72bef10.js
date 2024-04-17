import{u as o,v as t}from"./index-ca7bdc4a.js";const i="/fs-92-react-node-horodylova/assets/back_desktop@1x-88afa2b3.png",a="/fs-92-react-node-horodylova/assets/back_desktop@2x-17852ecc.png",r="/fs-92-react-node-horodylova/assets/back_tablet@1x-4801cdc6.png",n="/fs-92-react-node-horodylova/assets/back_tablet@2x-fab874dc.png",s="/fs-92-react-node-horodylova/assets/back_mobile@1x-181c5578.png",d="/fs-92-react-node-horodylova/assets/back_mobile@2x-717c2be2.png",p="/fs-92-react-node-horodylova/assets/bottle_mobile@1x-d4b37871.png",l="/fs-92-react-node-horodylova/assets/bottle_mobile@2x-a0ca8e07.png",c="/fs-92-react-node-horodylova/assets/bottle_tablet@1x-19a9a0a2.png",x="/fs-92-react-node-horodylova/assets/bottle_tablet@2x-c57bb685.png",g="/fs-92-react-node-horodylova/assets/bottle_desktop@1x-ee6779c2.png",m="/fs-92-react-node-horodylova/assets/bottle_desktop@2x-911dccf4.png",b=o.div`
  color: var(--red-color);
  border-color: var(--red-color) !important;
  color: var(--red-color);
  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1440px) {
    width: 364px;
  }
`,f=o.input`
  border-radius: 6px;
  border: 1px solid rgb(215, 227, 255);
  min-width: 280px;
  font-size: 16px;
  padding: 12px 10px;
  line-height: 20px;

  &::placeholder {
    color: var(--light-blue-color);
  }
  color: ${e=>e.$errors?"var(--red-color)":"var(--light-blue-color)"};
  outline: none;
  border: 2px solid var(--light-grey-color);

  border-radius: 6px;
  padding: 12px 10px;
  ${({$errors:e})=>e?"border: 1px solid var(--red-color);":""} /* margin-top: 8px; */

    @media screen and (min-width: 768px) {
    min-width: 336px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 384px;
  }
`,u=o.div`
  position: relative;
  display: inline-block;
`,k=o.div`
  font-size: 18px;
  line-height: 1.33;
  color: rgb(47, 47, 47);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`,v=o.label`
  font-family: 'roboto', sans-serif;
  color: var(--primary-txt-color);
  display: block;
  font-size: 18px;
  line-height: 24px;
`,w=o.div`
  @media screen and (min-width: 768px) {
    position: relative;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
  }
`,y=o.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    margin-right: auto;
    width: 336px;
    position: absolute;
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
    padding-top: 113px;
    margin-right: -190px;
  }
`,B=o.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-right: auto;
  margin-left: auto;
  width: 320px;
  padding-top: 20px;
  // not right, but works

  @media (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding-left: 112px;
    padding-right: 112px;
  }
`,$=o.h1`
  font-family: 'robot', sans-serif;
  font-size: 26px;
  font-weight: var(--medium);
  line-height: 32px;

  color: var(--primary-txt-color);
`,_=o(t)`
  color: var(--primary-color);
  line-height: 20px;
  font-size: 16px;
  font-family: 'roboto', sans-serif;
  font-weight: 400;
`,z=o.button`
  font-family: 'roboto', sans-serif;
  font-weight: var(--medium);
  font-size: 16px;
  line-height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 30px;
  margin-bottom: 16px;
  width: 100%;

  cursor: pointer;
  border: none;
  border-radius: 10px;
  background: var(--primary-color);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: white;
  ${e=>e.disabled?"cursor: default;":""}

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    padding: 10px 30px;
  }
`,M=o.div`
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 80vh;
  background-position: center bottom;

  @media (max-width: 767px) {
    background-image: image-set(
      url(${p}) 1x,
      url(${l}) 2x
    );
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    background-image: image-set(
      url(${c}) 1x,
      url(${x}) 2x
    );
    background-position: 80px center;
    width: 736px;
    height: 548px;
  }

  @media (min-width: 1440px) {
    background-image: image-set(url(${g}) 1x, url(${m}) 2x);
    margin-top: 0;
    background-position: -65px center;
    width: 916px;
    min-height: 680px;
  }
`,L=o.section`
  height: 100vh;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;

  @media (max-width: 767px) {
    background-image: image-set(url(${s}) 1x, url(${d}) 2x);
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    background-image: image-set(url(${r}) 1x, url(${n}) 2x);
  }

  @media (min-width: 1024px) {
    background-image: image-set(url(${i}) 1x, url(${a}) 2x);
  }
`,I=o.svg`
  cursor: pointer;
  stroke: var(--primaryBlue);
  position: absolute;
  right: 10px;
  top: 40%;
  transform: translateY(-50%);
  fill: none;
  width: 16px;
  height: 16px;
  margin-top: 5px;
`,T=o.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 990;
`;o.h3``;export{M as B,I as E,w as F,f as I,k as L,$ as M,_ as P,B as R,L as S,y as a,v as b,b as c,u as d,z as e,T as f};

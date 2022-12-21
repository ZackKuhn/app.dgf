import styled from 'styled-components';

export const Container = styled.div`

  position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin: 10px;
    background-color: none;
    cursor: pointer;
`;

export const Content = styled.div`
  @keyframes entryBox {
        0%{
            transform: translateY(-30px);
        }
        100%{
          transform: translateY(0);
        }
      }

  animation: entryBox .3s ease;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 650px;
  box-shadow: 5px 4px 15px #141417;
 

  .Spacer{
    width: 100%;
    height: 15px;
  }

  .Form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;

    .DateBox{
      display: flex;
      justify-content: center;
      width: 100%;
      height: 80px;
    }
  }

  .Divider{
    display: flex;
    width: 100%;
    height: 2px;
    background-color: #141417;
  }

  .NavForm{
  
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100px;
    .Title{
      display: flex;
      align-items: center;
      font-size: 10px;
      font-weight: 700;
      color: #DDDDDD;
      padding-left: 30px;
      h1{
        padding-left: 10px;
      }
    }
    
    .SubTitle{
      display: flex;
      align-items: center;
      font-size: 8px;
      font-weight: 400;
      color: #5A5A62;
      h2{
        padding: 40px;
      }
    }
    
  }
  .FormActions{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 5px;
    }
`
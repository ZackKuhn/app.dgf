import styled from 'styled-components'

export const Container = styled.div`
@keyframes PageHeaderAnim {
  0%{
    transform: translateY(20px);
  }
  100%{
    transform: translateY(0);
  }
}
animation: PageHeaderAnim .4s ease;
  display: flex;
  justify-content: space-between;
  /* --- lateral distance for widher monitor */
  align-items: center;
  padding: 0 25px;
  width: 100%;
  height:fit-content;
  margin: 80px 0 30px 0 ;
  .UserLabel{
    font: 900 25px 'Roboto';
    color: white;
  }
  
  .DgthusLabel{
    font: 400 12px 'Roboto';
    color: #5A5A62;
  }
`
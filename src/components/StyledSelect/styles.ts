import styled, {css} from "styled-components";
import ReactSelect from 'react-select'

import { colors } from "../../styles/Colors";

export const StyledSelectComponent = styled(ReactSelect)`
  width: 288px;
  font-size: 14px;

  .react-select__single-value{
    color: ${colors.accentTextColor};
  }

  .react-select__dropdown-indicator{
    color: ${colors.actionColor};
  }

  .react-select__indicator-separator{
    background-color: ${colors.bgDarkColor};
  }

  .react-select__control{
    background-color: ${colors.bgDarkColor};
    border: none;
    cursor: pointer;

    :focus{
      border: 2px solid purple;
    }
  }
  .react-select__control--is-focused{
    border: 0;
    box-shadow: none;
  }

  .react-select-arrow{
    color: ${colors.actionColor};
  }
  
  .react-select__value-container{
    background-color: ${colors.bgDarkColor};
    font-variant: 12px;
    color: white;   
  }

  .react-select__select__indicators{
    background: ${colors.actionColor};
    color: ${colors.actionColor};
    border: 2px solid green;
  }

  .react-select__menu{
    margin-top: -2px;
    padding: 0;
    border-radius: 0 0 4px 4px;
  }
  
  .react-select__menu-list{
    padding: 0;
    background-color: ${colors.secondContainerColor};
    border-radius: 0 0 4px 4px;
  }

.react-select__option {
      background-color: ${colors.secondContainerColor};
      color: ${colors.infoTextColor};
      cursor: pointer;
      :hover{
        background-color: ${colors.thirdContainerColor};
        color: ${colors.accentTextColor};
      }
   }

  .react-select__placeholder{
    color: ${colors.infoTextColor};
  }
`

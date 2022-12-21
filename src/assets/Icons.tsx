import {useState} from 'react'
import styled, { css } from 'styled-components';

import { colors } from '../styles/Colors';

//React icons
import { AiFillTrophy } from 'react-icons/ai';
import { BiMessageSquareAdd, BiTime } from 'react-icons/bi';
import { BsFillFileEarmarkPersonFill, BsLink45Deg } from 'react-icons/bs';
import { CgDarkMode } from 'react-icons/cg';
import { FaBell, FaUserEdit } from 'react-icons/fa';
import { FiCalendar } from 'react-icons/fi';
import { HiFilter } from 'react-icons/hi';
import { ImCheckboxChecked, ImEnter } from 'react-icons/im';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { MdAddBox, MdKeyboardArrowDown, MdModeEdit, MdOpenInNew, MdOutlinedFlag } from 'react-icons/md';
import { RiFileTextLine, RiFileUserLine, RiHomeFill, RiSearch2Line } from 'react-icons/ri';

import { CgClose } from 'react-icons/cg';

//Icon test
import { GiReactor } from 'react-icons/gi';

interface IconProps {
  Active: boolean;
}

interface MoreOrLessIconProps {
  iconcolor: string
}

export const CloseIcon = styled(CgClose)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: ${colors.lightIconColor};
  cursor: pointer;
  :hover{
    color: ${colors.actionColor}; 
  }
`

export const AddClientIcon = styled(BiMessageSquareAdd)`
  width: 24px;
  height: 24px;
  color: ${colors.actionColor};
  cursor: pointer;
`

export const HomeIcon = styled(RiHomeFill)`
  width: 20px;
  height: 20px;
  color: ${colors.lightIconColor};
  cursor: pointer;
  :hover{
    color: ${colors.actionColor}; 
  }
`

export const CustumerFileIcon = styled(BsFillFileEarmarkPersonFill)`
  width: 32px;
  height: 32px;
  color: ${colors.lightIconColor};
  cursor: pointer;
`

export const DarkIcon = styled(CgDarkMode)`
  width: 20px;
  height: 20px;
  color: ${colors.lightIconColor};
  cursor: pointer;
  :hover{
    color: ${colors.actionColor}; 
  }
`

export const BellIcon = styled(FaBell)`
  width: 20px;
  height: 20px;
  color: ${colors.lightIconColor};
  cursor: pointer;
  :hover{
    color: ${colors.actionColor}; 
  }
`

export const MenuIcon = styled(MdKeyboardArrowDown)`
  width: 30px;
  height: 30px;
  color: var(--actionIcon-color);
  cursor: pointer;
  :hover{
    color: ${colors.actionColor}; 
  }
`
export const MiniCalendarIcon = styled(FiCalendar)`
  width: 20px;
  height: 20px;
  color: ${colors.actionColor};
`
export const MiniTimeIcon = styled(BiTime)`
  width: 20px;
  height: 20px;
  color: ${colors.actionColor};
`
export const SearchIcon = styled(RiSearch2Line)`
  width: 45px;
  height: 45px;
  color:  ${colors.actionColor};
  padding-right: 20px;
    cursor: pointer;
`

export const TrophyIcon = styled(AiFillTrophy)`
  width: 20px;
  height: 20px;
  color: ${colors.lightIconColor};
  cursor: pointer;
  :hover{
    color: ${colors.actionColor}; 
  }
`     
export const ScientistIcon = styled(GiReactor)`
width: 70px;
  height: 70px;
  color: #5A5A62; 
  cursor: pointer;
`
export const ClientIcon = styled(RiFileUserLine)`
width: 40px;
  height: 40px;
  color: ${colors.actionColor}; 
`

export const DocumentIcon = styled(RiFileTextLine)`
width: 40px;
  height: 40px;
  color: ${colors.actionColor}; 
`
export const LoginIcon = styled(ImEnter)`
  width: 20px;
  height: 20px;
  color: #5A5A62;
  ${(props: IconProps) =>
      props.Active &&
      css`
      color: ${colors.actionColor};
      `}
`

export const NotificationIcon = styled(IoMdNotificationsOutline)`
  width: 70px;
  height: 70px;
  color: ${colors.lightIconColor}; 
  cursor: pointer;
`

export const CalendarIcon = styled(IoCalendarClearOutline)`
width: 70px;
  height: 70px;
  color: ${colors.actionColor}; 
  cursor: pointer;
`
export const EditIcon = styled(MdModeEdit)`
position: absolute;
padding: 10px;
  width: 40px;
  height: 40px;
  color: ${colors.lightIconColor}; 
  border-radius: 4px;
  :hover{
    background-color: #2A2A30;
    color: white;
  }`

  export const MoreIcon = styled(MdAddBox)`
  width: 40px;
  height: 40px;
  color: ${colors.lightIconColor}; 
  padding: 10px;
  border-radius: 4px;
  
  :hover{
    background-color: #2A2A30;
    color: white;
  }
  `

export const AddIcon = styled(MdAddBox)`
width: 20px;
height: 20px;
color: white; 
`
export const FilterIcon = styled(HiFilter)`
  width: 40px;
  height: 40px;
  color: ${colors.lightIconColor};
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  :hover{
    background-color: #2A2A30;
    color: ${colors.actionColor};
  }
`

export const SeeMoreIcon = styled(MdOpenInNew)`
  width: 20px;
  height: 20px;
  /* color: #5A5A62;  */
  color: ${colors.actionColor};
`

export const DoneIcon = styled(ImCheckboxChecked)`
width: 20px;
  height: 20px;
  /* color: #5A5A62;  */
  color: ${colors.actionColor};
`
export const LinkIcon = styled(BsLink45Deg)`
  width: 50px;
  height: 50px;
  color: #5A5A62;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  :hover{
    background-color: #2A2A30;
    color: ${colors.actionColor};
  }
`
// export const ClientIcon = styled(BsFileEarmarkPerson)`
//   width: 50px;
//   height: 50px;
//   color: #B62737;
// `

export const ProfileIcon = styled(FaUserEdit)`
width: 30px;
  height: 30px;
  color: ${colors.actionColor};
`

interface flagProps {
  flagcolor: number
}

export const FlagIcon = styled(MdOutlinedFlag)<flagProps>`
  transition: color .3s ease;
  color: ${props => props.flagcolor === 3 && colors.redFlag ||
                    props.flagcolor === 2 && colors.yellowFlag ||
                    props.flagcolor === 1 && colors.greenFlag}
`

//Icons<> Logo Digithus | Aplicação colorida
export function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="36"
      fill="none"
      viewBox="0 0 78 87"
    >
      <path
        fill="url(#paint0_linear_2031_467)"
        d="M76.33 34.16H55.06c.55 2.89.77 5.65.77 8.92 0 7.94-2.2 14.07-6.6 18.41-4.4 4.34-10.55 6.5-18.45 6.5h-9.89V17.92h9.89c1.83 0 3.58 0 5.22.24V.12C34.73.04 33.44 0 32.13 0H0v68.16h21v18h11.13c8.96 0 16.81-1.8 23.57-5.4 6.84-3.6 12.1-8.67 15.76-15.22 3.75-6.55 5.62-14.03 5.62-22.46 0-3.11-.25-6.08-.75-8.92z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_2031_467"
          x1="18.48"
          x2="68.94"
          y1="-4.18"
          y2="137.68"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CD86F4"></stop>
          <stop offset="1" stopColor="#3680F1"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Logotipo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="36"
      fill="none"
      viewBox="0 0 99 31"
    >
      <path
        fill="#313041"
        d="M8.1 3.344c2.072 0 3.883.41 5.432 1.232 1.55.821 2.744 1.979 3.584 3.472.859 1.475 1.288 3.183 1.288 5.124 0 1.923-.43 3.63-1.288 5.124-.84 1.493-2.044 2.65-3.612 3.472C11.954 22.589 10.154 23 8.1 23H.736V3.344H8.1zm-.308 15.512c1.81 0 3.22-.495 4.228-1.484 1.008-.99 1.512-2.39 1.512-4.2s-.504-3.22-1.512-4.228c-1.008-1.008-2.417-1.512-4.228-1.512H5.524v11.424h2.268zM20.688 5.752c-.84 0-1.53-.243-2.072-.728a2.469 2.469 0 01-.784-1.848c0-.747.261-1.363.784-1.848.541-.504 1.232-.756 2.072-.756.821 0 1.493.252 2.016.756.541.485.812 1.101.812 1.848 0 .728-.27 1.344-.812 1.848-.523.485-1.195.728-2.016.728zm2.38 1.624V23H18.28V7.376h4.788zm6.606-.224c1.1 0 2.062.224 2.884.672.84.448 1.484 1.036 1.932 1.764V7.376h4.788v15.596c0 1.437-.29 2.735-.868 3.892-.56 1.176-1.428 2.11-2.604 2.8-1.158.69-2.604 1.036-4.34 1.036-2.315 0-4.191-.55-5.628-1.652-1.438-1.083-2.26-2.557-2.464-4.424h4.732c.149.597.504 1.064 1.064 1.4.56.355 1.25.532 2.072.532.989 0 1.773-.29 2.352-.868.597-.56.896-1.465.896-2.716V20.76c-.467.728-1.111 1.325-1.932 1.792-.822.448-1.783.672-2.884.672-1.288 0-2.455-.327-3.5-.98-1.046-.672-1.876-1.615-2.492-2.828-.598-1.232-.896-2.65-.896-4.256 0-1.605.298-3.015.896-4.228.616-1.213 1.446-2.147 2.492-2.8 1.045-.653 2.212-.98 3.5-.98zm4.816 8.036c0-1.195-.336-2.137-1.008-2.828a3.185 3.185 0 00-2.408-1.036c-.952 0-1.764.345-2.436 1.036-.654.672-.98 1.605-.98 2.8 0 1.195.326 2.147.98 2.856.672.69 1.484 1.036 2.436 1.036s1.754-.345 2.408-1.036c.672-.69 1.008-1.633 1.008-2.828zm7.86-9.436c-.84 0-1.531-.243-2.072-.728a2.469 2.469 0 01-.785-1.848c0-.747.262-1.363.785-1.848.54-.504 1.232-.756 2.072-.756.82 0 1.493.252 2.015.756.542.485.813 1.101.813 1.848 0 .728-.271 1.344-.813 1.848-.522.485-1.194.728-2.016.728zm2.38 1.624V23h-4.788V7.376h4.788zm9.377 11.564V23h-2.436c-1.736 0-3.09-.42-4.06-1.26-.97-.859-1.456-2.25-1.456-4.172v-6.216h-1.904V7.376h1.904V3.568h4.788v3.808h3.136v3.976h-3.136v6.272c0 .467.112.803.336 1.008.224.205.598.308 1.12.308h1.708zm9.471-11.732c1.792 0 3.23.597 4.312 1.792 1.083 1.176 1.624 2.8 1.624 4.872V23h-4.76v-8.484c0-1.045-.27-1.857-.812-2.436-.541-.579-1.27-.868-2.184-.868-.914 0-1.642.29-2.184.868-.541.579-.812 1.39-.812 2.436V23h-4.788V2.28h4.788v7.196c.486-.69 1.148-1.241 1.988-1.652.84-.41 1.783-.616 2.828-.616zm21.891.168V23h-4.787v-2.128c-.486.69-1.148 1.25-1.989 1.68-.82.41-1.736.616-2.743.616-1.195 0-2.25-.261-3.165-.784-.914-.541-1.623-1.316-2.127-2.324-.505-1.008-.757-2.193-.757-3.556V7.376h4.76v8.484c0 1.045.271 1.857.813 2.436.54.579 1.269.868 2.183.868.934 0 1.671-.29 2.213-.868.54-.579.811-1.39.811-2.436V7.376h4.788zm6.996 15.848c-1.363 0-2.576-.233-3.64-.7-1.064-.467-1.904-1.101-2.52-1.904a5.117 5.117 0 01-1.036-2.744H90c.056.541.308.98.756 1.316.448.336.998.504 1.652.504.597 0 1.054-.112 1.372-.336.336-.243.504-.55.504-.924 0-.448-.234-.775-.7-.98-.467-.224-1.223-.467-2.268-.728-1.12-.261-2.054-.532-2.8-.812a5.027 5.027 0 01-1.932-1.372c-.542-.635-.812-1.484-.812-2.548 0-.896.242-1.708.728-2.436.504-.747 1.232-1.335 2.184-1.764.97-.43 2.118-.644 3.444-.644 1.96 0 3.5.485 4.62 1.456 1.138.97 1.792 2.259 1.96 3.864h-4.424c-.075-.541-.318-.97-.728-1.288-.392-.317-.915-.476-1.568-.476-.56 0-.99.112-1.288.336a.993.993 0 00-.448.868c0 .448.233.784.7 1.008.485.224 1.232.448 2.24.672 1.157.299 2.1.597 2.828.896.728.28 1.362.747 1.904 1.4.56.635.849 1.493.868 2.576 0 .915-.262 1.736-.784 2.464-.504.71-1.242 1.27-2.212 1.68-.952.41-2.063.616-3.332.616z"
      ></path>
    </svg>
  );
}

export function LogotipoCta() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="210"
      height="100"
      fill="none"
      viewBox="0 0 99 31"
    >
      <path
        fill="#7453F8"
        d="M8.1 3.344c2.072 0 3.883.41 5.432 1.232 1.55.821 2.744 1.979 3.584 3.472.859 1.475 1.288 3.183 1.288 5.124 0 1.923-.43 3.63-1.288 5.124-.84 1.493-2.044 2.65-3.612 3.472C11.954 22.589 10.154 23 8.1 23H.736V3.344H8.1zm-.308 15.512c1.81 0 3.22-.495 4.228-1.484 1.008-.99 1.512-2.39 1.512-4.2s-.504-3.22-1.512-4.228c-1.008-1.008-2.417-1.512-4.228-1.512H5.524v11.424h2.268zM20.688 5.752c-.84 0-1.53-.243-2.072-.728a2.469 2.469 0 01-.784-1.848c0-.747.261-1.363.784-1.848.541-.504 1.232-.756 2.072-.756.821 0 1.493.252 2.016.756.541.485.812 1.101.812 1.848 0 .728-.27 1.344-.812 1.848-.523.485-1.195.728-2.016.728zm2.38 1.624V23H18.28V7.376h4.788zm6.606-.224c1.1 0 2.062.224 2.884.672.84.448 1.484 1.036 1.932 1.764V7.376h4.788v15.596c0 1.437-.29 2.735-.868 3.892-.56 1.176-1.428 2.11-2.604 2.8-1.158.69-2.604 1.036-4.34 1.036-2.315 0-4.191-.55-5.628-1.652-1.438-1.083-2.26-2.557-2.464-4.424h4.732c.149.597.504 1.064 1.064 1.4.56.355 1.25.532 2.072.532.989 0 1.773-.29 2.352-.868.597-.56.896-1.465.896-2.716V20.76c-.467.728-1.111 1.325-1.932 1.792-.822.448-1.783.672-2.884.672-1.288 0-2.455-.327-3.5-.98-1.046-.672-1.876-1.615-2.492-2.828-.598-1.232-.896-2.65-.896-4.256 0-1.605.298-3.015.896-4.228.616-1.213 1.446-2.147 2.492-2.8 1.045-.653 2.212-.98 3.5-.98zm4.816 8.036c0-1.195-.336-2.137-1.008-2.828a3.185 3.185 0 00-2.408-1.036c-.952 0-1.764.345-2.436 1.036-.654.672-.98 1.605-.98 2.8 0 1.195.326 2.147.98 2.856.672.69 1.484 1.036 2.436 1.036s1.754-.345 2.408-1.036c.672-.69 1.008-1.633 1.008-2.828zm7.86-9.436c-.84 0-1.531-.243-2.072-.728a2.469 2.469 0 01-.785-1.848c0-.747.262-1.363.785-1.848.54-.504 1.232-.756 2.072-.756.82 0 1.493.252 2.015.756.542.485.813 1.101.813 1.848 0 .728-.271 1.344-.813 1.848-.522.485-1.194.728-2.016.728zm2.38 1.624V23h-4.788V7.376h4.788zm9.377 11.564V23h-2.436c-1.736 0-3.09-.42-4.06-1.26-.97-.859-1.456-2.25-1.456-4.172v-6.216h-1.904V7.376h1.904V3.568h4.788v3.808h3.136v3.976h-3.136v6.272c0 .467.112.803.336 1.008.224.205.598.308 1.12.308h1.708zm9.471-11.732c1.792 0 3.23.597 4.312 1.792 1.083 1.176 1.624 2.8 1.624 4.872V23h-4.76v-8.484c0-1.045-.27-1.857-.812-2.436-.541-.579-1.27-.868-2.184-.868-.914 0-1.642.29-2.184.868-.541.579-.812 1.39-.812 2.436V23h-4.788V2.28h4.788v7.196c.486-.69 1.148-1.241 1.988-1.652.84-.41 1.783-.616 2.828-.616zm21.891.168V23h-4.787v-2.128c-.486.69-1.148 1.25-1.989 1.68-.82.41-1.736.616-2.743.616-1.195 0-2.25-.261-3.165-.784-.914-.541-1.623-1.316-2.127-2.324-.505-1.008-.757-2.193-.757-3.556V7.376h4.76v8.484c0 1.045.271 1.857.813 2.436.54.579 1.269.868 2.183.868.934 0 1.671-.29 2.213-.868.54-.579.811-1.39.811-2.436V7.376h4.788zm6.996 15.848c-1.363 0-2.576-.233-3.64-.7-1.064-.467-1.904-1.101-2.52-1.904a5.117 5.117 0 01-1.036-2.744H90c.056.541.308.98.756 1.316.448.336.998.504 1.652.504.597 0 1.054-.112 1.372-.336.336-.243.504-.55.504-.924 0-.448-.234-.775-.7-.98-.467-.224-1.223-.467-2.268-.728-1.12-.261-2.054-.532-2.8-.812a5.027 5.027 0 01-1.932-1.372c-.542-.635-.812-1.484-.812-2.548 0-.896.242-1.708.728-2.436.504-.747 1.232-1.335 2.184-1.764.97-.43 2.118-.644 3.444-.644 1.96 0 3.5.485 4.62 1.456 1.138.97 1.792 2.259 1.96 3.864h-4.424c-.075-.541-.318-.97-.728-1.288-.392-.317-.915-.476-1.568-.476-.56 0-.99.112-1.288.336a.993.993 0 00-.448.868c0 .448.233.784.7 1.008.485.224 1.232.448 2.24.672 1.157.299 2.1.597 2.828.896.728.28 1.362.747 1.904 1.4.56.635.849 1.493.868 2.576 0 .915-.262 1.736-.784 2.464-.504.71-1.242 1.27-2.212 1.68-.952.41-2.063.616-3.332.616z"
      ></path>
    </svg>
  );
}

export function MenuLogo() {
  const [iconInFocus, setIcoInFocus] = useState(true)
  return (
    <svg onBlur={()=> setIcoInFocus(false)}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="36"
      fill="none"
      viewBox="0 0 32 36"
    >
      <path
        fill={
          iconInFocus ? 'white' : 'purple'
        }
        d="M31.689 14.273h-8.83c.228 1.207.319 2.36.319 3.727 0 3.317-.913 5.879-2.74 7.692-1.827 1.814-4.38 2.716-7.66 2.716H8.673V7.488h4.105c.76 0 1.487 0 2.167.1V.05A25.39 25.39 0 0013.34 0H0v28.48h8.718V36h4.62c3.72 0 6.98-.752 9.786-2.256 2.84-1.504 5.023-3.623 6.543-6.36C31.224 24.648 32 21.522 32 18c0-1.3-.104-2.54-.311-3.727z"
      ></path>
    </svg>
  );
}

export function WhatsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 36 36"
    >
      <circle cx="18" cy="18" r="18" fill="#222226"></circle>
      <path
        fill="#7453F8"
        d="M18.003 8h-.006C12.484 8 8 12.485 8 18c0 2.188.705 4.215 1.904 5.861l-1.246 3.715 3.843-1.229A9.913 9.913 0 0018.003 28C23.516 28 28 23.514 28 18S23.516 8 18.003 8z"
      ></path>
      <path
        fill="#FAFAFA"
        d="M23.821 22.122c-.241.681-1.199 1.246-1.962 1.411-.523.111-1.205.2-3.503-.753-2.939-1.217-4.831-4.203-4.979-4.397-.14-.194-1.187-1.581-1.187-3.016s.729-2.134 1.022-2.434c.242-.246.64-.359 1.023-.359.124 0 .235.007.335.011.294.013.441.03.635.494.241.582.829 2.016.899 2.164.07.147.142.348.042.541-.094.2-.176.289-.324.459-.147.17-.287.3-.435.483-.135.158-.287.328-.117.622.17.288.757 1.246 1.622 2.016 1.117.994 2.022 1.311 2.345 1.447.242.1.53.076.705-.112.224-.241.5-.641.782-1.035.2-.282.452-.317.717-.217.27.094 1.699.8 1.993.946.293.148.487.217.558.341.07.124.07.705-.17 1.388z"
      ></path>
    </svg>
  );
}

export function HorizontalLogo(){
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="103"
      height="36"
      fill="none"
      viewBox="0 0 103 36"
    >
      <path
        fill="#737AAE"
        d="M43.85 12.364c1.332 0 2.496.264 3.492.792a5.583 5.583 0 012.304 2.232c.552.948.828 2.046.828 3.294 0 1.236-.276 2.334-.828 3.294-.54.96-1.314 1.704-2.322 2.232-.996.528-2.154.792-3.474.792h-4.734V12.364h4.734zm-.198 9.972c1.164 0 2.07-.318 2.718-.954.648-.636.972-1.536.972-2.7 0-1.164-.324-2.07-.972-2.718-.648-.648-1.554-.972-2.718-.972h-1.458v7.344h1.458zm8.29-8.424c-.54 0-.984-.156-1.332-.468a1.587 1.587 0 01-.504-1.188c0-.48.168-.876.504-1.188.348-.324.792-.486 1.332-.486.528 0 .96.162 1.296.486.348.312.522.708.522 1.188 0 .468-.174.864-.522 1.188-.336.312-.768.468-1.296.468zm1.53 1.044V25h-3.078V14.956h3.078zm4.247-.144c.708 0 1.326.144 1.854.432.54.288.954.666 1.242 1.134v-1.422h3.078v10.026c0 .924-.186 1.758-.558 2.502-.36.756-.918 1.356-1.674 1.8-.744.444-1.674.666-2.79.666-1.488 0-2.694-.354-3.618-1.062-.924-.696-1.452-1.644-1.584-2.844h3.042c.096.384.324.684.684.9.36.228.804.342 1.332.342.636 0 1.14-.186 1.512-.558.384-.36.576-.942.576-1.746V23.56c-.3.468-.714.852-1.242 1.152-.528.288-1.146.432-1.854.432-.828 0-1.578-.21-2.25-.63-.672-.432-1.206-1.038-1.602-1.818-.384-.792-.576-1.704-.576-2.736 0-1.032.192-1.938.576-2.718.396-.78.93-1.38 1.602-1.8a4.159 4.159 0 012.25-.63zm3.096 5.166c0-.768-.216-1.374-.648-1.818a2.048 2.048 0 00-1.548-.666c-.612 0-1.134.222-1.566.666-.42.432-.63 1.032-.63 1.8s.21 1.38.63 1.836c.432.444.954.666 1.566.666.612 0 1.128-.222 1.548-.666.432-.444.648-1.05.648-1.818zm5.053-6.066c-.54 0-.984-.156-1.332-.468a1.587 1.587 0 01-.505-1.188c0-.48.168-.876.504-1.188.349-.324.793-.486 1.333-.486.528 0 .96.162 1.296.486.347.312.522.708.522 1.188 0 .468-.175.864-.523 1.188-.335.312-.767.468-1.295.468zm1.53 1.044V25H64.32V14.956h3.078zm6.028 7.434V25H71.86c-1.116 0-1.986-.27-2.61-.81-.624-.552-.936-1.446-.936-2.682v-3.996H67.09v-2.556h1.224v-2.448h3.078v2.448h2.016v2.556h-2.016v4.032c0 .3.072.516.216.648.144.132.384.198.72.198h1.098zm6.089-7.542c1.152 0 2.076.384 2.772 1.152.696.756 1.044 1.8 1.044 3.132V25h-3.06v-5.454c0-.672-.174-1.194-.522-1.566-.348-.372-.816-.558-1.404-.558s-1.056.186-1.404.558c-.348.372-.522.894-.522 1.566V25H73.34V11.68h3.078v4.626a3.29 3.29 0 011.278-1.062c.54-.264 1.146-.396 1.818-.396zm14.073.108V25H90.51v-1.368c-.313.444-.739.804-1.279 1.08a3.889 3.889 0 01-1.763.396c-.769 0-1.447-.168-2.035-.504a3.516 3.516 0 01-1.368-1.494c-.323-.648-.486-1.41-.486-2.286v-5.868h3.06v5.454c0 .672.175 1.194.523 1.566.347.372.816.558 1.403.558.6 0 1.075-.186 1.422-.558.349-.372.523-.894.523-1.566v-5.454h3.078zm4.496 10.188c-.876 0-1.656-.15-2.34-.45-.684-.3-1.224-.708-1.62-1.224a3.29 3.29 0 01-.666-1.764H96.5c.036.348.198.63.486.846.288.216.642.324 1.062.324.384 0 .678-.072.882-.216.216-.156.324-.354.324-.594 0-.288-.15-.498-.45-.63-.3-.144-.786-.3-1.458-.468-.72-.168-1.32-.342-1.8-.522a3.232 3.232 0 01-1.242-.882c-.348-.408-.522-.954-.522-1.638 0-.576.156-1.098.468-1.566.324-.48.792-.858 1.404-1.134.624-.276 1.362-.414 2.214-.414 1.26 0 2.25.312 2.97.936.732.624 1.152 1.452 1.26 2.484h-2.844a1.213 1.213 0 00-.468-.828c-.252-.204-.588-.306-1.008-.306-.36 0-.636.072-.828.216a.638.638 0 00-.288.558c0 .288.15.504.45.648.312.144.792.288 1.44.432.744.192 1.35.384 1.818.576.468.18.876.48 1.224.9.36.408.546.96.558 1.656a2.65 2.65 0 01-.504 1.584c-.324.456-.798.816-1.422 1.08-.612.264-1.326.396-2.142.396z"
      ></path>
      <path
        fill="#7453F8"
        d="M31.689 14.273h-8.83c.228 1.207.319 2.36.319 3.727 0 3.317-.913 5.879-2.74 7.692-1.827 1.814-4.38 2.716-7.66 2.716H8.673V7.488h4.105c.76 0 1.487 0 2.167.1V.05A25.39 25.39 0 0013.34 0H0v28.48h8.718V36h4.62c3.72 0 6.98-.752 9.786-2.256 2.84-1.504 5.023-3.623 6.543-6.36C31.224 24.648 32 21.522 32 18c0-1.3-.104-2.54-.311-3.727z"
      ></path>
    </svg>
  );
}

export function DgxCoin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="93"
      height="91"
      fill="none"
      viewBox="0 0 93 91"
    >
      <path
        fill="#343344"
        d="M71.244 71.853a17 17 0 008.529-14.738V37.305a17 17 0 00-8.53-14.74l-15.154-8.71a17 17 0 00-16.942 0l-15.156 8.71a17 17 0 00-8.529 14.74v19.809a17 17 0 008.529 14.738l15.155 8.711a17 17 0 0016.943 0l15.155-8.71z"
      ></path>
      <path
        fill="url(#paint0_linear_2345_458)"
        d="M41.657 78.051a12 12 0 0012 0l17.65-10.189a12 12 0 006-10.393l-.003-20.47a12 12 0 00-5.999-10.391L53.58 16.37a12 12 0 00-12.001 0L23.929 26.56a12 12 0 00-6 10.393l.002 20.47a12 12 0 005.999 10.392L41.657 78.05z"
      ></path>
      <g style={{ mixBlendMode: "luminosity" }} opacity="0.4">
        <path
          fill="url(#paint1_linear_2345_458)"
          d="M17.885 47.208v10.17a12 12 0 006.013 10.4l8.848 5.094 14.86-8.555v-17.11l-14.86-8.554-14.86 8.555z"
        ></path>
        <path
          fill="url(#paint2_linear_2345_458)"
          d="M17.885 30.098v17.11l14.86 8.555 14.862-8.556V30.098l-14.861-8.555-14.86 8.555z"
        ></path>
        <path
          fill="url(#paint3_linear_2345_458)"
          d="M17.89 47.272v10.171a12 12 0 006.012 10.4l8.848 5.093 14.86-8.555V47.272l-14.86-8.555-14.86 8.555z"
        ></path>
        <path
          fill="url(#paint4_linear_2345_458)"
          d="M47.314 47.272v17.11l14.861 8.554 8.848-5.093a12 12 0 006.013-10.4v-10.17l-14.86-8.556-14.862 8.555z"
        ></path>
        <path
          fill="url(#paint5_linear_2345_458)"
          d="M62.468 21.548v17.109l-14.861 8.555-14.86-8.555v-17.11l8.873-5.108a12 12 0 0111.974 0l8.874 5.109z"
        ></path>
        <path
          fill="url(#paint6_linear_2345_458)"
          d="M47.607 64.317v-17.11l14.86-8.555 14.861 8.556-.354 1.732a41.555 41.555 0 01-14.506 23.932l-14.861-8.555z"
        ></path>
        <path
          fill="url(#paint7_linear_2345_458)"
          d="M77.328 30.098v17.11l-14.86 8.555-14.861-8.556V30.098l14.86-8.555 14.861 8.555z"
        ></path>
        <path
          fill="url(#paint8_linear_2345_458)"
          d="M62.468 72.876V55.767l-14.861-8.555-14.86 8.555v17.11l14.86 8.555 14.86-8.556z"
        ></path>
      </g>
      <path
        fill="url(#paint9_linear_2345_458)"
        d="M41.493 22.036a12 12 0 0112.005-.003l12.766 7.37a12 12 0 016 10.398l-.007 14.779a12 12 0 01-5.995 10.384l-12.795 7.395a12 12 0 01-12.005.003L28.696 64.99a12 12 0 01-6-10.398l.007-14.778a12 12 0 015.995-10.384l12.795-7.395z"
      ></path>
      <path
        fill="#fff"
        d="M55.854 45.136h-4.14c.108.604.15 1.18.15 1.864 0 1.659-.427 2.94-1.284 3.846-.856.907-2.053 1.358-3.59 1.358h-1.925v-10.46h1.925c.356 0 .697 0 1.016.05v-3.769a11.168 11.168 0 00-.753-.025H41v14.24h4.087V56h2.166c1.743 0 3.27-.376 4.586-1.128a7.613 7.613 0 003.067-3.18C55.636 50.324 56 48.762 56 47c0-.65-.049-1.27-.146-1.864z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_2345_458"
          x1="27.597"
          x2="43.858"
          y1="12.012"
          y2="94.979"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DE66A9"></stop>
          <stop offset="1" stopColor="#5D44C1"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_2345_458"
          x1="32.746"
          x2="17.949"
          y1="72.085"
          y2="46.834"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8257E5"></stop>
          <stop offset="1" stopColor="#FF008E" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_2345_458"
          x1="32.746"
          x2="17.949"
          y1="54.976"
          y2="29.725"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8257E5"></stop>
          <stop offset="1" stopColor="#FF8DCD" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_2345_458"
          x1="32.75"
          x2="17.953"
          y1="72.15"
          y2="46.898"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8257E5"></stop>
          <stop offset="1" stopColor="#FF8DCD" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear_2345_458"
          x1="62.175"
          x2="47.378"
          y1="72.15"
          y2="46.898"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8257E5"></stop>
          <stop offset="1" stopColor="#FF8DCD" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint5_linear_2345_458"
          x1="32.746"
          x2="62.422"
          y1="20.586"
          y2="38.494"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF008E" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#FADAFF"></stop>
        </linearGradient>
        <linearGradient
          id="paint6_linear_2345_458"
          x1="77.328"
          x2="47.653"
          y1="65.278"
          y2="47.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF008E" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#FFCD1E"></stop>
        </linearGradient>
        <linearGradient
          id="paint7_linear_2345_458"
          x1="62.468"
          x2="77.264"
          y1="54.976"
          y2="29.725"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8257E5"></stop>
          <stop offset="1" stopColor="#FF008E" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint8_linear_2345_458"
          x1="47.607"
          x2="62.404"
          y1="47.999"
          y2="73.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8257E5"></stop>
          <stop offset="1" stopColor="#FF008E" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint9_linear_2345_458"
          x1="21.301"
          x2="71.949"
          y1="60.721"
          y2="32.719"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF008E" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#FADAFF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CustomerDgIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="88"
      height="88"
      fill="none"
      viewBox="0 0 90 87"
    >
      <path
        fill="#343344"
        d="M68.244 67.853a17 17 0 008.529-14.738V33.305a17 17 0 00-8.53-14.74L53.09 9.857a17 17 0 00-16.942 0l-15.156 8.71a17 17 0 00-8.529 14.74v19.809a17 17 0 008.529 14.738l15.155 8.711a17 17 0 0016.943 0l15.155-8.71z"
      ></path>
      <path
        fill="#7453F8"
        d="M38.657 74.051a12 12 0 0012 0l17.65-10.189a12 12 0 006-10.393l-.003-20.47a12 12 0 00-5.999-10.391L50.58 12.37a12 12 0 00-12.001 0L20.929 22.56a12 12 0 00-6 10.393l.002 20.47a12 12 0 005.999 10.392L38.657 74.05z"
      ></path>
      <g style={{ mixBlendMode: "luminosity" }} opacity="0.4">
        <path
          fill="url(#paint0_linear_0_1)"
          d="M14.885 43.208v10.17a12 12 0 006.013 10.4l8.848 5.094 14.86-8.555v-17.11l-14.86-8.554-14.86 8.555z"
        ></path>
        <path
          fill="url(#paint1_linear_0_1)"
          d="M14.885 26.098v17.11l14.86 8.555 14.862-8.556V26.098l-14.861-8.555-14.86 8.555z"
        ></path>
        <path
          fill="url(#paint2_linear_0_1)"
          d="M14.89 43.272v10.171a12 12 0 006.012 10.4l8.848 5.093 14.86-8.555V43.272l-14.86-8.555-14.86 8.555z"
        ></path>
        <path
          fill="url(#paint3_linear_0_1)"
          d="M44.314 43.272v17.11l14.861 8.554 8.848-5.093a12 12 0 006.013-10.4v-10.17l-14.86-8.556-14.862 8.555z"
        ></path>
        <path
          fill="url(#paint4_linear_0_1)"
          d="M59.468 17.548v17.109l-14.861 8.555-14.86-8.555v-17.11l8.873-5.108a12 12 0 0111.974 0l8.874 5.109z"
        ></path>
        <path
          fill="url(#paint5_linear_0_1)"
          d="M44.607 60.317v-17.11l14.86-8.555 14.861 8.556-.354 1.732a41.555 41.555 0 01-14.506 23.932l-14.861-8.555z"
        ></path>
        <path
          fill="url(#paint6_linear_0_1)"
          d="M74.328 26.098v17.11l-14.86 8.555-14.861-8.556V26.098l14.86-8.555 14.861 8.555z"
        ></path>
        <path
          fill="url(#paint7_linear_0_1)"
          d="M59.468 68.876V51.767l-14.861-8.555-14.86 8.555v17.11l14.86 8.555 14.86-8.556z"
        ></path>
      </g>
      <path
        fill="#9AA4BD"
        d="M52.854 41.136h-4.14c.108.604.15 1.18.15 1.864 0 1.659-.427 2.94-1.284 3.846-.856.907-2.053 1.358-3.59 1.358h-1.925v-10.46h1.925c.356 0 .697 0 1.016.05v-3.769a11.168 11.168 0 00-.753-.025H38v14.24h4.087V52h2.166c1.743 0 3.27-.376 4.586-1.128a7.613 7.613 0 003.067-3.18C52.636 46.324 53 44.762 53 43c0-.65-.049-1.27-.146-1.864z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_0_1"
          x1="29.746"
          x2="14.949"
          y1="68.085"
          y2="42.834"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8257E5"></stop>
          <stop offset="1" stopColor="#FF008E" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_1"
          x1="29.746"
          x2="14.949"
          y1="50.976"
          y2="25.725"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8257E5"></stop>
          <stop offset="1" stopColor="#FF8DCD" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_0_1"
          x1="29.75"
          x2="14.953"
          y1="68.15"
          y2="42.898"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8257E5"></stop>
          <stop offset="1" stopColor="#FF8DCD" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_0_1"
          x1="59.175"
          x2="44.378"
          y1="68.15"
          y2="42.898"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8257E5"></stop>
          <stop offset="1" stopColor="#FF8DCD" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear_0_1"
          x1="29.746"
          x2="59.422"
          y1="16.586"
          y2="34.494"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF008E" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#FADAFF"></stop>
        </linearGradient>
        <linearGradient
          id="paint5_linear_0_1"
          x1="74.328"
          x2="44.653"
          y1="61.278"
          y2="43.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF008E" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#FFCD1E"></stop>
        </linearGradient>
        <linearGradient
          id="paint6_linear_0_1"
          x1="59.468"
          x2="74.264"
          y1="50.976"
          y2="25.725"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8257E5"></stop>
          <stop offset="1" stopColor="#FF008E" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint7_linear_0_1"
          x1="44.607"
          x2="59.404"
          y1="43.999"
          y2="69.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8257E5"></stop>
          <stop offset="1" stopColor="#FF008E" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function TaskDgIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="90"
      height="86"
      fill="none"
      viewBox="0 0 90 86"
    >
      <path
        stroke="#343344"
        strokeWidth="1.4"
        d="M76.233 30.656V54.69a11.3 11.3 0 01-5.85 9.9l-20.5 11.284a11.3 11.3 0 01-10.9 0l-20.5-11.285a11.3 11.3 0 01-5.85-9.899V30.656a11.3 11.3 0 015.851-9.9l20.5-11.284a11.3 11.3 0 0110.898 0l20.5 11.284a11.3 11.3 0 015.851 9.9z"
      ></path>
      <path
        stroke="#7453F8"
        strokeWidth="1.4"
        d="M67.89 62.93L50.24 73.119a11.3 11.3 0 01-11.3 0L21.213 62.882a11.3 11.3 0 01-5.65-9.785v-20.47a11.3 11.3 0 015.65-9.787L38.86 12.65a11.3 11.3 0 0111.3.001l17.727 10.237a11.3 11.3 0 015.65 9.784l.001 20.47a11.3 11.3 0 01-5.65 9.788z"
      ></path>
      <path
        stroke="#7453F8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M49 31.674h5a1 1 0 011 1v21a1 1 0 01-1 1H36a1 1 0 01-1-1v-21a1 1 0 011-1h5"
      ></path>
      <path
        stroke="#7453F8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M40 35.674v-1a5 5 0 0110 0v1H40z"
      ></path>
    </svg>
  );
}
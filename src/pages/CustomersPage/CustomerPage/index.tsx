import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import ContactFooter from '../../../components/ContactFooter'

import { formatValue } from 'react-currency-input-field'

//icons
import { BiCheckCircle } from 'react-icons/bi'
import { GoSync as SyncIcon } from 'react-icons/go'

import { colors } from '../../../styles/Colors'
import { StyledText } from '../../../styles/Texts'

//Components
import NavBar from '../../../components/NavBar'
import PoweredContainer from '../../../components/PoweredContainer'

import Loader from '../../../components/Loader'
import MoreOrLessIndicator from '../../../components/MoreOrLessIndicator'
import RankingStars from '../../../components/RankingStars'
import {
  AdsIcon,
  Container,
  Content,
  CustomerDataBox,
  CustomerHeader,
  CustomerName,
  CustomerPageDivider,
  DriveIcon,
  MetaIcon
} from './styles'

import { CustomerDgIcon, EditIcon } from '../../../assets/Icons'
import CustomerStepBar from '../../../components/CustomerStepBar'
import FlagBox from '../../../components/FlagBox'
import Funnel from '../../../components/Nivo/Funnel'
import api from '../../../utils/api'
import { CustomerDataTypes } from '../../../utils/dataTypes'
import { EditIconContainer } from '../../UserPage/styles'
import { CustomerMarketingData as marketingData } from './CustomerMarketingData'

const CustomerPage: React.FC = () => {
  const [isLoading, setLoading] = useState(false)
  const [customerData, setData] = useState<CustomerDataTypes[]>([])

  const { customerId } = useParams()

  const apiRoute: string = `customers/${customerId}`
  const customerEditPage: string = `/customer/edit/${customerId}`

  useEffect(() => {
    api.get(apiRoute).then((response) => {
      setData(response.data)
    })
    setLoading(true)
  }, [])

  const feeValue = formatValue({
    value: customerData.map((item) => item.fee).toString(),
    groupSeparator: '.',
    decimalSeparator: ',',
    prefix: 'R$ ',
  })

  return (
    <Container>
      <NavBar />
      <Content>
        {customerData.map((customer) =>
          isLoading ? (
            <div key={customer.id}>
              <CustomerPageDivider key={customer.id}>
                <div className="UserLabel"></div>
              </CustomerPageDivider>
              {/* <ClosedBox /> */}
              <CustomerHeader>
                <div className="LogoBox">
                  <CustomerDgIcon />
                </div>
                <div className="CustomerInfo">
                  <CustomerName>
                    <StyledText text={customer.name} accent bold size="xl" />
                    <BiCheckCircle size={24} color={colors.actionColor} />
                  </CustomerName>
                  <StyledText text="Ativo desde 24/12/2022" size="xs" />
                </div>
                <div className="RightBox">
                  <div className="infoLabel" id="contrato">
                    <StyledText text="Contrato" size="xs" bold />
                    <StyledText text={customer.deal} size="base" bold accent />
                  </div>
                  <div className="infoLabel" id="FeeMes">
                    <StyledText text="Fee" size="xs" bold />
                    <StyledText text={`${feeValue}`} size="base" bold accent />
                  </div>
                  <div className="infoLabel" id="TicketMedio">
                    <StyledText text="Ticket m." size="xs" bold />
                    <StyledText
                      text={`R$${customer.ticket}`}
                      size="base"
                      bold
                      accent
                    />
                  </div>
                  <div className="infoLabel" id="Margem">
                    <StyledText text="Mc" size="xs" bold />
                    <StyledText
                      text={`${customer.margin}%`}
                      size="base"
                      bold
                      accent
                    />
                  </div>
                  <div className="EditButton">
                    <Link to={customerEditPage}>
                      <EditIconContainer>
                        <EditIcon color={colors.actionColor} />
                      </EditIconContainer>
                    </Link>
                  </div>
                  <div className="RankingButtom">
                    <RankingStars
                      rate={customer.rating}
                      rateowner={customer.id}
                    />
                  </div>
                  <FlagBox flagcolor={customer.flag} flagowner={customer.id} />
                </div>
              </CustomerHeader>
              <CustomerDataBox>
                <div className="DataBox">
                  <div className="DataHeader">
                    <StyledText text="Dados" size="sm" bold accent />
                    <div className="DataRefreshBox">
                      <StyledText text="Atualizado em 20/08/2022" size="xs" />
                      <SyncIcon size={18} color={colors.actionColor} />
                    </div>
                  </div>
                  <div className="DataLine">
                    {marketingData.map((item) => (
                      <div key={item.id} className="DataField">
                        <div className="Data_infoSide">
                          <StyledText text={item.data_label} size="xs" bold />
                          <StyledText
                            text={item.data_value}
                            size="base"
                            bold
                            accent
                          />
                        </div>
                        <div className="Data_IndicatorSide">
                          <MoreOrLessIndicator
                            value={item.indicator.value}
                            refColor={item.indicator.effect}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="DescriptionBox">
                  <Funnel />
                </div>
                <div className="ButtonContainer">
                  <div className="ButtonBox">
                    <DriveIcon />
                  </div>
                  <div className="ButtonBox">
                    <AdsIcon />
                  </div>
                  <div className="ButtonBox">
                    <MetaIcon />
                  </div>
                </div>
              </CustomerDataBox>
              <CustomerStepBar />
              <ContactFooter pageReference={'dgplayer'} />
            </div>
          ) : (
            <Loader />
          )
        )}
      </Content>
      <PoweredContainer />
    </Container>
  )
}

export default CustomerPage

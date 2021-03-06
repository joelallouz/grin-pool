
import { connect } from 'react-redux'
import { MinerPaymentComponent } from '../../containers/MinerPayment/MinerPayment.js'
import {
  fetchMinerPaymentTxSlate,
  getLatestMinerPayments,
  setPaymentMethodSetting,
  fetchMinerPaymentScript
} from '../actions/minerDataActions.js'

const mapStateToProps = (state) => ({
  isPaymentSettingProcessing: state.minerData.isPaymentSettingProcessing,
  isTxSlateLoading: state.minerData.isTxSlateLoading,
  paymentFormFeedback: state.minerData.paymentFormFeedback,
  minerPaymentTxSlate: state.minerData.minerPaymentTxSlate,
  paymentMethod: state.minerData.paymentData.method,
  payoutScript: state.minerData.payoutScript,
  lastestBlockHeight: state.networkData.latestBlock.height

})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMinerPaymentTxSlate: () => dispatch(fetchMinerPaymentTxSlate()),
    getLatestMinerPayments: () => dispatch(getLatestMinerPayments()),
    setPaymentMethodSetting: (formState: any) => dispatch(setPaymentMethodSetting(formState)),
    fetchMinerPayoutScript: () => dispatch(fetchMinerPaymentScript()),
    clearPaymentFormFeedback: () => dispatch({ type: 'PAYMENT_FORM_FEEDBACK', data: null })
  }
}

export const MinerPaymentConnector = connect(mapStateToProps, mapDispatchToProps)(MinerPaymentComponent)

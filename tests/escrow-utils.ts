import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  MetaEvidence,
  Payment,
  HasToPayFee,
  Evidence,
  Dispute,
  Ruling
} from "../generated/Escrow/Escrow"

export function createMetaEvidenceEvent(
  _metaEvidenceID: BigInt,
  _evidence: string
): MetaEvidence {
  let metaEvidenceEvent = changetype<MetaEvidence>(newMockEvent())

  metaEvidenceEvent.parameters = new Array()

  metaEvidenceEvent.parameters.push(
    new ethereum.EventParam(
      "_metaEvidenceID",
      ethereum.Value.fromUnsignedBigInt(_metaEvidenceID)
    )
  )
  metaEvidenceEvent.parameters.push(
    new ethereum.EventParam("_evidence", ethereum.Value.fromString(_evidence))
  )

  return metaEvidenceEvent
}

export function createPaymentEvent(
  _transactionID: BigInt,
  _amount: BigInt,
  _party: Address
): Payment {
  let paymentEvent = changetype<Payment>(newMockEvent())

  paymentEvent.parameters = new Array()

  paymentEvent.parameters.push(
    new ethereum.EventParam(
      "_transactionID",
      ethereum.Value.fromUnsignedBigInt(_transactionID)
    )
  )
  paymentEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  paymentEvent.parameters.push(
    new ethereum.EventParam("_party", ethereum.Value.fromAddress(_party))
  )

  return paymentEvent
}

export function createHasToPayFeeEvent(
  _transactionID: BigInt,
  _party: i32
): HasToPayFee {
  let hasToPayFeeEvent = changetype<HasToPayFee>(newMockEvent())

  hasToPayFeeEvent.parameters = new Array()

  hasToPayFeeEvent.parameters.push(
    new ethereum.EventParam(
      "_transactionID",
      ethereum.Value.fromUnsignedBigInt(_transactionID)
    )
  )
  hasToPayFeeEvent.parameters.push(
    new ethereum.EventParam(
      "_party",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_party))
    )
  )

  return hasToPayFeeEvent
}

export function createEvidenceEvent(
  _arbitrator: Address,
  _evidenceGroupID: BigInt,
  _party: Address,
  _evidence: string
): Evidence {
  let evidenceEvent = changetype<Evidence>(newMockEvent())

  evidenceEvent.parameters = new Array()

  evidenceEvent.parameters.push(
    new ethereum.EventParam(
      "_arbitrator",
      ethereum.Value.fromAddress(_arbitrator)
    )
  )
  evidenceEvent.parameters.push(
    new ethereum.EventParam(
      "_evidenceGroupID",
      ethereum.Value.fromUnsignedBigInt(_evidenceGroupID)
    )
  )
  evidenceEvent.parameters.push(
    new ethereum.EventParam("_party", ethereum.Value.fromAddress(_party))
  )
  evidenceEvent.parameters.push(
    new ethereum.EventParam("_evidence", ethereum.Value.fromString(_evidence))
  )

  return evidenceEvent
}

export function createDisputeEvent(
  _arbitrator: Address,
  _disputeID: BigInt,
  _metaEvidenceID: BigInt,
  _evidenceGroupID: BigInt
): Dispute {
  let disputeEvent = changetype<Dispute>(newMockEvent())

  disputeEvent.parameters = new Array()

  disputeEvent.parameters.push(
    new ethereum.EventParam(
      "_arbitrator",
      ethereum.Value.fromAddress(_arbitrator)
    )
  )
  disputeEvent.parameters.push(
    new ethereum.EventParam(
      "_disputeID",
      ethereum.Value.fromUnsignedBigInt(_disputeID)
    )
  )
  disputeEvent.parameters.push(
    new ethereum.EventParam(
      "_metaEvidenceID",
      ethereum.Value.fromUnsignedBigInt(_metaEvidenceID)
    )
  )
  disputeEvent.parameters.push(
    new ethereum.EventParam(
      "_evidenceGroupID",
      ethereum.Value.fromUnsignedBigInt(_evidenceGroupID)
    )
  )

  return disputeEvent
}

export function createRulingEvent(
  _arbitrator: Address,
  _disputeID: BigInt,
  _ruling: BigInt
): Ruling {
  let rulingEvent = changetype<Ruling>(newMockEvent())

  rulingEvent.parameters = new Array()

  rulingEvent.parameters.push(
    new ethereum.EventParam(
      "_arbitrator",
      ethereum.Value.fromAddress(_arbitrator)
    )
  )
  rulingEvent.parameters.push(
    new ethereum.EventParam(
      "_disputeID",
      ethereum.Value.fromUnsignedBigInt(_disputeID)
    )
  )
  rulingEvent.parameters.push(
    new ethereum.EventParam(
      "_ruling",
      ethereum.Value.fromUnsignedBigInt(_ruling)
    )
  )

  return rulingEvent
}

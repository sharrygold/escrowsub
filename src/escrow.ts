import {
  MetaEvidence as MetaEvidenceEvent,
  Payment as PaymentEvent,
  HasToPayFee as HasToPayFeeEvent,
  Evidence as EvidenceEvent,
  Dispute as DisputeEvent,
  Ruling as RulingEvent
} from "../generated/Escrow/Escrow"
import {
  MetaEvidence,
  Payment,
  HasToPayFee,
  Evidence,
  Dispute,
  Ruling
} from "../generated/schema"

export function handleMetaEvidence(event: MetaEvidenceEvent): void {
  let entity = new MetaEvidence(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._metaEvidenceID = event.params._metaEvidenceID
  entity._evidence = event.params._evidence

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePayment(event: PaymentEvent): void {
  let entity = new Payment(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._transactionID = event.params._transactionID
  entity._amount = event.params._amount
  entity._party = event.params._party

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleHasToPayFee(event: HasToPayFeeEvent): void {
  let entity = new HasToPayFee(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._transactionID = event.params._transactionID
  entity._party = event.params._party

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEvidence(event: EvidenceEvent): void {
  let entity = new Evidence(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._arbitrator = event.params._arbitrator
  entity._evidenceGroupID = event.params._evidenceGroupID
  entity._party = event.params._party
  entity._evidence = event.params._evidence

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDispute(event: DisputeEvent): void {
  let entity = new Dispute(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._arbitrator = event.params._arbitrator
  entity._disputeID = event.params._disputeID
  entity._metaEvidenceID = event.params._metaEvidenceID
  entity._evidenceGroupID = event.params._evidenceGroupID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRuling(event: RulingEvent): void {
  let entity = new Ruling(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._arbitrator = event.params._arbitrator
  entity._disputeID = event.params._disputeID
  entity._ruling = event.params._ruling

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export type CarbonCredit = {
    id: string;
    vintage: string;
    projectId: string;
    quantity: number;
    status: string;
    issuanceDate: string;
    retirementDate: string;
    serialNumber: string;
    usingEntity: string;
    certifier: string;
}

export enum CarbonCreditStatus {
    Issued = "Issued",
    Retired = "Retired",
    Confirmed = "Confirmed"
}
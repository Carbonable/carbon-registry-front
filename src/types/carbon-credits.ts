export type CarbonCredit = {
    id: string;
    vintage: string;
    projectId: string;
    quantity: number;
    status: string;
    issuanceDate: string;
    expirationDate: string;
    serialNumber: string;
    usingEntity: string;
}

export enum CarbonCreditStatus {
    Issued = "Issued",
    Retired = "Retired",
    Confirmed = "Confirmed"
}
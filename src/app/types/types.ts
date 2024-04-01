export type onboardingPlanRequest = {
    onboardingSubject: string,
    onboardingDate: string,
    notifyCandidates: boolean,
    emailTemplateId: number,
    emailSubjectName: string,
    jobOfferId: number,
    candidatesIds: number[]
};
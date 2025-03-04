type RealisticDates = {
  application: {
    withdrawnAt: Date;
  };
  submission: {
    submittedAt: Date;
  };
  validation: {
    receivedAt: Date;
    validatedAt: Date;
  };
  publishedAt: Date;
  consultation: {
    startAt: Date;
    endAt: Date;
  };
  assessment: {
    planningOfficerDecisionAt: Date;
    committeeSentAt: Date;
    committeeDecisionAt: Date;
  };
  appeal: {
    lodgedAt: Date;
    validatedAt: Date;
    startedAt: Date;
    decidedAt: Date;
    withdrawnAt: Date;
  };
};

/**
 * Helper to generate sensible dates for events to happen in the application process
 */
export const generateRealisticDates = (
  dateString = '2024-02-18T15:54:30.821Z',
): RealisticDates => {
  // Helper functions to add time to a date
  const addMilliseconds = (date: Date, milliseconds: number): Date => {
    return new Date(date.getTime() + milliseconds);
  };

  const addDays = (date: Date, days: number): Date => {
    return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  };

  const addMonths = (date: Date, months: number): Date => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + months);
    return newDate;
  };

  // an application is submitted and some point in the last 10 years
  const submittedAt = new Date(dateString);

  // application received by back office system a few ms later because maybe theres latency
  const receivedAt = addMilliseconds(submittedAt, 200);

  // application validated in back office system the next day
  const validatedAt = addDays(receivedAt, 1);

  // when its validated the reviewer sets it to be published (not always at this stage but it will be for these examples)
  const publishedAt = addMilliseconds(validatedAt, 200);

  // consultation (depending on application type) starts once it's valid and lasts 21 days (theres more nuance around business days etc but this is accurate enough)
  // startDate - as soon as validated
  const consultationStartAt = validatedAt;
  const consultationEndAt = addDays(consultationStartAt, 21);

  // the council decision is made sometime after the consultation ends
  const planningOfficerDecisionAt = addDays(consultationEndAt, 10);

  // if it's sent to committee it's sent after the council recommendation is made
  const committeeSentAt = addDays(planningOfficerDecisionAt, 1);

  // after it's sent to the committee the decision is made after that date
  const committeeDecisionAt = addDays(committeeSentAt, 10);

  // an appeal can be lodged within 6 months of determination being made
  // lodgedDate
  const appealLodgedAt = addMonths(committeeDecisionAt, 1);

  // appeal is validated
  const appealValidatedAt = addDays(appealLodgedAt, 1);

  // appeal starts soon after
  const appealStartedAt = addMilliseconds(appealValidatedAt, 200);

  // appeal decided
  const appealDecidedAt = addDays(appealStartedAt, 5);

  // application can be withdrawn any time between consultationStartAt and planningOfficerDecisionAt
  const withdrawnAt = addDays(consultationStartAt, 1);

  // appeal is withdrawn any time between appealLodgedAt and appealDecidedAt
  const appealWithdrawnAt = addDays(appealLodgedAt, 1);

  const dates: RealisticDates = {
    application: {
      withdrawnAt: withdrawnAt,
    },
    submission: {
      submittedAt: submittedAt,
    },
    validation: {
      receivedAt: receivedAt,
      validatedAt: validatedAt,
    },
    publishedAt: publishedAt,
    consultation: {
      startAt: consultationStartAt,
      endAt: consultationEndAt,
    },
    assessment: {
      planningOfficerDecisionAt: planningOfficerDecisionAt,
      committeeSentAt: committeeSentAt,
      committeeDecisionAt: committeeDecisionAt,
    },
    appeal: {
      lodgedAt: appealLodgedAt,
      validatedAt: appealValidatedAt,
      startedAt: appealStartedAt,
      decidedAt: appealDecidedAt,
      withdrawnAt: appealWithdrawnAt,
    },
  };
  return dates;
};

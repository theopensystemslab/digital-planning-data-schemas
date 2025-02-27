# Post Submission Application Schema

The Post Submission Application schema is designed to represent an application, post-submission, within an application.

Future iterations will create redacted versions of this, and the `PrototypeApplication` schema, which will act as a 'published' schema for applications such as the [DPR](https://planningregister.org/).

## The Application Process

```mermaid
flowchart TD

%% stages

submission[SUBMISSION]:::stage
validation[VALIDATION]:::stage
consultation[CONSULTATION]:::stageOptional
assessment[ASSESSMENT]:::stage
appeal[APPEAL]:::stageOptional
highCourtAppeal[HIGH COURT APPEAL]:::stageOptional


%% status

returned:::status
withdrawn:::status
determined:::status
undetermined:::status



%% flow

submission --> validation
validation --> consultation
consultation --> assessment
assessment -.-> appeal
appeal -.-> highCourtAppeal


%% status flow

validation --> |INVALID|returned

assessment --> determined
appeal --> determined
highCourtAppeal --> determined

consultation --> withdrawn
assessment --> |before determination made|withdrawn



classDef stage fill:#655356,color:#FFF,stroke-width:0px,font-weight:bold;
classDef stageOptional fill:#F2D1C9,color:#655356,stroke-width:0px,font-weight:bold;
classDef status fill:#52489C,color:#FFF,stroke-width:0px,font-weight:bold;
classDef check fill:#BAD1CD,color:#655356,stroke-width:0px;

```

There are a lot of different ways to define the application process, there is the process for the applicant, the agent and the backend processes in BOPs. The DPR is also displaying the information in a specific way as well. I wanted to try and come up with a process that was flexible, future proof and easy to read and discern information from.

A strict rigid structure wasn't going to work too well since there are so many "if this then thats" so this is what I have come up with.

### Stages

All applications go through these stages and they pick up various contextual pieces of information along their way

```mermaid

flowchart TD

  %% stages

  submission[SUBMISSION]:::stage
  validation[VALIDATION]:::stage
  consultation[CONSULTATION]:::stageOptional
  assessment[ASSESSMENT]:::stage
  appeal[APPEAL]:::stageOptional
  highCourtAppeal[HIGH COURT APPEAL]:::stageOptional

  %% flow

  submission --> validation
  validation --> consultation
  consultation --> assessment
  assessment -.-> appeal
  appeal -.-> highCourtAppeal



  classDef stage fill:#655356,color:#FFF,stroke-width:0px,font-weight:bold;
  classDef stageOptional fill:#F2D1C9,color:#655356,stroke-width:0px,font-weight:bold;

```

Submission, Validation and Assessment are all required stages. Whereas consultation, appeal and high court appeal are optional, dependant on other conditions.

**The stage an application is in does not determine its status.**

### Status

```mermaid
flowchart TD

%% status

returned:::status
withdrawn:::status
determined:::status
undetermined:::status

classDef status fill:#52489C,color:#FFF,stroke-width:0px,font-weight:bold;
```

Each status reflects a higher level state which an application can be in. (This field could also be called state I guess)

- An application is **returned** if it is marked as invalid.
- An application can be **withdrawn** after submission and until a decision is made ie it is **determined**
- An application is **determined** if _any_ decision has been made about it, this could be assessment, appeal or high court appeal decisions
- An application is set to **undetermined** at all other times

I wanted to avoid being too prescriptive in the status's. There are so many variations that this felt more straight forward. From each of these status' you should be able to quickly determine the rest of the information you need about an application, eg was it an appeal or a council decision that was made.

### How we all fit in

```mermaid
flowchart TD

    subgraph PlanX
    submission
    end
    subgraph BOPS
    validation
        subgraph DPR
           consultation
           assessment
           appeal
           highCourtAppeal
        end
    end



%% stages

submission[SUBMISSION]:::stage
validation[VALIDATION]:::stage
consultation[CONSULTATION]:::stageOptional
assessment[ASSESSMENT]:::stage
appeal[APPEAL]:::stageOptional
highCourtAppeal[HIGH COURT APPEAL]:::stageOptional


%% status

returned:::status
withdrawn:::status
determined:::status
undetermined:::status



%% flow

submission --> validation
validation --> consultation
consultation --> assessment
assessment -.-> appeal
appeal -.-> highCourtAppeal


%% status flow

validation --> |INVALID|returned

assessment --> determined
appeal --> determined
highCourtAppeal --> determined

consultation --> withdrawn
assessment --> |before determination made|withdrawn



classDef stage fill:#655356,color:#FFF,stroke-width:0px,font-weight:bold;
classDef stageOptional fill:#F2D1C9,color:#655356,stroke-width:0px,font-weight:bold;
classDef status fill:#52489C,color:#FFF,stroke-width:0px,font-weight:bold;
classDef check fill:#BAD1CD,color:#655356,stroke-width:0px;
```

## The structure

```ts
interface ApplicationSpecification<
  TPrimary extends PrimaryApplicationType,
  TGranular extends ApplicationType,
> {
  applicationType: TGranular;
  data: {
    application: Application<TPrimary>;
    localPlanningAuthority: LocalPlanningAuthority<TPrimary>;
    submission: Submission<TPrimary>;
    validation: Validation<TPrimary>;
    consultation?: Consultation<TPrimary>;
    assessment?: Assessment<TPrimary>;
    appeal?: Appeal<TPrimary>;
    caseOfficer: CaseOfficer<TPrimary>;
  };
  comments?: {
    public?: PublicComments;
    specialist?: SpecialistComments;
  };
  submission: PrototypeApplication;
  metadata: PostSubmissionMetadata;
}
```

### data.Application

This is where I have added the reference number for an application.

It also shows the stage and status.

### data.localPlanningAuthority

This section includes things about the application that are unique to that LPA. See comments below for more information on this.

### data.submission

This contains `submittedAt` - this is the date which the application was submitted, either through PlanX or for example the date written on the envelope if it was posted.

### data.validation

`receivedAt` is the date that the application is received by the back office system. It may not be the date it was sent, if there have been delays in the submission process.

`validatedAt` is the date `isValid` was set, its presence doesn't mean that the application was valid

This includes a flag for `isValid`, which can be used alongside status to find out when an application was set to `returned`.

### data.consultation?

This includes the beginnings of the sitenotice work for the DSN (currently a boolean).

The `startDate` and `endDate` of the consultation period.

Currently there is nothing in here about expiryDate or extensions to the consultation period.

During the consultation period an application can recieve comments.

Not all application types have consultation periods - this is something that will need doing.

### data.assessment?

Assessment is when the council and optionally a committee make a decision. `councilDecision`, `committeeSentDate` and `committeeDecision`

If an application is Prior Approval it also has `priorApprovalRequired` since they can be 'Prior approval required and approved', 'Prior approval not required', 'Prior approval required and refused'

Until there is a decision in this section an application is `undetermined`

### data.appeal?

Appeal's are lodged, started, validated then decided.

While an appeal decision is being made an application is still set to `determined`.

### data.caseOfficer

This is the officer assigned to the application throughout the process.

### Comments

We've also proposed the beginning of a structure for comments in this section, See comments below for more information on this.

### metadata.publishedAt

I haven't included 'published' as a stage because an application can be published at any time, its also not a status its something else. I have added publishedAt into the metadata to match other metadata submittedAt.

### Submission

Rather than repeat the same data for the Post Submission version, I've attached the original submission to this schema, which will have a redacted version at a later date. This makes it so that only additional data, post submission, gets added to this schema. For example Case Officer.

## Comments

Comments can be submitted during the consultation period, which can bet determiend by looking in the `data.consultation.startDate` and `data.consultation.endDate` fields.

Not all applications have a consultation period, however some LPA's accept comments until a decision is made. I have added the `data.localPlanningAuthority.commentsAcceptedUntilDecision` flag so that each LPA can set this and this flag will allow the DPR to determine whether or not comments can be sent - without complicating the application process

## Technical Notes on the Implementation

I have purposely not modified anything in `PrototypeApplication` and have chosen to reference things in their folders rather than move them to `shared/` - this was mostly to make the PR process a little easier and to avoid tricky rebases as this schema is still very much in draft form!

## Appendix

One more diagram! [flow.png](flow.png)

![flow.png](flow.png)

### Current valid application types for Post Submission Schema:

- ldc (Lawful Development Certificate)
  - doesn't have a consultation period
  - Camden allow comments through localPlanningAuthority.commentsAcceptedUntilDecision
- pa (Prior Approval)
  - has an additional field in assessment to generate an alternate decision
- pp
- listed
- landDrainageConsent

### Test cases in the examples

#### 01 Application submitted

When an application is submitted this how it would be represented in the post-submission schema

#### 02 Application validated

Technically this stage shouldn't exist as an application should pass straight to its consultation/assessment state (depending on application type)

#### 02.01 Application returned / Application invalid

If it fails validation the application is set to returned

#### 03 Consultation in progress

Applications goes into consultation (depending on application type)
Applications that are valid move immediately into consultation or assessment depending on whether the application type has a consultation period

#### 04 Assessment in progress

Application goes into assessment
Comments are no longer allowed unless the LPA allows it and a decision is made

#### 04 01 Council determined / Determined

Council decision is made
This is mostly where applications will be 'done'
This is what the application will look like when the council has made a decision and the applicaton is determined, comments will no longer be accepted.
Prior approval applications also have priorApprovalRequired flag which help determine the 'Prior approval required and approved', 'Prior approval not required', 'Prior approval required and refused' status

#### 04 02 Application in committee / Assessment in progress

Alternatively application goes to committee for determination
It goes with a recommendation for a decision from the council but this is different to the council decision.

#### 04 03 Committee determined / Determined

The committee then makes a decision

#### 05 Appeal lodged

An appeal is made

Things can end before this but within 6 months of the determination a decision can be appealed

#### 05 01 Appeal validated

After the appeal starts its validated

#### 05 02 Appeal started

Then it starts

#### 05 03 Appeal determined

appeal is determined

#### 05 04 Appeal withdrawn

At any point between appeal lodged and a decision an appeal can be withdrawn

#### 06 Application withdrawn

An application can be with drawn only after validation and before a decision is made

/* eslint-disable no-shadow */
interface iInsightsList {
  data:iInsight[];
}

interface iInsight {
  insight_type: eInsightType;
}

/** All types of insights available (attr: insight_type) */
enum eInsightType {
  welcome = 'welcome', // #1
  no_data = 'no_data',// #2
  nothing_new = 'nothing_new',// #3
  webinar = 'webinar',// #4
  action_plan_create = 'action_plan_create',// #5
  lowest_favorable_learning = 'lowest_favorable_learning',// #6
  lowest_favorable_learning_second = 'lowest_favorable_learning_second',// #19
  highest_favorable = 'highest_favorable',// #7
  lowest_favorable = 'lowest_favorable',// #8
  action_plan_followup = 'action_plan_followup',// #9
  response_rate = 'response_rate',// #10
  engagement_score = 'engagement_score',// #11
  humu_nudge = 'humu_nudge',// #11B
}

/** Maps types to components  ['insight_type']: 'ComponentName'  */
const cInsightType2Comp: { [key in eInsightType]: string } = {
  welcome: 'InType01Welcome',
  no_data: 'InType02NoData',
  nothing_new: 'InType03NothingNew',
  webinar: 'InType04Webinar',
  action_plan_create: 'InType05ActPlanCreate',
  lowest_favorable_learning: 'InType06RecomLearning',
  lowest_favorable_learning_second: 'InType06RecomLearning',
  highest_favorable: 'InType07Favorability',
  lowest_favorable: 'InType07Favorability',
  action_plan_followup: 'InType09ActPlanFallowUp',
  response_rate: 'InType10ResponseRate',
  engagement_score: 'InType11EngagementScore',
  humu_nudge: 'InType11HumuNudge'
}

export {
  cInsightType2Comp,
  iInsightsList,
  iInsight,
  eInsightType,
}

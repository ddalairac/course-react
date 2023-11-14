import { Component } from 'react';
import { cInsightType2Comp, iInsight } from '@/data/types/iInsight';
// import InType01Welcome from './types/InType01Welcome.vue';
// import InType02NoData from './types/InType02NoData.vue';
// import InType03NothingNew from './types/InType03NothingNew.vue';
// import InType04Webinar from './types/InType04Webinar.vue';
// import InType05ActPlanCreate from './types/InType05ActPlanCreate.vue';
// import InType06RecomLearning from './types/InType06RecomLearning.vue';
// import InType07Favorability from './types/InType07Favorability.vue';
// import InType09ActPlanFallowUp from './types/InType09ActPlanFallowUp.vue';
// import InType10ResponseRate from './types/InType10ResponseRate.vue';
// import InType11EngagementScore from './types/InType11EngagementScore.vue';
// import InType11HumuNudge from './types/InType11HumuNudge.vue';

interface iHomeViewProps {
  insight: iInsight;
}
interface iHomeViewState {}

export default class AInsightTypeItem extends Component<iHomeViewProps, iHomeViewState> {
  getComponent(): string {
    // Validated in validateList method, on TheInsights component class
    return cInsightType2Comp[this.props.insight.insight_type];
  }
  render() {
    return (
      <>
        <div className="insight-type-container">
          {/* <component :is="getComponent()" :data="insight" /> */}
        </div>
      </>
    );
  }
}

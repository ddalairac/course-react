import { Component } from 'react';
import './TheInsights.scss';
import { cInsightType2Comp, eInsightType, iInsight } from '@/data/types/iInsight';
import SL from '@/data/services/ServiceLocator';
import AInsightTypeItem from './AInsightTypeItem';
import InTypeNoMoreInsights from './types/InTypeNoMoreInsights.vue';

interface iProps {}
interface iState {
  isLoading:boolean;
insightsList: iInsight[];
carouselColumns: number;
}

export default class TheInsights extends Component<iProps, iState> {

  state = { 
    isLoading: true,
    insightsList: [],
    carouselColumns: 1,
  };

  translate(key: string): string {
    return SL.lang.translate(key);
  }

  // bind change Func ref & same ref is necesary to remove the listener
  bindSetItemsDisplay = this.setItemsDisplay.bind(this);

  mounted(): void {
    this.getInsightsList();
    this.setItemsDisplay();
    window.addEventListener('resize', this.bindSetItemsDisplay);
  }

  unmounted(): void {
    window.removeEventListener('resize', this.bindSetItemsDisplay);
  }

  

  async getInsightsList(): Promise<void> {
    const res = await SL.data.insights.getList();
    if (res.ok) {
      this.state.insightsList = this.validateList(res.data.data);
    }

    await SL.utils.devDelay(1500);
    this.state.isLoading = false;
  }

  /** The item must have the 'insight_type' attribute,
   * and it must have a component linked to it. */
  validateList(insightsList: iInsight[]): iInsight[] {
    const insightsValidList: iInsight[] = [];
    let msj = 'Attribute insight_type not found on item';

    insightsList.forEach((insight) => {
      let validInsight = null;
      const { insight_type } = insight;
      if (insight_type) {
        // The type exists in the types enum
        const isAValidType =
          Object.values<string>(eInsightType).includes(insight_type);

        // There is a component mapped to type
        const typeComponent = cInsightType2Comp[insight_type] || null;

        if (isAValidType && typeComponent) {
          validInsight = insight;
        } else {
          msj = 'Invalid insight_type';
        }
      }
      // Add to the list or warn that it isn't valid
      if (validInsight) {
        insightsValidList.push(validInsight);
      } else {
        console.warn(msj, insight);
      }
    });
    return insightsValidList || [];
  }

  /** Sets the amount of carousel visible items depending on the screen width */
  setItemsDisplay(): void {
    const docWidth = document.documentElement.clientWidth;
    if (docWidth >= 1400) this.state.carouselColumns = 4;
    else if (docWidth > 992 && docWidth < 1400) this.state.carouselColumns = 3;
    else if (docWidth > 768 && docWidth < 992) this.state.carouselColumns = 2;
    else this.state.carouselColumns = 1;
  }

  /** The last item fills the empty space, if any. */
  getItemClass(index: number): string {
    return this.state.insightsList.length < this.state.carouselColumns &&
      this.state.insightsList.length !== 1 &&
      index === this.state.insightsList.length - 1
      ? 'grow'
      : 'no-grow';
  }

  /** Track clicked carousel in mixpanel */
  onTrackCarouselChange(): void {
    // const props = {
    //   page_location: 'dashboard',
    //   page_name: 'Platform Home',
    //   action_type: 'carousel',
    //   action_text: 'change'
    // };
    // SL.mixpanel.track('carousel_clicked', props);
  }

  /** Show controls when there are more items than are visible on screen */
  get hasBtnsCtrl(): boolean {
    return this.state.insightsList.length > this.state.carouselColumns;
  }

  render() {

    const { isLoading, insightsList, carouselColumns } = this.state;
    return (
      <>
      <section className="insights-section">
    <h2 className="insights-title">
      { this.translate('insights.mainTitle') }
    </h2>
    {!isLoading 
     ? <div>
      
      {insightsList 
      ? insightsList.length > 0 && <div>
        <vds-carousel
          has-indicators-ctrl="false"
          has-btns-ctrl="`${hasBtnsCtrl ? 'true' : 'false'}`"
          items-display={carouselColumns}
          className={`${!this.hasBtnsCtrl ? 'no-controls' : ''}`}
          dinamic-height="false"
          >
          {/* @vds-carousel-change="onTrackCarouselChange" */}
          {/* Dinamic card components */}
          {insightsList.map((insight, index) => (
            // v-for="(insight, index) in insightsList"
          <vds-carousel-item
            key="index"
            className={this.getItemClass(index)}
          >
            <AInsightTypeItem insight={insight} />
          </vds-carousel-item>

          ))}
          {/* <!-- Static card (If only 1 result) --> */}
          <vds-carousel-item
            v-if="insightsList.length === 1"
            className="grow"
            style="width: 75%"
          >
            <InTypeNoMoreInsights />
          </vds-carousel-item>
        </vds-carousel>
      </div>
      : 
      // <!--  Static card (If  no result) -->
      <InTypeNoInsights/>
      }
    </div>
    : {/* <!-- Gral list Skeleton --> */}
    <TheInsightsSkeleton items-display={carouselColumns} />
    }
    

  </section>
      </>
    );
  }
}

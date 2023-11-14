import { Component } from 'react';
import ACard from '../../ACard';
import SL from '@/data/services/ServiceLocator';

interface iHomeViewProps {}
interface iHomeViewState {}

export default class HomeView extends Component<iHomeViewProps, iHomeViewState> {
  translate(key: string): string {
    return SL.lang.translate(key);
  }
  
  render() {
    return (
      <>
        <ACard
          className="no-more-insights"
          hover={false}
          main={
            <div>
              <i className="fa-light fa-books"></i>
              <h3>{this.translate('insights.noMoreInsightsTitle')}!</h3>
              <p className="small-text">{this.translate('insights.noMoreInsightsText')}.</p>
              <p>{this.translate('insights.noMoreInsightsText2')}</p>
            </div>
          }
        ></ACard>
      </>
    );
  }
}

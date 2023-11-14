import { Component } from 'react';
import ACard from '../ACard';

interface iCompProps {
  itemsDisplay: number;
}

// Component State Properties
interface iCompState {}
export default class TheInsightsSkeleton extends Component<iCompProps, iCompState> {
  render() {
    const { itemsDisplay } = this.props;
    return (
      <>
        <div className="the-insights-skeleton">
          <vds-carousel
            has-indicators-ctrl="false"
            has-btns-ctrl="false"
            className="no-controls"
            items-display={itemsDisplay}
          >
            {Array.from({ length: itemsDisplay }).map((_, index) => (
              <vds-carousel-item className="no-grow" key={index}>
                <ACard
                  hover={true}
                  header={
                    <div>
                      <vds-skeleton class="mb-1" style={{ width: '150px' }}></vds-skeleton>
                      <div className="dashed-line mt-3"></div>
                    </div>
                  }
                  main={
                    <div>
                      <vds-skeleton class="mb-4" style={{width: '50px'}} />
                      <vds-skeleton type="paragraph" class="mb-3 w-100" />
                      <vds-skeleton type="paragraph" class="mb-3 w-100" />
                    </div>
                  }
                  footer={<vds-skeleton type="button" />}
                ></ACard>
              </vds-carousel-item>
            ))}
          </vds-carousel>
        </div>
      </>
    );
  }
}

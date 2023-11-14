import { Component, ReactNode } from 'react';
import SL from '@/data/services/ServiceLocator';

// Component Input Properties
interface iCompProps {
  className:string;
  hover?: boolean;
  header?: ReactNode;
  main?: ReactNode;
  footer?: ReactNode;
}

// Component State Properties
interface iCompState {}

export default class ACard extends Component<iCompProps, iCompState> {
  get hasHeaderSlot(): boolean {
    return !!this.props.header;
  }

  get hasFooterSlot(): boolean {
    return !!this.props.footer;
  }

  onCardMouseenter(event: MouseEvent): void {
    if (this.props.hover) SL.utils.onCardMouseenter(event);
  }

  onCardMouseleave(event: MouseEvent): void {
    if (this.props.hover) SL.utils.onCardMouseleave(event);
  }

  render() {
    const { hover, header, main, footer } = this.props;
    return (
      <>
        <vds-card
          class="insight-card"
          header={header}
          hover={hover || true}
          onMouseenter={this.onCardMouseenter}
          onMouseleave={this.onCardMouseleave}
        >
          {this.hasHeaderSlot && <div slot="header">{header}</div>}
          {main}
          {this.hasFooterSlot && <div slot="footer">{footer}</div>}
        </vds-card>
      </>
    );
  }
}

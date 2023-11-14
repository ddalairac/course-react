import { Component } from 'react';
// import SessionComp from '@/components/examples/store/SessionComp';
// import ACard from '../ui/ACard';
import TheInsightsSkeleton from '../ui/insights/TheInsightsSkeleton';
// import './HomeView.scss';
// import SL from '@/data/services/ServiceLocator';

interface iHomeViewProps {}
interface iHomeViewState {}

export default class HomeView extends Component<iHomeViewProps, iHomeViewState> {
  render() {
    return (
      <>
        <h1>Home View</h1>
        {/* <SessionComp /> */}
        <TheInsightsSkeleton itemsDisplay={4} />
        {/* <ACard
          hover={true}
          header={<div>Este es el encabezado</div>}
          main={<div>Este es el contenido principal</div>}
          footer={<div>Este es el pie de página</div>}
        ></ACard> */}
      </>
    );
  }
}

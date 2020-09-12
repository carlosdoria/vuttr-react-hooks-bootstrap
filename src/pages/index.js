import Head from 'next/head';
import ToolsProvider from '../context/context';
import Header from '../components/Header/header';
import CardList from '../components/CardList/cardList';
import ToastSucess from '../components/ModalSucess/modalSucess';

export default function Home() {

  return (
    <ToolsProvider>
      <Header />
      <ToastSucess />
      <CardList />
    </ToolsProvider>
  )
}

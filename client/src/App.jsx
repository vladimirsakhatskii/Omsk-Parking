import SingUpForm from './components/SingUpForm/SingUpForm'
import Base from './components/Base'
import Header from './components/Header'
import Maps from './components/Maps/Maps'
import { useState } from 'react'


export default function App() {
  const [tab, setTab] = useState('base')

  return (
    <>
      {tab === 'base' && <>
        <Header active={tab} onChange={(currentTab) => setTab(currentTab)}/>
        <Base />
        <Maps />
      </>}
      {tab === 'singUp' && <SingUpForm />}
    </>
  );
}
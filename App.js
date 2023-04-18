import "./App.css";
import Greet from "./components/Greet";
import Compto from "./components/compto";
import Navbar from "./components/navbar";
import Head from "./components/heading";
import AppComp from "./components/classCompone";
import Hello from "./components/hello";
import StateExample from "./components/statemsg";
import StatePractice from "./components/stateprtc";
import Counter from "./components/counter";
import Stateprctwo from "./components/stateprctwo";
import Pmtmp from "./components/pmtmp";
import Clickevent from "./components/clickeventfnc";
import EventBin from "./components/eventBin";
import Clickeventcls from "./components/clickeventcls";
import BindEvents from "./components/bindEvents";
import ParentComp from "./components/parentComp";
import ConditionalRend from "./components/conditionalRend";
import ListRendering from "./components/listRendering";
import ListRendering2 from "./components/listRendering2";
import OfficWKeysEx from "./components/officWKeysEx";
import StylesheetOne from "./components/stylesheetOne";
import InlineStyleSheet from "./components/InlineStyleSheet";
import Form from "./components/form";
import LifeCycLEoNE from "./components/LifeCycLEoNE";
import FragmentOne from "./components/fragmentOne";
import Table from "./components/Table";
import PureComponentOne from "./components/pureComponent";
import ParentComponet from "./components/parentComponet";
import RefsDemo from "./components/refsDemo";
import ParentClassRef from "./components/ParentClassRef";
import FrwdRefParenInp from "./components/FrwdRefParenInp";
import PoralDemo from "./components/PoralDemo";
import Hero from "./components/hero";
import ErrorBoundary from "./components/errorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar>
      <Greet nameo="Atharv" favSport="Cricket">
        <p>These is childern of the first greet</p>
      </Greet>
      <Greet nameo="John" favSport="Football">
        <p>These is childern of the second greet</p>
      </Greet> */}
      {/* <Greet nameo="TimCook" favSport="BaseBall">
        <p>These is childern of the third greet</p>
      </Greet>
      <Compto></Compto>
      <Head></Head>
      <AppComp name="Boy" favSport="swwiming"></AppComp>
      <Hello></Hello>
      <StatePractice></StatePractice>
      <StateExample></StateExample>
      <Counter rollNum="3309"></Counter>
      <Stateprctwo></Stateprctwo>
      <Pmtmp></Pmtmp>
      <Clickevent></Clickevent>
      <Clickeventcls></Clickeventcls>
      <EventBin></EventBin> */}
      {/* <BindEvents></BindEvents>
      <ParentComp></ParentComp>
      <ConditionalRend></ConditionalRend>  */}
      {/* <ListRendering></ListRendering>
      <ListRendering2></ListRendering2>
      <OfficWKeysEx></OfficWKeysEx>
      <StylesheetOne primary={true}></StylesheetOne>
      <InlineStyleSheet></InlineStyleSheet> */}
      {/* <LifeCycLEoNE></LifeCycLEoNE>
      <Form></Form> */}
      {/* <FragmentOne></FragmentOne> */}
      {/* <Table></Table>
    <PureComponentOne></PureComponentOne>
    <ParentComponet></ParentComponet>
    <RefsDemo></RefsDemo>
    <ParentClassRef></ParentClassRef> */}
      {/* <FrwdRefParenInp></FrwdRefParenInp> */}
      {/* <PoralDemo></PoralDemo>
      <ErrorBoundary>
        <Hero hName="atharrv"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero hName="powalkar"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero hName="Joker"></Hero>
      </ErrorBoundary> */}
      <ClickCounter name="Atharv"></ClickCounter>
      <HoverCounter></HoverCounter>
    </div>
  );
}
export default App;
//root componnet

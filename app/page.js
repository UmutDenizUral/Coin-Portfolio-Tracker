import Image from "next/image";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import Footercripto from '@/components/Footercripto';
import SymbolOverViewWidget from "@/components/SymbolOverViewWidget";



export default function Home() {
  return (
    <div className="bgbody">

    <Nav></Nav>
      {/* <SymbolOverViewWidget ></SymbolOverViewWidget> */}
    <Section></Section>

    <Footercripto></Footercripto>
    </div>
  )
}

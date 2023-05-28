import { AppleMusicDemo } from "../components/apple-music-demo"
import DashboardPage from "../components/dashboard"
import {
	createTheme,
	NextUIProvider } from "@nextui-org/react";
  
  const lightTheme = createTheme({
	type: "light",
	theme: {
	  colors: {}
	}
  });
  
export default function IndexPage() {
    return (
        <><NextUIProvider theme={lightTheme}>

            <AppleMusicDemo />     <DashboardPage /></NextUIProvider> 
      
        </>
      )
    }
    
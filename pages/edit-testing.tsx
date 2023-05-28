import DashboardPage from "../components/latests/dashboard"
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

            <DashboardPage />    </NextUIProvider> 
      
        </>
      )
    }
    
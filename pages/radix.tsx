import  AppleMusicDemo  from "../components/login"
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

            <AppleMusicDemo /></NextUIProvider> 
      
        </>
      )
    }
    
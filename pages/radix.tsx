import { AppleMusicDemo } from "../components/apple-music-demo"
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
    
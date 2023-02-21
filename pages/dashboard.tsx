import { AppShell } from '@saas-ui/app-shell'
import {
    Sidebar,
    SidebarSection,
    SidebarToggleButton,
    SidebarOverlay,
    NavGroup,
    NavItem,
  } from '@saas-ui/sidebar'
  import {
    Container,
    Text,
    Spacer,
    MenuButton,
    Menu,
    MenuItem,
    Box,
    AlertIcon,
    IconButton,
    MenuList,
  } from '@chakra-ui/react'
  import {
    Persona,
    PersonaContainer,
    PersonaAvatar,
    PersonaDetails,
    PersonaLabel,
    PersonaSecondaryLabel,
    PersonaTertiaryLabel,
    Presence,
  } from '../components/persona'
  import {
    AlertTriangle,
    ArrowRight,
    Check,
    ChevronLeft,
    ChevronRight,
    Circle,
    ClipboardCheck,
    Copy,
    CreditCard,
    File,
    FileText,
    HelpCircle,
    Image,
    Laptop,
    Loader2,
    LucideProps,
    Moon,
    MoreVertical,
    Pizza,
    Plus,
    Settings,
    SunMedium,
    Trash,
    Twitter,
    User,
    X,
    type Icon as LucideIcon,
  } from "lucide-react"
  

export default function IndexPage() {
    return (
        <>
       <AppShell
  sidebar={
    <Sidebar width="30%">
      <SidebarSection direction="row">
        Logo goes here
        <Spacer />
        <Menu>
          <MenuButton
            as={IconButton}
            icon={
              <PersonaAvatar
                presence="online"
                size="xs"
                src="/showcase-avatar.jpg"
              />
            }
            variant="ghost"
          />
          <MenuList>
            <MenuItem>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </SidebarSection>
      <SidebarSection flex="1" overflowY="auto">
        <NavItem icon={<CreditCard />}>Home</NavItem>
        <NavItem icon={<Check />}>Contacts</NavItem>
      </SidebarSection>
    </Sidebar>
  }
>
<Box as="main" flex="1" py="2" px="4" overflowY="auto">
    Your application content
  </Box>
</AppShell>
      
        </>
      )
    }
    
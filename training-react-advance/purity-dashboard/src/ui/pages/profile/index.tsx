import { VStack } from "@chakra-ui/react"

// Components
import Header from "@/ui/components/Header"

// Constants
import { ROUTES } from "@/lib/constants"

const ProfilePage = () => (
  <VStack>
    <VStack>
      <Header name="Profile" path={ROUTES.PROFILE} />

    </VStack>

  </VStack>
)

export default ProfilePage

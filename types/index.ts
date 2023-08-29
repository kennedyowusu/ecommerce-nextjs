interface MenuItem {
  id: number
  name: string
  url?: string
}

interface MobileMenuProps {
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>
}

interface WrapperProps {
  children: React.ReactNode
  className?: string
}

interface slidesDataProps {
  id: number
  title: string
  image: string
}

interface Product {
  id: number
  title: string
  image: string
  price: number
  description: string
}

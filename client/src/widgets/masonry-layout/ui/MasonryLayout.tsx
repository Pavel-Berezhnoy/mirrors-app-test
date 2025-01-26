import { ReactNode } from 'react'
import { Box } from '@mui/material'

type Props = {
  params: {
    columns: number,
    rows: number
  }
  children: ReactNode
}

export default function MasonryLayout({ params, children }: Props) {
  return (
    <Box
      display="grid"
      gridTemplateColumns={`repeat(${params.columns}, 1fr)`}
      padding="0 1.6rem"
      gap="1.6rem"
    >
      {children}
    </Box>
  )
}

import { Box } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

export default function DefaultLayout({ children }: Props) {
  return (
    <Box width="100%" height="100%" padding="72px 16px" margin="0 auto" maxWidth="1400px">
      {children}
    </Box>
  )
}

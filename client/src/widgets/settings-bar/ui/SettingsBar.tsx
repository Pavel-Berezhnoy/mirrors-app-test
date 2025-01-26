import { Box, Button, Typography } from "@mui/material"
import { Settings } from "../../../shared/types/settings"

type Props = {
  settings: Settings
  refreshHandle: () => void
}

export default function SettingsBar({ settings, refreshHandle }: Props) {
  return (
    <Box
      display="flex"
      gap="2.4rem"
      alignItems="center"
      padding="1.2rem 0"
      borderBottom="1px solid rgba(0, 0, 0, 0.3)"
    >
      <Typography fontSize="1.6rem" lineHeight="2rem" variant="body1">
        Layout: {settings.layout.current}
      </Typography>
      <Typography fontSize="1.6rem" lineHeight="2rem" variant="body1">
        Template: {settings.template}
      </Typography>
      <Typography fontSize="1.6rem" lineHeight="2rem" variant="body1">
        Navigation: {settings.navigation}
      </Typography>
      <Typography fontSize="1.6rem" lineHeight="2rem" variant="body1">
        Rows: {settings.layout.params[settings.layout.current].rows}
      </Typography>
      <Typography fontSize="1.6rem" lineHeight="2rem" variant="body1">
        Columns: {settings.layout.params[settings.layout.current].columns}
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{ fontSize: '1.4rem' }}
        onClick={refreshHandle}
      >
        Refresh
      </Button>
    </Box>
  )
}

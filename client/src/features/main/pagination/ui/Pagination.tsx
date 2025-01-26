import { Box, Pagination as MuiPagination } from "@mui/material"
import { ChangeEvent } from "react"
import { TPagination } from "../../../../shared/types/pagination"

type Props = {
  pagination: TPagination,
  countElements: number
  paginateHandle: (pagination: TPagination) => void
}

export default function Pagination({ countElements, paginateHandle, pagination }: Props) {
  const paginationHandle = (_: ChangeEvent<unknown>, page: number) => {
    paginateHandle({ ...pagination, page })
  }
  return (
    <Box marginTop="1.6rem" padding="0 1.6rem">
      <MuiPagination
        sx={{
          '& .MuiPaginationItem-root': {
            fontSize: '1.4rem'
          }
        }}
        page={pagination.page}
        count={Math.ceil(countElements / pagination.perPage)}
        onChange={paginationHandle}
      />
    </Box>
  )
}

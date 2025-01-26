import { Box, Button } from '@mui/material'
import { TPagination } from '../../../../shared/types/pagination';

type Props = {
  pagination: TPagination,
  countElements: number
  countMore: number
  paginateHandle: (pagination: TPagination) => void
}

export default function MorePagination({
  countElements, paginateHandle, pagination, countMore,
}: Props) {

  const paginationHandle = () => {
    if (pagination.perPage < countElements) {
      paginateHandle({ ...pagination, perPage: pagination.perPage + countMore })
    }
  }

  return (pagination.perPage < countElements) && (
    <Box marginTop="1.6rem" padding="0 1.6rem">
      <Button sx={{ fontSize: '1.4rem' }} variant='contained' onClick={paginationHandle}>More</Button>
    </Box>
  )
}

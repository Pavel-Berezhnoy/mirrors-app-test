import { Card, CardHeader, CardActions, Box, Typography, CardContent, CardActionArea } from '@mui/material'
import { Post } from '../../../../shared/types/post'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { Link } from 'react-router-dom';
import { formatRelativeDate } from '../../../../shared/utils/format-date';

type Props = {
  card: Post
}

export default function ClassicCard({ card }: Props) {
  return (
    <Card>
      <CardActionArea
        sx={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'flex-start' }}
        LinkComponent={Link}
        target='_blank'
        to={card.permalink}
      >
        <CardHeader title={card.user.username} subheader={formatRelativeDate(card.date)} />
        <CardContent sx={{ flexGrow: '1' }}>
          <Typography fontSize="1.4rem" lineHeight="1.8rem" variant="body1">
            {card.caption}
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: '0.8rem 1.6rem 1.6rem' }}>
          <Box display="flex" gap="1.2rem" alignItems="center">
            <FavoriteIcon />
            <Typography fontSize="1.4rem" lineHeight="1.8rem" variant='body1'>{card.likes}</Typography>
          </Box>
          <Box display="flex" gap="1.2rem" alignItems="center">
            <ModeCommentIcon />
            <Typography fontSize="1.4rem" lineHeight="1.8rem" variant='body1'>{card.comments}</Typography>
          </Box>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

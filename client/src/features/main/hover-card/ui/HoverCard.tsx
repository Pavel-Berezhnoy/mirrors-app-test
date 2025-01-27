import { Card, CardHeader, CardActions, Box, Typography, CardContent, CardActionArea, Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { Post } from '../../../../shared/types/post'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { Link } from 'react-router-dom';
import { formatRelativeDate } from '../../../../shared/utils/format-date';
import { useState } from 'react';;

type Props = {
  card: Post
}

export default function HoverCard({ card }: Props) {
  const [openAccordion, setOpenAccordion] = useState(false);

  const openAccordionHandle = () => {
    setOpenAccordion(true);
  }

  const closeAccordionHandle = () => {
    setOpenAccordion(false);
  }

  return (
    <Card onMouseOver={openAccordionHandle} onMouseLeave={closeAccordionHandle}>
      <Link target='_blank' to={card.permalink}>
        <CardActionArea
          sx={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'flex-start' }}
        >
          <CardHeader
            title={card.user.username}
            subheader={formatRelativeDate(card.date)}
            sx={{ color: 'text.primary' }}
          />
          <CardContent sx={{ flexGrow: '1' }}>
            <Typography
              fontSize="1.4rem" 
              lineHeight="1.8rem"
              variant="body1" 
              sx={{ color: 'text.primary' }}
            >
              {card.caption}
            </Typography>
          </CardContent>
          <Accordion expanded={openAccordion} sx={{ width: '100%' }}>
            <AccordionSummary sx={{ display: 'none' }} disabled></AccordionSummary>
            <AccordionDetails>
              <CardActions>
                <Box display="flex" gap="1.2rem" alignItems="center">
                  <FavoriteIcon />
                  <Typography fontSize="1.4rem" lineHeight="1.8rem" variant='body1'>
                    {card.likes}
                  </Typography>
                </Box>
                <Box display="flex" gap="1.2rem" alignItems="center">
                  <ModeCommentIcon />
                  <Typography fontSize="1.4rem" lineHeight="1.8rem" variant='body1'>
                    {card.comments}
                  </Typography>
                </Box>
              </CardActions>
            </AccordionDetails>
          </Accordion>
        </CardActionArea>
      </Link>
    </Card>
  )
}

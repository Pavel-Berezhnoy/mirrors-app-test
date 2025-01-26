import { Box } from "@mui/material";
import SettingsBar from "../../../widgets/settings-bar";
import { useEffect, useState } from "react";
import { Settings } from "../../../shared/types/settings";
import { getSettings } from "../../../shared/api/settings";
import { Post } from "../../../shared/types/post";
import { getPosts } from "../../../shared/api/posts";
import GridLayout from "../../../widgets/grid-layout";
import MasonryLayout from "../../../widgets/masonry-layout";
import ClassicCard from "../../../features/main/classic-card";
import HoverCard from "../../../features/main/hover-card";
import { TPagination } from "../../../shared/types/pagination";
import MorePagination from "../../../features/main/more-pagination";
import Pagination from "../../../features/main/pagination";

const layouts = {
  grid: GridLayout,
  masonry: MasonryLayout
}

const cards = {
  classic: ClassicCard,
  hover: HoverCard,
}

const paginations = {
  'load-more': MorePagination,
  pagination: Pagination,
}

export default function MainView() {
  const [posts, setPosts] = useState<Post[]>([])
  const [settings, setSettings] = useState<Settings>()
  const [pagination, setPagination] = useState<TPagination>({
    page: 1,
    perPage: 10
  })

  useEffect(() => {
    getSettings().then((response) => {
      setSettings(response)
      setPagination({
        page: 1,
        perPage: response
          ? response.layout.params[response.layout.current].columns * response.layout.params[response.layout.current].rows
          : 10
      })
    })
    getPosts().then((response) => {
      setPosts(response || [])
    })
  }, [])

  const Layout = settings ? layouts[settings.layout.current] : 'p'
  const Card = settings ? cards[settings.template] : 'p'
  const Pagination = settings ? paginations[settings.navigation] : 'p'

  const refreshSettingsHandle = () => {
    getSettings().then((response) => {
      setSettings(response)
      setPagination({
        page: 1,
        perPage: response
          ? response.layout.params[response.layout.current].columns * response.layout.params[response.layout.current].rows
          : 10
      })
    })
  }

  const paginationHandle = (newPagination: TPagination) => {
    setPagination(newPagination)
  }

  return (
    <Box display="flex" flexDirection="column" gap="2.4rem">
      {settings && <SettingsBar settings={settings} refreshHandle={refreshSettingsHandle} />}
      {settings && (
        <Layout params={settings.layout.params[settings.layout.current]}>
          {posts.slice(pagination.page * pagination.perPage - pagination.perPage, pagination.page * pagination.perPage).map((post) => (
            <Card key={post.id} card={post} />
          ))}
        </Layout>
      )}
      {settings && (
         <Pagination
          countElements={posts.length}
          pagination={pagination}
          countMore={settings.layout.params[settings.layout.current].columns * settings.layout.params[settings.layout.current].rows}
          paginateHandle={paginationHandle}
        />
      )}
    </Box>
  )
}
